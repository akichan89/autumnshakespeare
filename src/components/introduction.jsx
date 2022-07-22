import React, { Component } from "react";
import pi from "../photos/pi.JPG";
import me from "../photos/learning.JPG";
import image from "../photos/image.JPG";

export default class Introduction extends Component {
  render() {
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
                          <h1 style={{ color: "#FF4800" }}>
                            Hi! <br />
                            I'm Autumn Shakespeare
                          </h1>
                          <p>
                            <a
                              style={{ color: "#8950C9" }}
                              className="btn btn-primary btn-learn"
                              href="https://drive.google.com/file/d/1pUFJUjGAkGUzzypS5Bg3UyKAQ2rL-U9X/view?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Resume
                              <i className="icon-download4" />
                            </a>
                          </p>
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
                  // backgroundSize: "contain",

                  // backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  // backgroundSize: "cover",
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
                          <h1 style={{ color: "#FF4800" }}>
                            I love learning new tech and building
                            <br /> THINGS!!
                          </h1>
                          <p>
                            <a
                              style={{ color: "#8950C9" }}
                              className="btn btn-primary btn-learn"
                              href="https://github.com/akichan89"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Projects <i className="icon-briefcase3" />
                            </a>
                          </p>
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
                  // backgroundSize: "contain",

                  // backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  // backgroundSize: "cover",
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
                          <h1 style={{ color: "#FF4800" }}>
                            I often <br />
                            play with Arduinos and PIs...{" "}
                          </h1>
                          <p>
                            <a
                              style={{ color: "#8950C9" }}
                              className="btn btn-primary btn-learn"
                              href="https://ladyndev.blogspot.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Blog <i className="icon-book" />
                            </a>
                          </p>
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
