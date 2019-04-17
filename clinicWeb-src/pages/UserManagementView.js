import React, { Component } from "react";

import fire from "../config/fire"; //new

import { Link } from "react-router-dom"; //new

import Show from "../pages/Show";

export default class UserManagementView extends Component {
  constructor(props) {
    super(props);

    this.ref = fire.firestore().collection("userData");

    this.unsubscribe = null;

    this.state = {
      userData: []
    };
  }

  onCollectionUpdate = querySnapshot => {
    const userData = [];

    querySnapshot.forEach(doc => {
      const { userName, memtype, password, email, hasAgreed } = doc.data();

      userData.push({
        key: doc.id,

        doc, // DocumentSnapshot

        userName,

        email,

        password,

        memtype,

        hasAgreed
      });
    });

    this.setState({
      userData
    });

    console.log("Hello ");

    console.log(userData.length);

    console.log(userData[0].hasAgreed);
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  delete(id) {
    fire
      .firestore()
      .collection("userData")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");

        this.props.history.push("/");
      })
      .catch(error => {
        console.error("Error removing document: ", error);

        ///${mydb1.key}
      });
  }

  render() {
    return (
      <div>
        <div id="UserManagementContainer">
          <div className="App-header3">
            <form id="remove">
              <br />
              <br />

              <p />
            </form>
          </div>

          <div className="App-header3">
            <font color="white">
              <table class="table table-stripe">
                <thead>
                  <tr>
                    <th>
                      <font color="white">User Name</font>
                    </th>
                    <th>
                      <font color="white">Member Type</font>
                    </th>
                    <th>
                      <font color="white">Email</font>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {this.state.userData.map(userData => (
                    <tr>
                      <td>
                        <Link to={"/show"}>
                          <font color="white">{userData.userName}</font>
                        </Link>
                      </td>
                      <td>
                        <Link to={"/show"}>
                          <font color="white">{userData.memtype} </font>
                        </Link>
                      </td>
                      <td>
                        <Link to={"/show"}>
                          <font color="white">{userData.email} </font>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </font>
          </div>
        </div>
      </div>
    );
  }
}
