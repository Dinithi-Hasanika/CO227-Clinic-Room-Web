import React, { Component } from "react";
import "./BookForm.css";

class BookForm extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      newBookName: ""
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.writeNote = this.writeNote.bind(this);
  }

  //when the user input chnages, set the newBookName
  //to the value of what is in the input box
  handleUserInput(e) {
    this.setState({
      newBookName: e.target.value // the value of the text input
    });
  }

  writeNote() {
    // call a method that sets the noteContent for a note to
    // the value of the input
    this.props.addNote(this.state.newBookName);

    // Set newBookName back to an empty string.
    this.setState({
      newBookName: ""
    });
  }

  render() {
    return (
      <div className="formWrapper">
        <input
          className="noteInput"
          placeholder="Write Book Name"
          value={this.state.newBookName}
          onChange={this.handleUserInput}
        />
        <button className="noteButton" onClick={this.writeNote}>
          Buy
        </button>
      </div>
    );
  }
}

export default BookForm;
