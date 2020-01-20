import React, { Component } from "react";
import Navbar from "../../CommonComponents/Navbar";
import Header from "./Components/Header/Header";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
      </div>
    );
  }
}

export default HomePage;
