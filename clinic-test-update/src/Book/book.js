import React, { Component } from "react";
import "./book.css";
import PropTypes from "prop-types";

class Book extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.bookName = props.bookName;
    this.noteId = props.noteId;
    this.handleRemoveNote = this.handleRemoveNote.bind(this);
  }

  handleRemoveNote(id) {
    this.props.removeNote(id);
  }

  render() {
    return (
      <div className="note fade-in">
        <span
          className="closebtn"
          onClick={() => this.handleRemoveNote(this.noteId)}
        >
          &times;
        </span>
        <p className="bookName">{this.bookName}</p>
      </div>
    );
  }
}

Book.propTypes = {
  bookName: PropTypes.string
};

export default Book;
