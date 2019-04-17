import React, { Component } from "react";

import fire from "../config/fire";

import { Link } from "react-router-dom";

class Show extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},

      key: ""
    };
  }

  componentDidMount() {
    const ref = fire
      .firestore()
      .collection("user")
      .doc(this.props.match.params.id);

    ref.get().then(doc => {
      if (doc.exists) {
        this.setState({
          user: doc.data(),

          key: doc.id,

          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id) {
    fire
      .firestore()
      .collection("user")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");

        this.props.history.push("/");
      })
      .catch(error => {
        console.error("Error removing document: ", error);
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">{this.state.user.title}</h3>

            <h3 class="panel-title">hello</h3>
          </div>

          <div class="panel-body">
            <dl>
              <dt>Description:</dt>

              <dd>{this.state.user.description}</dd>

              <dt>Author:</dt>

              <dd>{this.state.user.author}</dd>
            </dl>
            <Link to={"/edit/${this.state.key}"} class="btn btn-success">
              Edit
            </Link>
            &nbsp;
            <button
              onClick={this.delete.bind(this, this.state.key)}
              class="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
