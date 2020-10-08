import React, { Component } from "react";

export default class WhyCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
   
        <div className="card col-md-4 ">
          <img
            className="card-img-top"
            src={this.props.WhyCards.image}
            alt="Card image cap"
          />
          <div className="card-body text-center">
            <h5 className="card-title"> {this.props.WhyCards.title} </h5>
            <p className="card-text">{this.props.WhyCards.content}</p>
             
          </div>
        </div>
  
    );
  }
}
