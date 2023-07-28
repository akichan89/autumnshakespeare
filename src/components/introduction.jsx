import React, { Component } from "react";
import pi from "../photos/pi.JPG";
import me from "../photos/learning.png";
import image from "../photos/image.png";
import { saveAs } from "file-saver";
import resume from "../2023AutumnShakespeareResume.pdf";

export default class Introduction extends Component {
  render() {
    const saveFile = () => {
      saveAs(resume, "AutumnShakespeareResume.pdf");
    };
    return (
      <div>
        <section
          id="colorlib-hero"
          className="js-fullheight"
          data-section="home"
        >
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: 700,
                  width: "100vw",
                  opacity: 0.2,
                }}
              >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <div
                            className="services color-5"
                            style={{
                              backgroundColor: "#f5f5f5",
                              borderRadius: "9px",
                            }}
                          >
                            <h1
                              style={{
                                color: "#D69460",
                                fontSize: "48px",
                                fontFamily: "Raleway",
                              }}
                            >
                              Hello!
                              <br />
                              I'm Autumn Shakespeare
                            </h1>
                            <div>
                              <button
                                className="btn btn-primary btn-learn"
                                onClick={saveFile}
                                style={{ borderRadius: "12px" }}
                              >
                                Download Resume
                                <i
                                  className="icon-download4"
                                  style={{ paddingLeft: "5px" }}
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                style={{
                  backgroundImage: `url(${me})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: 700,
                  width: "100vw",
                  opacity: 0.2,
                }}
              >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <div
                            className="services color-2"
                            style={{
                              backgroundColor: "#f5f5f5",
                              borderRadius: "9px",
                            }}
                          >
                            <h1
                              style={{
                                color: "#D69460",
                                fontSize: "48px",
                                fontFamily: "Raleway",
                              }}
                            >
                              I love learning new tech and building cool
                              <br /> THINGS!!
                            </h1>
                            <div>
                              <button
                                className="btn btn-primary btn-learn"
                                onClick={saveFile}
                                style={{ borderRadius: "12px" }}
                              >
                                Download Resume
                                <i
                                  className="icon-download4"
                                  style={{ paddingLeft: "5px" }}
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                style={{
                  backgroundImage: `url(${pi})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: 700,
                  width: "100vw",
                  opacity: 0.2,
                }}
              >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <div
                            className="services color-3"
                            style={{
                              backgroundColor: "#f5f5f5",
                              borderRadius: "9px",
                            }}
                          >
                            <h1
                              style={{
                                color: "#D69460",
                                fontSize: "48px",
                                fontFamily: "Raleway",
                              }}
                            >
                              I often <br />
                              play with Arduino's and Raspberry Pi's...{" "}
                            </h1>
                            <div>
                              <button
                                className="btn btn-primary btn-learn"
                                onClick={saveFile}
                                style={{ borderRadius: "12px" }}
                              >
                                Download Resume
                                <i
                                  className="icon-download4"
                                  style={{ paddingLeft: "5px" }}
                                />
                              </button>
                            </div>
                          </div>
                          {/* <p>
                            <a
                              style={{ color: "#8950C9" }}
                              className="btn btn-primary btn-learn"
                              href="https://ladyndev.blogspot.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Blog <i className="icon-book" />
                            </a>
                          </p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
