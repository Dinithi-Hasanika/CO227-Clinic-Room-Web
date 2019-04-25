import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import MemberPage from "./components/Member";
import HomePage from "./components/home";
import Logs from "./Logs";
import UserManagement from "./pages/UserManagement";

import Bookmark from "./components/bookmark";
import AllNotes from "./All-Notes/AllNotes";
import DataAdd from "./AddBook/dataadd";
import AddBook from "./AddBook/addbook";
// import ABC from "./BookContent/ABC";
// import PQR from "./BookContent/PQR";
import Pdf from "./pdf-view/Pdf";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" render={() => <HomePage />} />

          <Route exact={true} path="/logs" render={() => <Logs />} />

          <Route exact={true} path="/user" render={() => <UserManagement />} />

          <Route exact={true} path="/bookmarks" render={() => <Bookmark />} />

          <Route exact={true} path="/notes" render={() => <AllNotes />} />

          <Route exact={true} path="/buy" render={() => <DataAdd />} />

          <Route exact={true} path="/bought" render={() => <AddBook />} />

          {/* <Route exact={true} path="/abc" render={() => <ABC />} />

          <Route exact={true} path="/pqr" render={() => <PQR />} /> */}
          <Route exact={true} path="/abc" render={() => <Pdf />} />

          <Route
            exact={true}
            path="/memberpage"
            render={() => <MemberPage />}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
