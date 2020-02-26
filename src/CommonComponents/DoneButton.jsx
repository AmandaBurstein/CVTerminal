import React, { Component } from "react";

export default class DoneButton extends Component {
  style = {
    outline: "none",
    cursor: "pointer",
    backgroundColor: "#f9fafe",
    border: "1px solid #ebedf4",
    height: "50px",
    width: "275px",
    fontFamily: "Poppins",
    fontSize: "14px",
    marginTop: "15px",
    borderRadius: "4px",
    color: "#748aa1"
  };

  render() {
    return (
      <button style={this.style} onClick={this.props.onClick}>
        Done
      </button>
    );
  }
}
