import React, { Component } from "react";
import "./Footer.css";
import Button from "./../../../../CommonComponents/Button";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="top">
          <div className="column1">
            <div className="logo">
              <img src="./FooterLogo.svg" alt="CV Terminal Logo"></img>
            </div>
            <div className="copy1">
              Your ultimate CV solution to clinch <br></br> the job
            </div>
            <Button label="Ask a Question" width="190px" />
          </div>
          <div className="column2">
            <div className="header">About Us</div>
            <div className="link">Meet the Team</div>
            <div className="link">Our Story</div>
            <div className="link">Careers</div>
          </div>
          <div className="column3">
            <div className="header">Contact</div>
            <div className="copy2">
              Feel free to get in touch with us <br></br>via phone or send us a
              message.
            </div>
            <div className="contact">+1-301-340-3946</div>
            <div className="contact">info@cvterminal.com</div>
          </div>
        </div>
        <div className="bottom">
          <div className="copyright-social">
            © cvterminal 2019, All Rights Reserved
          </div>
          <img
            src="./Social.svg"
            alt="Social media logos"
            className="social-media"
          ></img>
        </div>
        <div>
          <img
            src="./DecoOval.svg"
            alt="Decorative oval"
            className="deco-oval"
          ></img>
          <img
            src="./DecoSquare.svg"
            alt="Decorative square"
            className="deco-square"
          ></img>
        </div>
      </div>
    );
  }
}
