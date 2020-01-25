import React, { Component } from "react";
import Content1 from "./Content1";
import Content2 from "./Content2";
import "./Content.css";

export class Content extends Component {
  render() {
    return (
      <div className="ContentWrapper">
        <Content1 />
        <Content2 />
      </div>
    );
  }
}

export default Content;
