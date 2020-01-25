import React, { Component } from "react";
import ContentBulletPoint from "./ContentBulletPoint";

export class Content1 extends Component {
  style = {
    leftSection: {
      padding: "0 calc(10px + 8vw)"
    }
  };

  render() {
    return (
      <div className="Content1Wrapper">
        <div style={this.style.leftSection}>
          <h3>
            Create as many CVs as you want <sup>PRO</sup>
          </h3>
          <p>
            With our pro package you can create and store as many cv versions as
            you want. You will be given a dedicated link which you can share
            with friends, colleagues and employers.
          </p>
          <ContentBulletPoint
            src="../assets/icons/share_icon.svg"
            title="Share your CV"
            width="100%"
            margin="10px"
          />
          <ContentBulletPoint
            src="../assets/icons/chart_icon.svg"
            title="Increase chance to engage"
            width="100%"
            margin="10px"
          />
          <ContentBulletPoint
            src="../assets/icons/storage_icon.svg"
            title="Unlimited storage"
            width="100%"
            margin="10px"
          />
        </div>
        <div>
          <img
            width="100%"
            src="../assets/images/content1_image.png"
            alt="Content1"
          ></img>
        </div>
      </div>
    );
  }
}

export default Content1;
