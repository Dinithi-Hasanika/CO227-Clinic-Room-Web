import React, { Component } from "react";

let dialogStyles = {
  width: "500px",
  maxWidth: "100%",
  margin: "0 auto",
  position: "fixed",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  zIndex: "999",
  backgroundColor: "black",
  padding: "10px 20px 40px",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column"
};

let dialogCloseButtonStyles = {
  marginBottom: "15px",
  padding: "3px 8px",
  cursor: "pointer",
  borderRadius: "50%",
  border: "none",
  width: "30px",
  height: "30px",
  fontWeight: "bold",
  backgroundColor: "red",
  alignSelf: "flex-end "
};

class Dialog extends Component {
  render() {
    let dlog = (
      <div style={dialogStyles}>
        <button style={dialogCloseButtonStyles} onClick={this.props.onClose}>
          X
        </button>
        <div>{this.props.children}</div>
      </div>
    );

    if (!this.props.isOpen) {
      dlog = null;
    }
    return <div>{dlog}</div>;
  }
}

export default Dialog;
