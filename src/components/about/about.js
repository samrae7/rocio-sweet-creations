import React, { Component } from "react";

import image from "../../images/profile.jpg";

import "./style.css";

export default class About extends Component {
  render() {
    return (
      <div className="about" id="about" ref="about">
        <h1 className="text-center">About me</h1>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <img src={image} className="img-fluid" />
            <span className="text-justify">Baker and Cake Decorator</span>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 desc">
            <h3>Rocio Pabon Garcia</h3>
            <p>Originally from Spain, I live in London and love baking.</p>
          </div>
        </div>
      </div>
    );
  }
}
