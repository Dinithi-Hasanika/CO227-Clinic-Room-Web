import React, { Component } from 'react';
import firebase from '../pages/Firebase';  //new
import { Link } from 'react-router-dom'; //new

export default class SignUp extends Component {
 
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('mydb1');
    this.unsubscribe = null;
    this.state = {
      mydb1: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const mydb1 = [];
    querySnapshot.forEach((doc) => {
      const { username, description } = doc.data();
      mydb1.push({
        key: doc.id,
        doc, // DocumentSnapshot
        username,
        description,
      });
    });
    this.setState({
      mydb1
   });
  }

  componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  delete(id){
    firebase.firestore().collection('user').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render () {
      return (
        <div>
             <div id='UserManagementContainer'>
                    <form id="remove">
                            <a href="/">Back</a>
                            <h1><u>Add or Remove Users</u></h1>
                            <h2>Remove Users</h2>
                            <input className="input type" type="text"
                             placeholder="User Name"/>
                             <button class="btn btn-primary"id="submit">Search</button>
                        
                    </form>

                            <br></br>
                           
                            <table class="table table-stripe">
                                <thead>
                                    <tr>
                                    <th>User Name</th>
                                    
                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.mydb1.map(mydb1 =>
                                        <tr>
                                            <td>{mydb1.username}</td>
                                            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Remove</button>
                                        </tr>
                                )}
                                </tbody>
                            </table>

                            <br></br><br></br>
                            <h2>Add Users</h2>
                            <br></br>
                            <table class="table table-stripe">
                                <thead>
                                    <tr>
                                    <th>User Name</th>
                                    
                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.mydb1.map(mydb1 =>
                                        <tr>
                                            <td>{mydb1.username}</td>
                                            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-success">Add</button>
                                        </tr>
                                )}
                                </tbody>
                            </table>
                 
             </div>
        </div>
      )
   }
}