import React, { Component } from "react";
import ContentContainer from "../../../CommonComponents/ContentContainer";
import InputBox from "../../../CommonComponents/InputBox";

export class Courses extends Component {
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
          placeholder="Course Provider"
          name="course"
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
          placeholder="Name of Course"
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
          width="48%"
        />
        <InputBox
          placeholder="End Date - (MM-YYYY)"
          name="endDate"
          type="text"
          onChange={(e, n) => this.handleEnteredInput(e, n)}
          autoComplete={true}
          size="100px"
          width="48%"
        />
        <InputBox
          placeholder="Description"
          name="description"
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
          title="Courses"
          iconURL="./InstagramLogo.svg"
          body={contentBody}
        />
      </div>
    );
  }
}

export default Courses;
