import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          FULL STACK DEVELOPER | IT ADMIN | QA MANAGEMENT{" "}
                          <span>2020-2022</span>
                        </h2>
                        <p>
                          Design, build, or maintain websites, using authoring
                          or scripting languages, content creation tools,
                          management tools, and digital media. Confer with
                          management or development teams to prioritize needs,
                          resolve conflicts, develop content criteria, or choose
                          solutions. Evaluate code to ensure that it is valid,
                          is properly structured, meets industry standards, and
                          is compatible with browsers, devices, or operating
                          systems. Perform Internal IT Functions including
                          computer provision and management, network management,
                          and server management/repair. Manage DevOps for
                          internal and external projects using DigitalOcean,
                          GCP, and AWS with Git/GitHub integration. Developed
                          and Manage Software QA Department
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Jr Developer at ZipZap<span>2022-Present</span>
                        </h2>
                        <p>
                          Full stack developer for a fantastic start-up
                          utilizing ReactJS, MaterialUI, GraphQL and AWS.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Lead Technical Support Engineer <span>2019-2020</span>
                        </h2>
                        <p>
                          Take inbound calls, chats, emails, etc... to assist
                          resolve technical and network related issues for
                          learners signed up for company courses Run bug tests
                          and isolate coding related issues Work with
                          development, CX and other related third-parties to
                          resolve technical bugs and concerns Track financial
                          reporting and change user access based on payments
                          Assist IT workflow development and communication with
                          Salesforce Built support KB and Community documents,
                          training and workflows Basic HTML, CSS and JS coding
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
