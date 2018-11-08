import React, { Component } from "react";
import { findDOMNode } from "react-dom";

import "./style.css";

export default class NavBar extends Component {
  handleNavClick = () => {
    const domNode = findDOMNode(this.refs.about);
    domNode.scrollIntoView();
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top">
        <a className="navbar-brand" href="#">
          Rocio's Sweet Creations
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav mr-4">
            <li className="nav-item">
              <a
                className="nav-link"
                data-value="about"
                href="#"
                onClick={this.handleNavClick}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                data-value="portfolio"
                href="#"
                onClick={this.handleNavClick}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                data-value="contact"
                href="#"
                onClick={this.handleNavClick}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
