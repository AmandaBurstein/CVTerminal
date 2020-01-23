import React, { Component } from "react";
import "./Pricing.css";
import Button from "../../../../CommonComponents/Button";

export default class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthly: true,
      yearly: false
    };
  }

  togglePaymentMonthly = () => {
    this.setState({ monthly: true, yearly: false });
  };

  togglePaymentYearly = () => {
    this.setState({ monthly: false, yearly: true });
  };

  render() {
    return (
      <div className="pricing-wrapper">
        <div className="pricing-header">Simple & affordable pricing</div>
        <div className="price-toggle-background">
          <div className="text-container">
            <button
              className={this.state.monthly ? "toggle-on" : "toggle-off"}
              onClick={this.togglePaymentMonthly}
            >
              Monthly
            </button>
            <button
              className={this.state.yearly ? "toggle-on" : "toggle-off"}
              onClick={this.togglePaymentYearly}
            >
              Annual
            </button>
          </div>
        </div>
        <div className="pricing-table-wrapper">
          <div className="price-table-one">
            <div className="price-table-header one">
              <div className="cost one">$1</div>
              <div className="per one"> / one time</div>
            </div>
            <div className="details">
              <div className="pricing-table-header white">What's included?</div>
              <ul>
                <li className="check-white">1 CV</li>
                <li className="check-white">No storage</li>
              </ul>
            </div>
            <div className="get-started">
              <Button
                label="Get started"
                borderRadius="25px"
                fontSize="14px"
                width="150px"
              />
              <button className="start-trial white">or start free trial</button>
            </div>
          </div>
          <div className="price-table-two">
            <div>
              {this.state.monthly ? (
                <div className="price-table-header two">
                  <div className="cost two">$1</div>
                  <div className="per two"> / month</div>
                </div>
              ) : (
                <div className="price-table-header two">
                  <div className="cost two">$9</div>
                  <div className="per two"> / year</div>
                </div>
              )}
            </div>
            <div className="details">
              <div className="pricing-table-header">What's included?</div>
              <ul>
                <li>5 CVs</li>
                <li>Online storage</li>
                <li>Design files included</li>
              </ul>
            </div>
            <div className="get-started">
              <Button
                label="Get started"
                borderRadius="25px"
                fontSize="14px"
                width="150px"
              />
              <button className="start-trial">or start free trial</button>
            </div>
          </div>
          <div className="price-table-three">
            <div>
              {this.state.monthly ? (
                <div className="price-table-header three">
                  <div className="cost three">$5</div>
                  <div className="per three"> / month</div>
                </div>
              ) : (
                <div className="price-table-header three">
                  <div className="cost three">$49</div>
                  <div className="per three"> / year</div>
                </div>
              )}
            </div>
            <div className="details">
              <div className="pricing-table-header">What's included?</div>
              <ul>
                <li>Unlimited CVs</li>
                <li>Unlimited storage</li>
                <li>Web link</li>
              </ul>
            </div>
            <div className="get-started">
              <Button
                label="Get started"
                borderRadius="25px"
                fontSize="14px"
                width="150px"
              />
              <button className="start-trial">or start free trial</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
