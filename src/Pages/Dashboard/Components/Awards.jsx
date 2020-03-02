import React, { Component } from "react";
import InputBox from "../../../CommonComponents/InputBox";
import DoneButton from "../../../CommonComponents/DoneButton";
import ContentContainer from "../../../CommonComponents/ContentContainer";
import ModalContainer from "../../../CommonComponents/ModalContainer";
import CloseButton from "../../../CommonComponents/CloseButton";
import "./Awards.css";

export default class Certifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleEnteredInput = (event, name) => {
    console.log(event.target.value);
  };
  showModal = () => {
    console.log("show modal");
    this.setState({ showModal: true });
  };

  closeModal = () => {
    console.log("close modal");
    this.setState({ showModal: false });
  };

  render() {
    let contentBody = (
      <div>
        <InputBox
          placeholder="Award provider"
          name="provider"
          type="text"
          onChange={(e, n) => this.handleEnteredInput(e, n)}
          autoComplete={true}
          size="100px"
        />
        <div className="location">
          <div className="city">
            <InputBox
              placeholder="City"
              name="city"
              type="text"
              onChange={(e, n) => this.handleEnteredInput(e, n)}
              autoComplete={true}
              size="100px"
            />
          </div>
          <div className="country">
            <InputBox
              placeholder="Country"
              name="country"
              type="text"
              onChange={(e, n) => this.handleEnteredInput(e, n)}
              autoComplete={true}
              size="100px"
            />
          </div>
        </div>
        <InputBox
          placeholder="Name of award"
          name="award-name"
          type="text"
          onChange={(e, n) => this.handleEnteredInput(e, n)}
          autoComplete={true}
          size="100px"
        />
        <InputBox
          placeholder="Date"
          name="date"
          type="text"
          onChange={(e, n) => this.handleEnteredInput(e, n)}
          autoComplete={true}
          size="100px"
        />
        <textarea
          className="description"
          onChange={(e, n) => this.handleEnteredInput(e, n)}
        >
          Description
        </textarea>
        <DoneButton onClick={this.showModal} />
      </div>
    );

    return (
      <div>
        <ContentContainer
          title="Awards"
          iconURL="./InstagramLogo.svg"
          body={contentBody}
        />
        {this.state.showModal ? (
          <div>
            <ModalContainer />
            <CloseButton onClick={this.closeModal} />
          </div>
        ) : null}
      </div>
    );
  }
}
