import React, { Component } from "react";
import "./About.css";
export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about-us mt-5">
        <div className="container">
          <div className="row">
            <div className="text-center about-text">
              <h2> About Our University </h2> 
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam
                modi consequuntur maxime voluptates earum illo sunt, veritatis
                maiores doloribus ut id, nostrum.Temporibus odit quas illum eos
                dolores itaque facilis omnis beatae saepe eum.Odit labore vel
                temporibus quasi. 
              </p> 
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam
                modi consequuntur maxime voluptates earum illo sunt, veritatis
                maiores doloribus ut id, nostrum.Temporibus odit quas illum eos
                dolores itaque facilis omnis beatae saepe eum.Odit labore vel
                temporibus. 
              </p>
              <a href="#" className="btn detail">
                 
                UNIVERSITY dETAILS 
              </a> 
              <a href="#" className="btn register">
                REGISTER NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
