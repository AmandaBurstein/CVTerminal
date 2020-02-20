import React, { Component } from "react";
import "./PersonalDetails.css";
import DetailsModal from "./DetailsModal.jsx";

export default class PersonalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      showModal: false
    };
  }

  showDroplist = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  showModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className="personal-details">
        <button className="details-button" onClick={this.showDroplist}>
          <div className="details">
            <img className="logo" src="./InstagramLogo.svg" alt="logo" />
            <div className="drop-title">Personal Details</div>
            <img className="arrow" src="./DroplistArrow.svg" alt="arrow" />
          </div>
        </button>
        {this.state.showMenu ? (
          <div className="menu">
            <div className="inputs">
              <input className="input" placeholder="Full Name" />
              <input className="input" placeholder="Email" />
              <button className="done-button"> Done </button>
            </div>
            <div className="add-header">Add More Options</div>
            <div className="add-options">
              <button className="add-button">Address</button>
              <button className="add-button">Date of Birth</button>
              <button className="add-button">Nationality</button>
              <button className="add-button">Phone Number</button>
              <button className="add-button">Marital Status</button>
              <button className="add-button">Photo</button>
            </div>
          </div>
        ) : null}
        <button className="section-button" onClick={this.showModal}>
          Add Section
        </button>
        <div className={this.state.showModal ? "mask" : null}>
          {this.state.showModal ? (
            <div className="modal">
              <DetailsModal />
              <button className="close-modal" onClick={this.closeModal}>
                x
              </button>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
