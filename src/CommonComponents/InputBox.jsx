import React, { Component } from "react";

export class InputBox extends Component {
  handleEnteredInput = event => {
    this.props.onChange(event);
  };

  inputBoxStyle = {
    width: this.props.width ? this.props.width : "100%",
    height: this.props.height ? this.props.height : "50px",
    margin: this.props.margin ? this.props.margin : "0",
    padding: this.props.padding,
    color: this.props.color,
    border: this.props.border ? this.props.border : "1px solid #EBEDF4",
    borderRadius: this.props.borderRadius ? this.props.borderRadius : "5px",
    fontSize: this.props.fontSize ? this.props.fontSize : "18px",
    background: "#FFFFFF"
  };

  render() {
    return this.props.rows ? (
      <textarea
        style={this.inputBoxStyle}
        defaultValue={this.props.value}
        placeholder={this.props.placeholder}
        type={this.props.type}
        onChange={this.handleEnteredInput}
        onBlur={this.props.onBlur}
        autoComplete={this.props.autoComplete ? "on" : "off"}
        rows={this.props.rows}
        cols={this.props.cols}
      />
    ) : (
      <input
        style={this.inputBoxStyle}
        defaultValue={this.props.value ? this.props.value : ""}
        placeholder={this.props.placeholder}
        type={this.props.type}
        onChange={this.handleEnteredInput}
        onBlur={this.props.onBlur}
        autoComplete={this.props.autoComplete ? "on" : "off"}
        size={this.props.size}
      />
    );
  }
}

export default InputBox;
