import React, { Component } from "react";
import TeachersCard from "./TeachersCard";
import "./Teachers.css";
import img from "../../assets/teacher/teacher.jpg";
import img2 from "../../assets/teacher/teacher2.jpg";
import img3 from "../../assets/teacher/teacher3.jpg";
import img4 from "../../assets/teacher/teacher4.jpg";

export default class Teachers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: [
        {
          image: img,
          name: "DAVID ZAKARIA",
          field: "Teacher - BBA",
          face: "fab fa-facebook-square",
          twitter: "fab fa-twitter-square",
        //   insta: "fab fa-instagram-square",
          insta: "fab fa-instagram",
          skype: "fab fa-skype",
        },
        {
          image: img2,
          name: "ANDER SMITH",
          field: "Teacher - EEE",
          face: "fab fa-facebook-square",
          twitter: "fab fa-twitter-square",
        //   insta: "fab fa-instagram-square",
          insta: "fab fa-instagram",
          skype: "fab fa-skype",
        },
        {
          image: img3,
          name: "ISMAIL JHON",
          field: "Teacher - MBA",
          face: "fab fa-facebook-square",
          twitter: "fab fa-twitter-square",
        //   insta: "fab fa-instagram-square",
          insta: "fab fa-instagram",
          skype: "fab fa-skype",
        },
        {
          image: img4,
          name: "SAKIB SMITH",
          field: "Teacher - CSE",
          face: "fab fa-facebook-square",
          twitter: "fab fa-twitter-square",
        //   insta: "fab fa-instagram-square",
          insta: "fab fa-instagram",
          skype: "fab fa-skype",
        },
      ],
    };
  }

  render() {
    return (
      <div className="container pt-5">
        <div className="teacher-header">
          <h2>
            OUR <span> TEACHERS </span>
          </h2>
        </div>
        <div className="row jsutify-content-around">
          {this.state.teachers.map((item,i)=>(<TeachersCard key={i} teacherData={item} />))}
        </div>
      </div>
    );
  }
}
