import React, { Component } from "react";
import "./Video.css";

export default class Video extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="video-bg mt-5 pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="video-controller col-md-6">
              <div className="video">
                {/* Button trigger modal */}
                <a href="" data-toggle="modal" data-target="#exampleModal">
                  <i className="fas fa-play-circle"></i>
                </a>
              </div>
            </div>

            {/* Modal  */}
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/dGcsHMXbSOA"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            <div className=" video-text col-md-6 pt-5 pb-5">
              <h3> Want to Join with Us ? </h3>
              <h2>WATCH LIVE CAMPUS TOUR</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempora nam ex voluptate numquam blanditiis sed vero ipsa
                obcaecati voluptatum inventore, libero itaque molestias facilis
                repudiandae odit magnam possimus labore laudantium.
              </p>
              <a href="#" className="btn mt-4">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
