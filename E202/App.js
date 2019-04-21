import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MemberPage from "./component/Member";
import HomePage from "./component/home";
import Bookmark from "./component/bookmark";
import AllNotes from "./All-Notes/AllNotes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" render={() => <HomePage />} />

          <Route exact={true} path="/user" render={() => <MemberPage />} />

          <Route exact={true} path="/bookmarks" render={() => <Bookmark />} />

          <Route exact={true} path="/notes" render={() => <AllNotes />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
