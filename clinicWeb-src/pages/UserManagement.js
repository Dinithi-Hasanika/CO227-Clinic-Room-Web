import React, { Component } from "react";
import UserManagementView from "./UserManagementView";
import "./UserManagement.css";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import AddUser from "./AddUser";
import UserDelete from "./UserDelete";
import Show from "./Show";
import Admin from "./Admin";

class UserManagement extends Component {
  state = {
    isView: false,
    isAdd: false,
    isRemove: false
  };
  handleView() {
    this.setState({ isView: true });
  }
  render() {
    return (
      <Router basename="user-management/">
        <div className="words0">
          <div className="words">
            <Link to="/view-users">
              <div className="btn0">VIEW</div>
            </Link>
            <Link to="/add-user">
              <div className="btn1">ADD</div>
            </Link>
            <Link to="/remove-user">
              <div className="btn1">REMOVE</div>
            </Link>
          </div>

          <div className="words2">
            <div className="words1">USERS MANAGEMENT SECTION</div>
            <Route exact path="/view-users" component={UserManagementView} />
            <Route exact path="/add-user" component={AddUser} />
            <Route exact path="/remove-user" component={UserDelete} />
            <Route exact path="/show" component={Show} />
          </div>
        </div>
      </Router>
    );
  }
}

export default UserManagement;
