import React, { Component } from "react";
import ContentContainer from "../../../CommonComponents/ContentContainer";
import InputBox from "../../../CommonComponents/InputBox";

export class Projects extends Component {
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
          placeholder="Name of Project"
          name="project"
          type="text"
          onChange={(e, n) => this.handleEnteredInput(e, n)}
          autoComplete={true}
          size="100px"
        />
        <div style={this.style.row}>
          <InputBox
            placeholder="Start Date - (MM-YYYY)"
            name="startDate"
            type="text"
            onChange={(e, n) => this.handleEnteredInput(e, n)}
            autoComplete={true}
            size="100px"
            width="49%"
          />
          <InputBox
            placeholder="Finish Date - (MM-YYYY)"
            name="finishDate"
            type="text"
            onChange={(e, n) => this.handleEnteredInput(e, n)}
            autoComplete={true}
            size="100px"
            width="49%"
          />
        </div>
        <InputBox
          placeholder="Link"
          name="link"
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
          rows="5"
        />
      </div>
    );

    return (
      <div>
        <ContentContainer
          title="Projects"
          iconURL="./InstagramLogo.svg"
          body={contentBody}
        />
      </div>
    );
  }
}

export default Projects;
