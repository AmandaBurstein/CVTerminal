import React, { Component } from "react";

export class Line extends Component {
  _width = this.props.width ? this.props.width : "100%";
  _height = this.props.height ? this.props.height : "1px";

  style = {
    backgroundColor: this.props.color ? this.props.color : "#ECEFF4",
    width: this.props.vertical ? this._height : this._width,
    height: this.props.vertical ? this._width : this._height
  };

  render() {
    return <div style={this.style}></div>;
  }
}

export default Line;
