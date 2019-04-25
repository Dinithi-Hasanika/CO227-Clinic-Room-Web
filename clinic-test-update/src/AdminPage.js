import React, { Component } from "react";

import fire from "./config/fire";
class AdminPage extends Component {
  constructor(props) {
    super(props);
  }
  login() {
    fire.auth().signOut();
  }
  render() {
    return (
      <div>
        <h1>Hii I am Admin Page</h1>
        <button onClick={this.login}>Log Out</button>
      </div>
    );
  }
}

export default AdminPage;
