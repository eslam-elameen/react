import React, { Component } from "react";

export default class LatestCards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card col-md-4 mt-3">
        <img
          className="card-img-top"
          src={this.props.latestData.image}
          alt="Card image cap"
        />
        <div className="social-container text-center">
          <div className="social">
            <ul>
              <li>
                <i className={this.props.latestData.like}></i>
              </li>
              <li>
                <p>{this.props.latestData.numOfLikes}</p>
              </li>
              <li>
                <p>{this.props.latestData.LikeText}</p>
              </li>
            </ul>
            <ul>
              <li>
                <i className={this.props.latestData.comment}></i>
              </li>
              <li>
                <p>{this.props.latestData.numOfComments}</p>
              </li>
              <li>
                <p>{this.props.latestData.commentsTeat}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title"> {this.props.latestData.title} </h5>
          <p className="card-text">{this.props.latestData.content}</p>
          <p className="card-text">{this.props.latestData.body}</p>
          <a href="#" className="btn read-more">
            {this.props.latestData.read}
          </a>
          <span> {this.props.latestData.admin}</span>
        </div>
      </div>
    );
  }
}
