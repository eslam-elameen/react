import React, { Component } from "react";
import img from "../../assets/hero/hero1.jpg";
import img2 from "../../assets/hero/hero2.jpeg";
import img3 from "../../assets/hero/hero3.jpg";
import "./Hero.css";
export default class Hero extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          //   data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={img} alt="First slide" />
              <div className="hero-overlay"></div>
              <div className=" carousel-caption ">
                <div className="hero-header">
                  <h1>EDUCATION</h1>
                </div>
                <div className="hero-slogan">
                  <h2>EDUCATION FOR EVERYONE</h2>
                </div>
                <div className="hero-text">
                  <p>
                    We provides always our best services for our clients and
                    always try to achieve our client's trust and satisfaction.
                  </p>
                </div>
                <div className="hero-view-details">
                    <a >View Details</a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={img2} alt="Second slide" />
              <div className="hero-overlay"></div>
              <div className=" carousel-caption ">
                <div className="hero-header">
                  <h1>EDUCATION</h1>
                </div>
                <div className="hero-slogan">
                  <h2>EDUCATION FOR EVERYONE</h2>
                </div>
                <div className="hero-text">
                  <p>
                    We provides always our best services for our clients and
                    always try to achieve our client's trust and satisfaction.
                  </p>
                </div>
                <div className="hero-view-details">
                    <a >View Details</a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={img3} alt="Third slide" />
              <div className="hero-overlay"></div>
              <div className=" carousel-caption ">
                <div className="hero-header">
                  <h1>EDUCATION</h1>
                </div>
                <div className="hero-slogan">
                  <h2>EDUCATION FOR EVERYONE</h2>
                </div>
                <div className="hero-text">
                  <p>
                    We provides always our best services for our clients and
                    always try to achieve our client's trust and satisfaction.
                  </p>
                </div>
                <div className="hero-view-details">
                    <a >View Details</a>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
