import React, { Component } from "react";
import { connect } from "react-redux";
import UserList from "./UserList";
import "./UserManagement.css";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class UserManagement extends Component {
  render() {
    // console.log(this.props);
    const { userData } = this.props;
    return (
      <div className="words">
        <div>i am user manager</div>
        <div>
          <UserList userData={userData} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    userData: state.userDatas.userData
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "userData" }])
)(UserManagement);
