import React, { Component } from "react";
import "./HeroCards.css";
import Card from "./card";
import img from "../../assets/hero-card/card1.jpg";
import img2 from "../../assets/hero-card/card2.jpg";
import img3 from "../../assets/hero-card/card3.jpg";

export default class HeroCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          image: img,
          title: "Experience Yourself",
          content:
            "Some quick example text to build on the card title and makeup the bulk of the card 's content",read: "Read More",
        },
        {
          image: img2,
          title: "Graduation Degree ",
          content:
            "Some quick example text to build on the card title and makeup the bulk of the card 's content",read: "Read More",
        },
        {
          image: img3,
          title: "Online Learning",
          content:
            "Some quick example text to build on the card title and makeup the bulk of the card 's content",
          read: "Read More",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="hero-cards-container">
          <div className="container">
            <div className="row justify-content-around">
              {this.state.cards.map((item, i) => (
                <Card key={i} cardData={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
