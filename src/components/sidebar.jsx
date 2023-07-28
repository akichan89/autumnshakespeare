import React, { Component } from "react";
import { saveAs } from "file-saver";
import ProfileImage from "../photos/me.jpeg";
import resume from "../2023AutumnShakespeareResume.pdf";

export default class Sidebar extends Component {
  render() {
    const saveFile = () => {
      saveAs(resume, "AutumnShakespeareResume.pdf");
    };
    return (
      <div>
        <div>
          <nav
            href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <i />
          </nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img">
                <img
                  src={ProfileImage}
                  style={{
                    height: "100%",
                    borderRadius: "12px",
                    boxShadow: "6px 6px 2px lightblue",
                  }}
                />
              </div>
              <h1 id="colorlib-logo">
                <a href="index.html" style={{ fontFamily: "Bitter" }}>
                  Autumn Shakespeare
                </a>
              </h1>
              <p>
                <small>Changing The World, One Computer At A Time</small>
              </p>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li>
                    <div>
                      <button
                        className="btn btn-primary btn-learn"
                        onClick={saveFile}
                        style={{
                          borderRadius: "12px",
                          backgroundColor: "#D69460",
                        }}
                      >
                        Download Resume
                        <i
                          className="icon-download4"
                          style={{ paddingLeft: "5px" }}
                        />
                      </button>
                    </div>
                  </li>
                  <li className="active">
                    <a href="#home" data-nav-section="home">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" data-nav-section="about">
                      About Me
                    </a>
                  </li>
                  <li>
                    <a href="#timeline" data-nav-section="timeline">
                      Experience
                    </a>
                  </li>
                  <li>
                    <a href="#projects" data-nav-section="projects">
                      Projects & Skills
                    </a>
                  </li>

                  <li>
                    <a href="#contact" data-nav-section="contact">
                      Contact Me
                    </a>
                  </li>
                  <li>
                    <a href="#blog" data-nav-section="blog">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <a
                style={{ padding: "20px", color: "#D69460" }}
                href="https://www.facebook.com/autumn.elizabeth.547"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-facebook2" />
              </a>

              <a
                style={{ padding: "20px", color: "#D69460" }}
                href="https://Instagram.com/ladyindev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-instagram" />
              </a>

              <a
                style={{ padding: "20px", color: "#D69460" }}
                href="https://www.linkedin.com/in/autumn-shakespeare-979b0750/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-linkedin2" />
              </a>

              <a
                style={{ padding: "20px", color: "#D69460" }}
                href="https://github.com/akichan89"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-github"></i>
              </a>

              <a
                style={{ padding: "20px", color: "#D69460" }}
                href="https://github.com/akichan89"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-blogger2"></i>
              </a>
            </nav>

            <div className="colorlib-footer">
              <span className="email">
                <i className="icon-mail"></i> autumn.e.gehring@gmail.com
              </span>
              <p>
                <small>
                  Made with <i className="icon-heart" aria-hidden="true" /> by
                  Autumn Shakespeare
                  <br></br>
                </small>
              </p>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}
