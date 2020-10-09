import React, { Component } from "react";
import logo from "../../assets/logo/logofooter.png";
import "./Footer.css";
export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="mt-5 pt-5">
        <div className="footer-overlay"></div>
        <div className="footer-over-view container">
          <div className="row">
            <div className="adress col-md-3">
              <img src={logo} alt="" />

              <p className="pt-3">203, Envato Labs, Behind Alis Steet, Melbourne, Australia.</p>
              <ul className="pt-3">
                <li>
                  <i className="fas fa-phone-alt"></i>
                  <a href="tel:123-456-789">123-456-789</a>
                </li>
                <li>
                  <i className="far fa-envelope"></i>
                  <a href="mailto:contact@yourdomain.com">
                    contact@yourdomain.com
                  </a>
                </li>
                <li>
                  <i className="fas fa-globe-europe"></i>
                  <a href="www.yourdomain.com">www.yourdomain.com</a>
                </li>
              </ul>
            </div>
            <div className="useful-links col-md-3">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <p>
                    <a href="about">About Us</a>

                  </p>
                </li>
                <li>
                  <a href="our-course">Our Curse </a>
                </li>
                <li>
                  <a href="pricing">Pricing Table</a>
                </li>
                <li>
                  <a href="gallery">Gallery</a>
                </li>
                <li>
                  <a href="shop">Shop</a>
                </li>
              </ul>
            </div>
            <div className="twitter-feed col-md-3">
              <h4>Twitter Feed</h4>
              <ul>
                <li>
                  <i className="fab fa-twitter"></i>
                  <a href="">#marketing</a>
                  <a href="">#marketingtips</a>
                  <br />
                  <a href="">#socialmedia</a>
                  <a href="">#socialmediamarketing</a>
                  <br />
                  <a href="">#video</a>
                  <a href="">#contentmarketing</a>
                  <p>Oct. 7, 2020</p>
                </li>
                <li>
                  <i className="fab fa-twitter"></i>
                  <span>
                    Stay on top of the game with our Marketing Trend predictions
                    for 2021! 🔮 Ready for our guide on what to expect in t…{" "}
                    <a href="https://twitter.com/">https://twitter.com/</a>
                  </span>
                  <p>Oct. 7, 2020</p>
                </li>
              </ul>
            </div>
            <div className="opening-hours col-md-3">

              <h4>Opening Hours</h4>
              <ul>
                <li>
                  <span>Mon - Tues: </span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <span className="open-time"> 6.00 am - 10.00 pm</span>
                </li>
                <li>
                  <span>Wednes - Thurs: </span> &nbsp; &nbsp;{" "}
                  <span className="open-time"> 8.00 am - 6.00 pm </span>
                </li>
                <li>
                  <span>Fri : </span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                  <span className="open-time">3.00 pm - 8.00 pm</span>
                </li>
                <li>
                  <span>Sun : </span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                  <span className="open-time">Closed</span>
                </li>
              </ul>
            </div>

          </div>
          <hr />
          <div className="row justify-content-between">
              <div className="call-us">
                <h5>Call Us Now</h5>
                <ul>
                  <li><a href="tel:+61 3 1234 5678">+61 3 1234 5678</a></li>
                  <li><a href="tel:+12 3 1234 5678">+12 3 1234 5678</a></li>
                </ul>
              </div>
              <div className="contact-us">
              <h5>Contact With Us </h5>
                <ul className="d-flex justify-content-between">
                  <li><a href=""><i className="fab fa-facebook-square"></i></a></li>
                  <li><a href=""><i className="fab fa-twitter"></i></a></li>
                  <li><a href=""><i className="fab fa-skype"></i></a></li>
                  <li><a href=""><i className="fab fa-youtube"></i></a></li>
                  <li><a href=""><i className="fab fa-instagram-square"></i></a></li>
                  <li><a href=""><i className="fab fa-pinterest-square"></i></a></li>
                </ul>
              </div>
              <div className="subscribe d-flex">
                <input type="email" className="form-control " placeholder="Your Email" />
                <span className="input-group-btn">
                  <button className="btn subscribe-btn ">SUBSCRIBE</button>
                </span>
              </div>
            </div>
          </div>
      </footer>
    );
  }
}
