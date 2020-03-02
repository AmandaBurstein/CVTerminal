import React, { Component } from "react";
import InputBox from "../../../CommonComponents/InputBox";
import DoneButton from "../../../CommonComponents/DoneButton";
import ContentContainer from "../../../CommonComponents/ContentContainer";
import ModalContainer from "../../../CommonComponents/ModalContainer";
import CloseButton from "../../../CommonComponents/CloseButton";
import "./Experience.css";

export default class Experience extends Component {
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
          placeholder="Employer"
          name="employer"
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
          placeholder="Position"
          name="position"
          type="text"
          onChange={(e, n) => this.handleEnteredInput(e, n)}
          autoComplete={true}
          size="100px"
        />
        <div className="dates">
          <div className="start">
            <InputBox
              placeholder="Start date"
              name="start-date"
              type="text"
              onChange={(e, n) => this.handleEnteredInput(e, n)}
              autoComplete={true}
              size="100px"
            />
          </div>
          <div className="end">
            <InputBox
              placeholder="End date"
              name="end-date"
              type="text"
              onChange={(e, n) => this.handleEnteredInput(e, n)}
              autoComplete={true}
              size="100px"
            />
          </div>
        </div>
        <textarea
          className="duties"
          onChange={(e, n) => this.handleEnteredInput(e, n)}
        >
          Duties
        </textarea>
        <DoneButton onClick={this.showModal} />
      </div>
    );

    return (
      <div>
        <ContentContainer
          title="Experience"
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
