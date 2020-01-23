import React from "react";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import Features from "./Pages/HomePage/Components/Feature/Features";
import Pricing from "./Pages/HomePage/Components/Pricing/Pricing.jsx";

function App() {
  return (
    <React.Fragment>
      <HomePage />
      <Features />
      <Pricing />
    </React.Fragment>
  );
}

export default App;
