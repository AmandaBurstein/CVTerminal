import React, { Component } from "react";
import InputBox from "../../../CommonComponents/InputBox";
import DoneButton from "../../../CommonComponents/DoneButton";
import ContentContainer from "../../../CommonComponents/ContentContainer";
import ModalContainer from "../../../CommonComponents/ModalContainer";
import CloseButton from "../../../CommonComponents/CloseButton";

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
          placeholder="Name of certification"
          name="certification"
          type="text"
          onChange={(e, n) => this.handleEnteredInput(e, n)}
          autoComplete={true}
          size="100px"
        />
        <InputBox
          placeholder="Certificate number"
          name="certificate-number"
          type="text"
          onChange={(e, n) => this.handleEnteredInput(e, n)}
          autoComplete={true}
          size="100px"
        />
        <InputBox
          placeholder="Level"
          name="level"
          type="text"
          onChange={(e, n) => this.handleEnteredInput(e, n)}
          autoComplete={true}
          size="100px"
        />
        <InputBox
          placeholder="Expiry date"
          name="expiry"
          type="text"
          onChange={(e, n) => this.handleEnteredInput(e, n)}
          autoComplete={true}
          size="100px"
        />
        <DoneButton onClick={this.showModal} />
      </div>
    );

    return (
      <div>
        <ContentContainer
          title="Certifications"
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
