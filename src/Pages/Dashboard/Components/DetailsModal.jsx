import React, { Component } from "react";
import "./DetailsModal.css";

export default class DetailsModal extends Component {
  render() {
    return (
      <div className="add-wrapper">
        <div className="modal-header">Add a Section</div>
        <div className="button-wrapper">
          <button className="add-section">Skills</button>
          <button className="add-section">Education</button>
          <button className="add-section">Experience</button>
          <button className="add-section">Languages</button>
          <button className="add-section">Interests</button>
          <button className="add-section">Projects</button>
          <button className="add-section">Courses</button>
          <button className="add-section">Certifications</button>
          <button className="add-section">Awards</button>
          <button className="add-section">Publications</button>
          <button className="add-section">References</button>
          <button className="add-custom">
            Can't find it? Add a custom section
          </button>
        </div>
      </div>
    );
  }
}
