import React, { Component } from "react";
import bookList from "../components/books.json";
import { Container, Row, Col } from "reactstrap";
import "./addbook.css";
import fire from "../config/fire";

var bought = 0;

class AddBook extends Component {
  state = {
    hel: []
  };

  componentDidMount() {
    const prev = this.state.hel;

    this.db = fire
      .database()
      .ref("/User_Name/Dulanjali")
      .child("book");

    this.db.on("child_added", snap => {
      prev.push({
        id: snap.key,
        bookName: snap.val().bookName
      });
      this.setState({
        hel: prev
      });
    });
    console.log(this.state.hel);
  }

  handleUserDatabase(e) {
    if (this.bought === 0) {
      return (
        <button>
          <div>{e}</div>
        </button>
      );
    }
  }

  renderBooks(e) {}

  addNote(name) {
    this.db = fire
      .database()
      .ref("/User_Name/Dulanjali")
      .child("book");

    this.db.push().set({ bookName: name });
  }

  render() {
    return (
      <Row>
        <Col>
          <div>
            <div className="add-list">
              <div className="book fade-in">
                {bookList.map(note => {
                  this.bought = 0;

                  return (
                    <div>
                      {this.state.hel.map(n => {
                        if (n.bookName === note.name) {
                          this.bought = 1;
                          return (
                            <div className="bought-list">
                              <button>
                                <div>{note.name}</div>
                              </button>
                            </div>
                          );
                        }
                      })}

                      <div className="book-list">
                        {this.handleUserDatabase(note.name)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

export default AddBook;
