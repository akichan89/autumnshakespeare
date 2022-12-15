import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        Let me tell you a little bit about myself: I am a hard
                        worker, determined, and love to live a positive life. I
                        am CompTIA A+ Certified with a Full Stack Web Development Certificate from Bottega University. I am also currently pursuing
      my Bachelor Degree in Computer Science from WGU. What this means for
                        you and your company is: I will be a productive employee
                        that will bring creative, high-quality, production-ready code to every code commit. Therefore, I will contribute to your
                        company in delivering an equally high-quality product for your market, tailored to your needs. 
                      </p>
                      <p>
                        I am also a very fun, upbeat, perky young woman that can
                        add to the already happy environment you have. As if
                        that weren’t enough, I can put a smile on any face!
                        I would be an asset to your company!!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my skills</h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
      <div className="desc">
                    <h3>Embedded Software Development at Lockheed Martin Skunk Works </h3>
                    <p>
                      I currently build embedded software using C++ and Python for proprietary drones, as well as Android Studio App development using Java
      on the Android Tactical Awareness Kit(ATAK) that controls the drone in flight. These tasks have also exposed me to CAN, Mavlink and microcontroller development.
                    </p>
                    <br></br>

                    <a
                      href="https://ladyndev.blogspot.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#d69460" }}
                    >
                      Read More
                    </a>
                  </div>
                  <div className="desc">
                    <h3>Full Stack Web Development at DevPipeline</h3>
                    <p>
                      I have experience building web applications and chrome extentions
                      using JavaScript, React, HTML, and CSS. I work with Python and
                      Flask for backend development and can pair that
                      with PostgreSQL, MongoDB or GraphQL. I can take a project from start to finish: Design-Deployment.
                    </p>
                    <br></br>

                    <a
                      href="https://ladyndev.blogspot.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#d69460" }}
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>IT Professional</h3>
                    <p>
                      I am CompTIA A+ Certified and can do everything from basic
                      hardware support to networking, working with AD, various
                      MDM software, Data Center Help Desk experience, MacOS, Windows and Linux. As a bonus, I
                      can terminate my own ethernet cables!
                    </p>
                    <br></br>

                    <a
                      href="https://ladyndev.blogspot.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#d69460" }}
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>DevOps</h3>
                    <p>
                      I have experience mangaing, hosting and deployemnt through
                      DigitalOcean and establishing a CI/CD pipeline with
                      GitHub Actions. I have understanding and training working
                      with AWS and Google Cloud Platform as well. For fun, I
                      learned Jenkins, Chef and Ansible.
                    </p>
                    <a
                      href="https://ladyndev.blogspot.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#d69460" }}
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              {/* <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                  <span className="icon">
                    <i className="icon-layers2" />
                  </span>
                  <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
