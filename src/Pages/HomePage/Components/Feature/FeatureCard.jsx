import React, { Component } from "react";
import Gap from "../../../../CommonComponents/Gap";

export class FeatureCard extends Component {
  style = {
    display: "flex",
    textAlign: "left",
    background: "#f7f8fa",
    borderRadius: "10px",
    margin: this.props.margin,
    padding: this.props.padding,
    width: this.props.width,
    leftSection: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "calc(" + this.props.width + " * 0.2)",
      background: "#FFFFFF",
      borderRadius: "50%",
      height: "calc(" + this.props.width + " * 0.2)"
    },
    image: { width: "50%" },
    rightSection: {
      width: "calc(" + this.props.width + " * 0.8)"
    },
    title: {
      margin: "0",
      lineHeight: "calc(12px + 1vw)",
      width: "100%",
      color: "#1D293F",
      fontSize: "calc(12px + 0.5vw)",
      fontWeight: "900"
    },
    description: {
      margin: "0",
      width: "100%",
      color: "#7C8087",
      fontSize: "calc(8px + 0.5vw)"
    }
  };

  render() {
    return (
      <div style={this.style}>
        <div style={this.style.leftSection}>
          <img
            style={this.style.image}
            src={this.props.src}
            alt="Feature Icon"
          />
        </div>
        <Gap value="2vw" />
        <div style={this.style.rightSection}>
          <h5 style={this.style.title}>{this.props.title}</h5>
          <Gap value="1vw" />
          <p style={this.style.description}>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default FeatureCard;
