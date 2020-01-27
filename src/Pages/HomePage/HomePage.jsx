import React, { Component } from "react";
import Navbar from "../../CommonComponents/Navbar";
import Header from "./Components/Header/Header";
import Features from "./Components/Feature/Features";
import Content from "./Components/Content/Content";
import Pricing from "./Components/Pricing/Pricing";
import Footer from "./Components/Footer/Footer";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Features />
        <Content />
        <Pricing />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
