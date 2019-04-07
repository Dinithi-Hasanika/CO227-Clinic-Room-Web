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
             <div className="App-header">
             
             </div>

             <div  className="App-header3">
                   <form id="remove">
                        <a href="/">Back</a>
                        <br/><br/>
                        <h1><u>Add or Remove Users</u></h1>
                        <h2>Remove Users</h2>
                        <input className="input type" type="text"
                          placeholder="User Name"/>
                          <button id="submit">Remove</button>
                        
                    </form>
              </div>
              <div  className="App-header3">      
                  <table class="table table-stripe" fontcolor="r#37ccd6">
                      <thead>
                          <tr>
                          <th ><font color='white'>User Name</font></th>
                          <th>Description</th>
                          
                          </tr>
                      </thead>
                      <tbody>
                      {this.state.mydb1.map(mydb1 =>
                              <tr>
                                  <td><Link to={'/show/${mydb1.key}'}><font color='white'>{mydb1.username}</font></Link></td>
                                  <td>{mydb1.description}</td>
                                  <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Remove</button>
                              </tr>
                      )}
                      </tbody>
                  </table>
             </div>
          </div>
        </div>
      )
   }
}