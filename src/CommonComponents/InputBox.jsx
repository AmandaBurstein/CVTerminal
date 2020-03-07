import React, { Component } from "react";

export class InputBox extends Component {
  handleEnteredInput = event => {
    this.props.onChange(event, this.props.name ? this.props.name : null);
  };

  inputBoxStyle = {
    width: this.props.width ? this.props.width : "100%",
    height:
      this.props.rows || this.props.cols
        ? null
        : this.props.height
        ? this.props.height
        : "50px",
    margin: this.props.margin ? this.props.margin : "5px 0",
    padding: this.props.padding ? this.props.padding : "10px",
    color: this.props.color,
    border: this.props.border ? this.props.border : "1px solid #EBEDF4",
    borderRadius: this.props.borderRadius ? this.props.borderRadius : "5px",
    fontSize: this.props.fontSize ? this.props.fontSize : "14px",
    background: "#FFFFFF"
  };

  render() {
    return this.props.rows || this.props.cols ? (
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
