import React, { Component } from 'react';
import '../App.css';
import img1 from '../images/online_books.png';
import ButtonLogOut from '../components/ButtonLogOut.js';
import firebase from '../pages/Firebase';  //new
import { Link } from 'react-router-dom'; //new


export default class Admin extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('user');
        this.unsubscribe = null;
        this.state = {
          user: []
        };
      }
    
      onCollectionUpdate = (querySnapshot) => {
        const user = [];
        querySnapshot.forEach((doc) => {
          const { title, description, author } = doc.data();
          user.push({
            key: doc.id,
            doc, // DocumentSnapshot
            title,
            description,
            author,
          });
        });
        this.setState({
          user
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
        <div id='container'>
                
                <div className="App-header">
                    <div className="row-4">
                    </div>
                    <div className="row-5">
                        <a href="logout"><ButtonLogOut/></a>
                    </div>
                </div>
                <div className="App-header2">
                    <div className="col-1">
                        <img src={img1}  />;
                    </div>
                    <div className="col-2">
                        <div className="row-1">
                            <p>
                                WELCOME
                            </p>
                        </div>
                        <div className="row-2">
                            <a href="dashboard">Report dashboard</a>
                            
                            <label >
                                <img /*src={img1} alt=""*/ /> 
                            </label>
                            
                        </div>
                        <div className="row-3">
                            <a href="user" >User Management</a><br></br>
                            <a href="addremovenotes" >Add/Remove Notes</a><br></br>
                            <a href="editnotes" >Edit Notes</a><br></br>
                            
                      

                        </div>
                    </div>
                </div>

        </div>
      )
   }
}



