import React, { Component } from "react";
import { Link } from "react-router-dom";

class Button extends Component {
  style = {
    backgroundColor: this.props.backgroundColor
      ? this.props.backgroundColor
      : "#0F53FA",
    border: this.props.border,
    color: this.props.color ? this.props.color : "#E5E5E5",
    padding: this.props.padding ? this.props.padding : "15px 32px",
    textAlign: this.props.textAlign ? this.props.textAlign : "center",
    textDecoration: this.props.textDecoration,
    display: this.props.display ? this.props.display : "inline-block",
    borderRadius: this.props.borderRadius ? this.props.borderRadius : "5px",
    fontSize: this.props.fontSize ? this.props.fontSize : "16px",
    fontStyle: this.props.fontStyle ? this.props.fontStyle : "normal",
    fontWeight: this.props.fontWeight ? this.props.fontWeight : "500",
    height: this.props.height
  };

  render = () => {
    return (
      <button style={this.style}>
        {this.props.label ? this.props.label : "no label"}
      </button>
    );
  };
}

export default Button;
