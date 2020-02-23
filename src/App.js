import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import Dashboard from "./Pages/Dashboard/Components/Skills/Skills";

class App extends Component {
  render = () => {
    return (
      <BrowserRouter>
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path="/dashboard" component={Dashboard} />
      </BrowserRouter>
    );
  };
}

export default App;
