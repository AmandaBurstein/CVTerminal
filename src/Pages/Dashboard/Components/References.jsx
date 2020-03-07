import React, { Component } from "react";
import ContentContainer from "../../../CommonComponents/ContentContainer";
import InputBox from "../../../CommonComponents/InputBox";

export class References extends Component {
  style = {
    row: {
      display: "flex",
      justifyContent: "space-between"
    }
  };
  handleEnteredInput = (event, name) => {
    console.log(event.target.value);
  };

  render() {
    let contentBody = (
      <div>
        <InputBox
          placeholder="Name of Referee"
          name="referee"
          type="text"
          onChange={(e, n) => this.handleEnteredInput(e, n)}
          autoComplete={true}
          size="100px"
        />
        <div style={this.style.row}>
          <InputBox
            placeholder="Phone Number"
            name="phoneNumber"
            type="text"
            onChange={(e, n) => this.handleEnteredInput(e, n)}
            autoComplete={true}
            size="100px"
            width="40%"
          />
          <InputBox
            placeholder="Email"
            name="email"
            type="text"
            onChange={(e, n) => this.handleEnteredInput(e, n)}
            autoComplete={true}
            size="100px"
            width="58%"
          />
        </div>
        <InputBox
          placeholder="Job title"
          name="jobTitle"
          type="text"
          onChange={(e, n) => this.handleEnteredInput(e, n)}
          autoComplete={true}
          size="100px"
        />
        <InputBox
          placeholder="Relationship"
          name="relationship"
          type="text"
          onChange={(e, n) => this.handleEnteredInput(e, n)}
          autoComplete={true}
          size="100px"
        />

        <InputBox
          placeholder="Address"
          name="address"
          type="text"
          onChange={(e, n) => this.handleEnteredInput(e, n)}
          autoComplete={true}
          rows="5"
        />
      </div>
    );

    return (
      <div>
        <ContentContainer
          title="References"
          iconURL="./InstagramLogo.svg"
          body={contentBody}
        />
      </div>
    );
  }
}

export default References;
