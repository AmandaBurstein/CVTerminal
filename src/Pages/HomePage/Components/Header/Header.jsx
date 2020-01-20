import React, { Component } from "react";
import Button from "../../../../CommonComponents/Button";
import "./Header.css";

class Header extends Component {
  render = () => {
    return (
      <div className="homepage-header-wrapper">
        <div className="content-wrapper">
          <div className="header-text-large">
            Quickly generate your CV in minutes
          </div>
          <div className="header-text-small">
            We've helped over 25,000 people generate a modern, job-ready CV
          </div>
          <div className="homepage-button">
            <Button label="Start" />
          </div>
        </div>
        <img src="./Demo.svg" className="header-demo-image" alt="Demo"></img>
      </div>
    );
  };
}

export default Header;
