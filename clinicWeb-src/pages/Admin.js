import React, { Component } from "react";
import "./Admin.css";
import img1 from "../images/online_books.png";
import fire from "../config/fire";

export default class Admin extends Component {
  constructor(props) {
    super(props);
  }

  login() {
    fire.auth().signOut();
  }
  render() {
    return (
      <div id="container">
        <div className="App-header">
          <p>A Complete Note Set For RACGP Fellowship Exam</p>
        </div>
        <div>
          <br />
        </div>
        <div className="App-header2">
          <div className="col-1">
            <img src={img1} />;
          </div>
          <div className="col-2">
            <div className="row-1">
              <p>Admin Portal</p>
            </div>
            <div className="row-2">
              <a href="dashboard">Report dashboard</a>

              <label>
                <img /*src={img1} alt=""*/ />
              </label>
            </div>
            <div className="row-3">
              <a href="user">User Management</a>
              <br />
              <a href="addremovenotes">Add/Remove Notes</a>
              <br />
              <a href="editnotes">Edit Notes</a>
            </div>
            <button className="btn-class" onClick={this.login}>
              Log Out
            </button>
          </div>
        </div>
      </div>
    );
  }
}
