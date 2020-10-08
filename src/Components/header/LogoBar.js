import React, { Component } from "react";
import logo from "../../assets/logo/logo.png";
export default class LogoBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="container ">
          <div className="row d-flex">
            <div className="logo-section col-md-5">
              <img src={logo} alt="logo" />
            </div>
            {/* <div className="d-flex col-m-7"> */}
              <div className="call-us d-flex col-md-4">
                <div className="call-icon">
                  <i className="fas fa-phone-square-alt"></i>
                </div>
                <div className="call-text">
                  <p className="pb-0">CALL US TIDAY!</p>
                  <a href="tel:+20123456789">+(012) 345 6789</a>
                </div>
              </div>
              <div className="open-time d-flex col-md-3">
                <div className="clock-icon">
                  <i className="far fa-clock"></i>
                </div>
                <div className="clock-text">
                  <p>WE ARE OPEN!</p>
                  <p>Mon-Fri 8:00-16:00</p>
                </div>
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    );
  }
}
