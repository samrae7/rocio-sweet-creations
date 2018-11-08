import React, { Component } from "react";

import portfolio1 from "../../images/portfolio/portfolio_1.jpg";
import portfolio2 from "../../images/portfolio/portfolio_2.jpg";
import portfolio3 from "../../images/portfolio/portfolio_3.jpg";
import portfolio4 from "../../images/portfolio/portfolio_4.jpg";
import portfolio5 from "../../images/portfolio/portfolio_5.jpg";
import portfolio6 from "../../images/portfolio/portfolio_6.jpg";
import portfolio7 from "../../images/portfolio/portfolio_7.jpg";
import portfolio8 from "../../images/portfolio/portfolio_8.jpg";
import portfolio9 from "../../images/portfolio/portfolio_9.jpg";

import "./style.css";

export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio" id="portfolio" ref="portfolio">
        <h1 className="text-center">Portfolio</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src={portfolio1} className="img-fluid" />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src={portfolio2} className="img-fluid" />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src={portfolio3} className="img-fluid" />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src={portfolio4} className="img-fluid" />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src={portfolio5} className="img-fluid" />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src={portfolio6} className="img-fluid" />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src={portfolio7} className="img-fluid" />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src={portfolio8} className="img-fluid" />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <img src={portfolio9} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
