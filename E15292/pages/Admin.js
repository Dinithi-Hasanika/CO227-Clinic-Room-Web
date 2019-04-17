import React, { Component } from 'react';
import '../App.css';
import img1 from '../images/online_books.png';
import ButtonLogOut from '../components/ButtonLogOut.js';
import firebase from '../pages/Firebase';  //new
import { Link } from 'react-router-dom'; //new


export default class Admin extends Component {
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



