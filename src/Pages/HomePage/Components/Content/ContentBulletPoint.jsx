import React, { Component } from "react";
import Gap from "../../../../CommonComponents/Gap";

export class ContentBulletPoint extends Component {
  style = {
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    borderRadius: "10px",
    margin: this.props.margin,
    padding: this.props.padding,
    width: "100%",
    leftSection: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
      width: "calc(30px + 1vw)",
      background: "#f7f8fa",
      borderRadius: "100%",
      height: "calc(30px + 1vw)"
    },
    image: { width: "100%" },
    title: {
      margin: "0",
      lineHeight: "calc(12px + 1vw)",
      width: "100%",
      color: "#1D293F",
      fontSize: "calc(10px + 0.5vw)",
      fontWeight: "900"
    }
  };

  render() {
    return (
      <div style={this.style}>
        <div style={this.style.leftSection}>
          <img
            style={this.style.image}
            src={this.props.src}
            alt="Content Icon"
          />
        </div>
        <Gap value="2vw" />
        <div>
          <h5 style={this.style.title}>{this.props.title}</h5>
        </div>
      </div>
    );
  }
}

export default ContentBulletPoint;
