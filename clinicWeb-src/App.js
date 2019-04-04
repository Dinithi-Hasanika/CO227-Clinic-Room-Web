import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import MemberPage from "./components/Member";
import HomePage from "./components/home";
import Logs from "./Logs";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" render={() => <HomePage />} />

          <Route exact={true} path="/logs" render={() => <Logs />} />

          <Route exact={true} path="/user" render={() => <MemberPage />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
