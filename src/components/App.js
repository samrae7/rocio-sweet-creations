import React, { Component } from "react";

import NavBar from "./navigation/nav-bar.js";
import Header from "./header/header.js";
import About from "./about/about.js";
import Portfolio from "./portfolio/portfolio.js";
import ContactForm from "./contact/contact-form.js";

import "./style.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <About />
        <Portfolio />
        <ContactForm />
      </div>
    );
  }
}

export default App;
