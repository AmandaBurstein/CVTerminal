import React, { Component } from "react";
import Modal from "./Modal";

export default class ModalContainer extends Component {
  style = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(240, 246, 250, 0.884)",
    zIndex: "50",
    opacity: "1",
    transition: "0.3s",
    paddingTop: "70px"
  };

  render() {
    return (
      <div style={this.style}>
        <Modal />
      </div>
    );
  }
}
