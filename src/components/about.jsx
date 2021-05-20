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
                        have completed the Full Stack Web Development
                        (Python+React) at Bottega Coding School, as well as
                        their ReactNative, and Intro to Machine Learning
                        courses. After completing Bottega’s courses, I started
                        working as an apprentice at a great company, called
                        DevPipeline. DevPipeline is a unique company that
                        creates interim training and relevant work experience
                        for those graduating from programs but who need some
                        additional training in order to enter the workforce. In
                        a nutshell: bottega trains developers, while DevPipeline
                        builds them. I have worked at DevPipeline since October
                        of 2020, utilizing languages such as React and Python. I
                        code in both front and backend and enjoy solving unique
                        problems and building functional applications from
                        scratch. My time at DevPipeline has not only helped me
                        better understand coding, but has opened the door to a
                        world of tech I wasn’t familiar with. Everyday I am able
                        to strengthen my React and Python skills, learn about
                        computer science related topics like bigO notation,
                        algorithms, even how to manipulate and addition and
                        raspberry pi. Many of these new concepts I’ve learned on
                        the job, have become hobbies in my spare time, making
                        development much more fun! On top of that, I am a self
                        trained IT Professional, with my current CompTIA A+
                        Certification and currently studying towards an
                        associate’s degree in computer science. Maybe even one
                        day a bachelor’s degree. With over five years of IT
                        related experience, paired with one and a half years of
                        study and working in development, I have learned that
                        through determination, I am capable of problem solving
                        and self study; thus assisting in creating long lasting
                        business/customer relationships and beautiful,
                        efficient, full-stack applications.
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
                <span className="heading-meta">What I Do?</span>
                <h2 className="colorlib-heading">Here Are Some Of My Skills</h2>
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
                      I have experience building websites and and mobile
                      applications using JavaScript, React, ReactNative, Python,
                      HTML and CSS
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>
                      As coming from the CS background, I have good grasp over
                      fundamental concepts of DSA
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>Development and Computer Science</h3>
                    <p>
                      I am pursuing my education in Development and Computer
                      Science to exceed in my career and expand my knowledge to
                      be the best developer I can be
                    </p>
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
