import React, { Component } from "react";
import InputBox from "../../../CommonComponents/InputBox";
import Button from "../../../CommonComponents/Button";
import DoneButton from "../../../CommonComponents/DoneButton";
import ContentContainer from "../../../CommonComponents/ContentContainer";
import ModalContainer from "../../../CommonComponents/ModalContainer";
import CloseButton from "../../../CommonComponents/CloseButton";

export default class Languages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleEnteredInput = (event, name) => {
    console.log(event.target.value);
  };

  addLanguage = value => {
    console.log(value);
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
          placeholder="Enter languages separated by comma"
          name="languages"
          type="text"
          onChange={(e, n) => this.handleEnteredInput(e, n)}
          autoComplete={true}
          size="100px"
        />
        <Button label="English" onClick={() => this.addLanguage("English")} />
        <Button label="French" onClick={() => this.addLanguage("French")} />
        <Button label="Spanish" onClick={() => this.addLanguage("Spanish")} />
        <Button label="Italian" onClick={() => this.addLanguage("Italian")} />
        <Button label="Mandarin" onClick={() => this.addLanguage("Mandarin")} />
        <Button label="Russian" onClick={() => this.addLanguage("Russian")} />
        <DoneButton onClick={this.showModal} />
      </div>
    );

    return (
      <div>
        <ContentContainer
          title="Languages"
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
