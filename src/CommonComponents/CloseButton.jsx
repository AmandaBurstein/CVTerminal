import React, { Component } from "react";

export default class CloseButton extends Component {
  style = {
    position: "absolute",
    top: "5px",
    right: "20px",
    fontFamily: "Poppins",
    fontSize: "24px",
    outline: "none",
    border: "none",
    cursor: "pointer",
    color: "#39414f",
    background: "transparent",
    zIndex: "100"
  };

  render() {
    return (
      <button style={this.style} onClick={this.props.onClick}>
        x
      </button>
    );
  }
}
