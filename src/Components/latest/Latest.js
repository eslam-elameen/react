import React, { Component } from "react";
import "./Latest.css";
import LatestCards from "./LatestCards";
import img from "../../assets/latest/latest.jpg";
import img2 from "../../assets/latest/latest2.jpg";
import img3 from "../../assets/latest/latest3.jpg";

export default class Latest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latest: [
        {
          image: img,
          like: "far fa-thumbs-up",
          numOfLikes: "265",
          LikeText: "Likes",
          comment: "far fa-comments",
          numOfComments: "72",
          commentsTeat: "comments",
          title: "The World Best University",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
          read: "Read More",
          admin: "Admin |  Nove 13,2015",
        },
        {
          image: img2,
          like: "far fa-thumbs-up",
          numOfLikes: "265",
          LikeText: "Likes",
          comment: "far fa-comments",
          numOfComments: "72",
          commentsTeat: "comments",
          title: "The World Best University",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
          read: "Read More",
          admin: "Admin |  Nove 13,2015",
        },
        {
          image: img3,
          like: "far fa-thumbs-up",
          numOfLikes: "265",
          LikeText: "Likes",
          comment: "far fa-comments",
          numOfComments: "72",
          commentsTeat: "comments",
          title: "The World Best University",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
          read: "Read More",
          admin: "Admin |  Nove 13,2015",
        },
      ],
    };
  }

  render() {
    return (
      <div className="container pt-5">
        <div className="latest-header">
          <h2>
            LATEST <span> NEWS </span>
          </h2>
        </div>
        <div className="row jsutify-content-around">
          {this.state.latest.map((itme, i) => (
            <LatestCards key={i} latestData={itme} />
          ))}
        </div>
      </div>
    );
  }
}
