import React, { Component } from "react";
import ContentContainer from "../../../CommonComponents/ContentContainer";
import InputBox from "../../../CommonComponents/InputBox";

export class Publication extends Component {
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
          placeholder="Publication Title"
          name="publication"
          type="text"
          onChange={(e, n) => this.handleEnteredInput(e, n)}
          autoComplete={true}
          size="100px"
        />
        <InputBox
          placeholder="Name of publisher"
          name="publisher"
          type="text"
          onChange={(e, n) => this.handleEnteredInput(e, n)}
          autoComplete={true}
          size="100px"
        />

        <InputBox
          placeholder="Publish Date - (DD-MM-YYYY)"
          name="publishDate"
          type="text"
          onChange={(e, n) => this.handleEnteredInput(e, n)}
          autoComplete={true}
          size="100px"
          width="80%"
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
          title="Publication"
          iconURL="./InstagramLogo.svg"
          body={contentBody}
        />
      </div>
    );
  }
}

export default Publication;
