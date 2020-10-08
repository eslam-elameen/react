import React, { Component } from "react";
import "./Why.css";
import WhyCard from "./WhyCards";
import img from "../../assets/why/why1.png";
import img2 from "../../assets/why/why2.png";
import img3 from "../../assets/why/why3.jpg";
import img4 from "../../assets/why/why4.png";
import img5 from "../../assets/why/why5.png";
import img6 from "../../assets/why/why6.png";

export default class Why extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      WhyCards: [
        {
          image: img,
          title: "Qualified Teachers",
          content:
            "Some quick example text to build on the card title and makeup the bulk of the card 's content",
        },
        {
          image: img2,
          title: "Online Courses",
          content:
            "Some quick example text to build on the card title and makeup the bulk of the card 's content",
        },
        {
          image: img3,
          title: "Graduation Degree ",
          content:
            "Some quick example text to build on the card title and makeup the bulk of the card 's content",
        },
        {
          image: img4,
          title: "Mastery Learning",
          content:
            "Some quick example text to build on the card title and makeup the bulk of the card 's content",
        },
        {
          image: img5,
          title: "Library System",
          content:
            "Some quick example text to build on the card title and makeup the bulk of the card 's content",
        },
        {
          image: img6,
          title: "Abundant Labs ",
          content:
            "Some quick example text to build on the card title and makeup the bulk of the card 's content",
        },
      ],
    };
  }

  render() {
    return (
      <div className="why-us mt-5">
        <div className="container">
          <div className="row">
            <div className="text-center why-text pt-5">
              <h2> WHY CHOOSE OUR UNIVERSITY </h2>{" "}
              <div className="why-prargraph">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.Numquam modi consequuntur maxime voluptates earum illo
                  sunt, veritatis maiores doloribus ut id.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="row ">
              {" "}
              {this.state.WhyCards.map((item, i) => (
                <WhyCard key={i} WhyCards={item} />
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}
