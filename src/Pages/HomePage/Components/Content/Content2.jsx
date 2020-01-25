import React, { Component } from "react";

export class Content2 extends Component {
  style = {
    leftSection: {
      padding: "0 calc(10px + 5vw)"
    }
  };

  render() {
    return (
      <div className="Content1Wrapper">
        <div>
          <img
            width="100%"
            src="../assets/images/content2_image.png"
            alt="Content2"
          ></img>
        </div>
        <div style={this.style.leftSection}>
          <h3>Edit your CV from anywhere in minutes</h3>
          <p>
            Edit already saved CVs anywhere and on the go. Changes are reflected
            in real-time; you can download and share updated CV with one click.
          </p>
        </div>
      </div>
    );
  }
}

export default Content2;
