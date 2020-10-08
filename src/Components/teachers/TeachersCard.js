import React, { Component } from "react";

export default class TeachersCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card col-md-3 ">
        <img
          className="card-img-top"
          src={this.props.teacherData.image}
          alt="Card image cap"
        />
        <div className="card-body text-center">
          <h5 className="card-title"> {this.props.teacherData.name} </h5>
          <p className="card-text">{this.props.teacherData.field}</p>
          <ul className="d-flex justify-content-around social-icons mt-3">
            <li>
              <i className={this.props.teacherData.face}></i>
            </li>
            <li>
              <i className={this.props.teacherData.twitter}></i>
            </li>
            <li>
              <i className={this.props.teacherData.insta}></i>
            </li>
            <li>
              <i className={this.props.teacherData.skype}></i>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
