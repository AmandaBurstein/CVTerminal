import React, { Component } from "react";

class Button extends Component {
  style = {
    backgroundColor: this.props.backgroundColor
      ? this.props.backgroundColor
      : "#F9FAFE",
    border: this.props.border ? this.props.border : "1px solid #FFD166",
    color: this.props.color ? this.props.color : "#1D293F",
    padding: this.props.padding ? this.props.padding : "15px 30px",
    margin: this.props.margin ? this.props.margin : "15px",
    textAlign: this.props.textAlign ? this.props.textAlign : "center",
    textDecoration: this.props.textDecoration,
    display: this.props.display ? this.props.display : "inline-block",
    borderRadius: this.props.borderRadius ? this.props.borderRadius : "50px",
    fontSize: this.props.fontSize ? this.props.fontSize : "12px",
    fontWeight: this.props.fontWeight ? this.props.fontWeight : "bold",
    height: this.props.height,
    width: this.props.width,
    outline: "none",
    cursor: "pointer"
  };

  buttonClicked = (event, label) => {
    event.preventDefault();
    this.props.onClick(event, label);
  };

  render = () => {
    return (
      <button
        style={this.style}
        onClick={event => this.buttonClicked(event, this.props.label)}
      >
        {this.props.label ? this.props.label : "no label"}
      </button>
    );
  };
}

export default Button;
