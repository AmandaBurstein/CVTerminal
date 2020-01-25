import React, { Component } from "react";
import "./Features.css";
import FeatureCard from "./FeatureCard";
import { RandomNumberGenerator } from "../../../../Functions/RandomNumberGenerator";
import Line from "../../../../CommonComponents/Line";

const _features = [
  {
    title: "Simple to use",
    description:
      "We’ve helped over 2,500 job seekers to get into the most popular tech teams.",
    iconURL: "../assets/icons/node.svg"
  },
  {
    title: "Support",
    description:
      "We’ve helped over 2,500 job seekers to get into the most popular tech teams.",
    iconURL: "../assets/icons/chat.svg"
  },
  {
    title: "Various download formats",
    description:
      "We’ve helped over 2,500 job seekers to get into the most popular tech teams.",
    iconURL: "../assets/icons/copy.svg"
  },
  {
    title: "Storage and web links",
    description:
      "We’ve helped over 2,500 job seekers to get into the most popular tech teams.",
    iconURL: "../assets/icons/cloud_refresh.svg"
  },
  {
    title: "Free",
    description:
      "We’ve helped over 2,500 job seekers to get into the most popular tech teams.",
    iconURL: "../assets/icons/node.svg"
  },
  {
    title: "Images and Icons",
    description:
      "We’ve helped over 2,500 job seekers to get into the most popular tech teams.",
    iconURL: "../assets/icons/node.svg"
  }
];

export class Features extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="FeaturesWrapper">
          <h2> A solution made for you</h2>
          <h5>
            A simple and straightforward approach for creating a modern CV
          </h5>
          <div className="FeatureCardRow">
            {_features.map(feature => {
              return (
                <FeatureCard
                  key={RandomNumberGenerator(6)}
                  title={feature.title}
                  description={feature.description}
                  src={feature.iconURL}
                  margin="calc(5px + 1vw)"
                  padding="calc(5px + 1vw)"
                  width="calc(200px + 10vw)"
                />
              );
            })}
          </div>
        </div>
        <Line />
      </React.Fragment>
    );
  }
}

export default Features;
