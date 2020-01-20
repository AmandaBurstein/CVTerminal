import React, { Component } from "react";
import Button from "./Button";
import "./Navbar.css";

class Navbar extends Component {
  render = () => {
    return (
      <div className="navbar-wrapper">
        <div className="logo">
          <img src="./HomePageLogo.svg" alt="CV Terminal Logo"></img>
        </div>
        <div className="support-button">
          <Button
            label="Support"
            backgroundColor="#f7f8fa"
            color="#1D293F"
            border="none"
            textAlign="right"
            fontWeight="normal"
            lineHeight="28px"
          />
        </div>
        <div className="start-button">
          <Button label="Start" />
        </div>
      </div>
    );
  };
}

export default Navbar;
