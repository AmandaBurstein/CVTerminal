import React, { Component } from "react";

export default class Modal extends Component {
  style = {
    addWrapper: {
      width: "100vw",
      height: "100vh"
    },

    modalHeader: {
      display: "flex",
      justifyContent: "center",
      color: "#7c8087",
      fontFamily: "Poppins",
      fontSize: "24px",
      marginBottom: "50px"
    },

    buttonWrapper: {
      display: "grid",
      gridTemplateColumns: "250px 250px 250px 250px",
      gridColumnGap: "5px",
      gridRowGap: "5px",
      justifyContent: "center"
    },

    addSection: {
      backgroundColor: "#39414f",
      color: "white",
      fontFamily: "Poppins",
      fontSize: "28px",
      fontWeight: "bold",
      letterSpacing: "1px",
      cursor: "pointer",
      border: "none",
      outline: "none",
      height: "200px",
      width: "250px"
    },

    addCustom: {
      backgroundColor: "#ffd166",
      color: "#39414f",
      fontFamily: "Poppins",
      fontSize: "28px",
      fontWeight: "bold",
      letterSpacing: "1px",
      cursor: "pointer",
      border: "none",
      outline: "none"
    }
  };
  render() {
    return (
      <div style={this.style.addWrapper}>
        <div style={this.style.modalHeader}>Add a Section</div>
        <div style={this.style.buttonWrapper}>
          <button style={this.style.addSection}>Skills</button>
          <button style={this.style.addSection}>Education</button>
          <button style={this.style.addSection}>Experience</button>
          <button style={this.style.addSection}>Languages</button>
          <button style={this.style.addSection}>Interests</button>
          <button style={this.style.addSection}>Projects</button>
          <button style={this.style.addSection}>Courses</button>
          <button style={this.style.addSection}>Certifications</button>
          <button style={this.style.addSection}>Awards</button>
          <button style={this.style.addSection}>Publications</button>
          <button style={this.style.addSection}>References</button>
          <button style={this.style.addCustom}>
            Can't find it? Add a custom section
          </button>
        </div>
      </div>
    );
  }
}
