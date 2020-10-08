import React, { Component } from "react";
import "./HeroCards.css";
import img from "../../assets/hero-card/card1.jpg";
import img2 from "../../assets/hero-card/card2.jpg";
import img3 from "../../assets/hero-card/card3.jpg";
import { Router } from "react-router-dom";

export default class HeroCards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
         <div className="card col-md-4 ">
          <img
            className="card-img-top"
            src={this.props.cardData.image}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title"> {this.props.cardData.title} </h5>
            <p className="card-text">{this.props.cardData.content}</p>
            <a href="#" className="btn read-more">
              {this.props.cardData.read}
            </a>
          </div>
        </div>
     );
  }
}
