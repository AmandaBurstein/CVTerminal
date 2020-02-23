import React, { Component } from "react";
import Gap from "./Gap";

export class ContentContainer extends Component {
  style = {
    container: {
      width: "300px"
    },
    header: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      width: "100%",
      background: "#FFFFFF",
      boxShadow: "0px 4px 4px rgba(19, 58, 81, 0.1)",
      borderRadius: "15px",
      padding: "15px 20px",
      zIndex: "2",
      title: {
        margin: "0",
        fontSize: "15px",
        color: "#060E23"
      }
    },
    body: {
      position: "relative",
      background: "#FFFFFF",
      boxShadow: "0px 1px 4px #E5E9F2",
      borderRadius: "5px",
      padding: "30px 10px",
      marginTop: "-20px",
      zIndex: "1"
    }
  };

  render() {
    return (
      <div style={this.style.container}>
        <div style={this.style.header}>
          <img src={this.props.iconURL} alt="icon" />
          <Gap value="5px" />
          <h5 style={this.style.header.title}>{this.props.title}</h5>
        </div>
        <div style={this.style.body}>{this.props.body}</div>
      </div>
    );
  }
}

export default ContentContainer;
