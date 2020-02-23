import React, { Component } from "react";
import ContentContainer from "../../../CommonComponents/ContentContainer";
import InputBox from "../../../CommonComponents/InputBox";
import Button from "../../../CommonComponents/Button";

const skills = ["HTML", "CSS", "RUBY", "JAVA", "SWIFT", "KOTLIN"];

export class Skills extends Component {
  handleEnteredInput = (event, name) => {
    console.log(event.target.value);
  };

  handleSkillSelect = (event, label) => {
    console.log(event, label);
  };

  render() {
    let contentBody = (
      <div>
        <InputBox
          placeholder="Enter your skills separated by comma"
          type="text"
          onChange={(e, n) => this.handleEnteredInput((e, n))}
          autoComplete={true}
          size="100px"
        />
        <div>
          {skills.map((skill, index) => (
            <Button
              key={index}
              label={skill}
              onClick={(e, l) => this.handleSkillSelect(e, l)}
            />
          ))}
        </div>
      </div>
    );
    return (
      <div>
        <ContentContainer
          title="Skills"
          iconURL="./InstagramLogo.svg"
          body={contentBody}
        />
      </div>
    );
  }
}

export default Skills;
