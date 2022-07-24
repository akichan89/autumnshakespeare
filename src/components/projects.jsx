import React, { Component } from "react";
import Contact from "../components/contact";
import geo from "../photos/geo.JPG";
import luckys from "../photos/luckys.png";
import portfolio from "../photos/portfolio.png";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">My Work</span>
                <h2
                  className="colorlib-heading animate-box"
                  style={{ fontFamily: "Bitter" }}
                >
                  Recent Projects
                </h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div
                  className="project"
                  style={{ backgroundImage: `url(${geo})` }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="https://geotagger.io/">Geotagger.io</a>
                      </h3>
                      <span>Web Application</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div
                  className="project"
                  style={{ backgroundImage: `url(${luckys})` }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="https://www.luckysgrooming.com/">
                          Lucky's Dog Groomming
                        </a>
                      </h3>
                      <span>WordPress Project</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInTop"
              >
                <div
                  className="project"
                  style={{ backgroundImage: `url(${portfolio})` }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="autumnshakespeare.com">Famlinc</a>
                      </h3>
                      <span>Web Application</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-work" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">
                  I have a very particular set of skills...
                </span>
                <h2
                  className="colorlib-heading animate-box"
                  style={{ fontFamily: "Bitter" }}
                >
                  My Skills
                </h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
