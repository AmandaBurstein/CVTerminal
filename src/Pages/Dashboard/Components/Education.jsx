import React, { Component } from "react";
import ContentContainer from "../../../CommonComponents/ContentContainer";
import InputBox from "../../../CommonComponents/InputBox";

export class Education extends Component {
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
          placeholder="Name of Institution"
          name="institution"
          type="text"
          onChange={(e, n) => this.handleEnteredInput(e, n)}
          autoComplete={true}
          size="100px"
        />
        <div style={this.style.row}>
          <InputBox
            placeholder="City"
            name="city"
            type="text"
            onChange={(e, n) => this.handleEnteredInput(e, n)}
            autoComplete={true}
            size="100px"
            width="40%"
          />
          <InputBox
            placeholder="Country"
            name="country"
            type="text"
            onChange={(e, n) => this.handleEnteredInput(e, n)}
            autoComplete={true}
            size="100px"
            width="58%"
          />
        </div>
        <InputBox
          placeholder="Honours Earned"
          name="honours"
          type="text"
          onChange={(e, n) => this.handleEnteredInput(e, n)}
          autoComplete={true}
          size="100px"
        />
        <InputBox
          placeholder="Start Date - (MM-YYYY)"
          name="startDate"
          type="text"
          onChange={(e, n) => this.handleEnteredInput(e, n)}
          autoComplete={true}
          size="100px"
        />
        <InputBox
          placeholder="End Date - (MM-YYYY)"
          name="endDate"
          type="text"
          onChange={(e, n) => this.handleEnteredInput(e, n)}
          autoComplete={true}
          size="100px"
        />
        <InputBox
          placeholder="Description"
          name="description"
          type="text"
          onChange={(e, n) => this.handleEnteredInput(e, n)}
          autoComplete={true}
          size="100px"
        />
      </div>
    );

    return (
      <div>
        <ContentContainer
          title="Education"
          iconURL="./InstagramLogo.svg"
          body={contentBody}
        />
      </div>
    );
  }
}

export default Education;
