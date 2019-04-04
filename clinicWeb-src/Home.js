import React, { Component } from "react";

import fire from "./config/fire";
import LoginPath from "./LoginPath";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  login() {
    fire.auth().signOut();
  }
  render() {
    return (
      <div>
        <h1>I am Home</h1>
        <button onClick={this.login}>Log Out</button>
      </div>
    );
  }
}

export default Home;
