import React, { Component } from "react";
import "./dataadd.css";
import Book from "../Book/book";
import BookForm from "../BookForm/BookForm";
import fire from "../config/fire";

class DataAdd extends Component {
  constructor(props) {
    super(props);
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);

    this.database = fire
      .database()
      .ref("/User_Name/Dulanjali")
      .child("book");

    //we are setup the react state of our component
    this.state = {
      book: []
    };
  }

  componentWillMount() {
    const previousNotes = this.state.book;

    // DataSnapshot
    this.database.on("child_added", snap => {
      previousNotes.push({
        id: snap.key,
        bookName: snap.val().bookName
      });

      this.setState({
        book: previousNotes
      });
    });

    this.database.on("child_removed", snap => {
      for (var i = 0; i < previousNotes.length; i++) {
        if (previousNotes[i].id === snap.key) {
          previousNotes.splice(i, 1);
        }
      }

      this.setState({
        book: previousNotes
      });
    });
  }

  addNote(note) {
    this.database.push().set({ bookName: note });
  }

  removeNote(noteId) {
    console.log("from the parent: " + noteId);
    this.database.child(noteId).remove();
  }

  render() {
    return (
      <div className="to-all">
        <div className="notesWrapper">
          <div className="notesHeader">
            <div className="heading">Your Books</div>
          </div>

          <div className="notesBody">
            {this.state.book.map(note => {
              return (
                <Book
                  bookName={note.bookName}
                  noteId={note.id}
                  key={note.id}
                  removeNote={this.removeNote}
                />
              );
            })}
          </div>

          <div className="notesFooter">
            <BookForm addNote={this.addNote} />
          </div>
        </div>
      </div>
    );
  }
}

export default DataAdd;
