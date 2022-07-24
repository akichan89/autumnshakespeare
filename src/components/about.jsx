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
                        am Griffin Hill trained as well as CompTIA A+ certified
                        which has made me very successful at making long time
                        customers and money for companies. What this means for
                        you and your company is: I will be a productive employee
                        that will bring in revenue while making the customers
                        feel comfortable and like I care about their needs, all
                        while exceeding their expectations. Therefore, your
                        company will have lifelong customers that will recommend
                        you to their friends and family.
                      </p>
                      <p>
                        I am also a very fun, upbeat, perky young woman that can
                        add to the already happy environment you have. As if
                        that weren’t enough, I can put a smile on anyone's face!
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
                    <h3>Web Development </h3>
                    <p>
                      I have experience building websites and chrome extentions
                      using JavaScript,React,HTML,CSS. I work with Python and
                      Flask for backend development and can pair that experience
                      with PSQL, MongoDB and GraphQL.
                    </p>
                    <br></br>

                    <a
                      href="https://ladyndev.blogspot.com/"
                      target="_blank"
                      rel="noopener noreferrer"
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
                      I am CompTIA A+ certified and can do everything from basic
                      hardware support to networking, working with AD, various
                      MDM software, AD, MacOS, Windows and Linux. As a bonus, I
                      can cable my own ethernet cables!
                    </p>
                    <br></br>

                    <a
                      href="https://ladyndev.blogspot.com/"
                      target="_blank"
                      rel="noopener noreferrer"
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
                      I have experience mangaing hosting and deployemnt through
                      DigitalOcean and establishiing a CI/CD pipeline with
                      GitHub Actions. I have understanding and training working
                      with AWS and Google Cloud Platform as well. For fun, I
                      learned Jenkins, Chef and Ansible.
                    </p>
                    <a
                      href="https://ladyndev.blogspot.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              {/*
            <div className="col-md-4 text-center animate-box">
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
            </div>
            */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
