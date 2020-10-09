import React, { Component } from "react";
import "./SmallBar.css";

export default class SmallBar extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div>
        <div className="bg">
          <div className="d-flex flex-column flex-md-row menu-container container pt-2">
            <div className="left-menu">
              <ul className="d-flex menu  pl-0">
                <li>
                  <a> FAQ </a>
                </li>
                <li> | </li>
                <li>
                  <a> Help Desk </a>
                </li>
                <li> | </li>
                <li>
                  <a> Login </a>
                </li>
              </ul>
            </div>

            <div className="right-menu">
              <ul className="d-flex right-menu  ">
                <li>
                  <i className="fab fa-facebook-f"></i>
                </li>
                <li>
                  <i className="fab fa-twitter"></i>
                </li>
                <li>
                  <i className="fab fa-google-plus-g"></i>
                </li>
                <li>
                  <i className="fab fa-instagram"></i>
                </li>
                <li>
                  <i className="fab fa-linkedin-in"></i>
                </li>
                <li className="cart ml-md-0 ml-auto">
                  <i className="fas fa-shopping-cart "></i> <span>(12)</span>
                </li>
                <li>
                  <i className="fas fa-search "></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
