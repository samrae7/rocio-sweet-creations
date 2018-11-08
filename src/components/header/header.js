import React, { Component } from "react";

import "./style.css";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="overlay" />
        <div className="container">
          <div className="description ">
            <h1>
              Hi! Welcome to my online cake portfolio
              <p>I like to bake and decorate cakes of all shapes and sizes.</p>
              <button className="btn btn-outline-secondary btn-lg">
                See more
              </button>
            </h1>
          </div>
        </div>
      </header>
    );
  }
}
