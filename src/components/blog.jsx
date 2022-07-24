import React, { Component } from "react";

export default class Blog extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">Read</span>
                <h2 className="colorlib-heading">Recent Blog</h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-4 col-sm-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="blog-entry">
                  <a href="blog.html" className="blog-img">
                    <img src="images/blog-1.jpg" className="img-responsive" />
                  </a>
                  <div className="desc">
                    <span>
                      <small>April 14, 2018 </small> |{" "}
                      <small> Special Skills and Qualifications </small> |{" "}
                      <small>
                        {" "}
                        <i className="icon-bubble3" /> 4
                      </small>
                    </span>
                    <h3>
                      <a href="https://ladyndev.blogspot.com/2022/07/what-are-my-special-skills-and.html">
                        What Makes Me Unique?
                      </a>
                    </h3>
                    <p>What Makes Me Unique? Read about it here!</p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-6 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div className="blog-entry">
                  <a href="blog.html" className="blog-img">
                    <img src="images/blog-2.jpg" className="img-responsive" />
                  </a>
                  <div className="desc">
                    <span>
                      <small>April 14, 2018 </small> |{" "}
                      <small> What Did I Do At DevPipeline? </small> |{" "}
                      <small>
                        {" "}
                        <i className="icon-bubble3" /> 4
                      </small>
                    </span>
                    <h3>
                      <a href="blog.html">What Did I Do At DevPipeline?</a>
                    </h3>
                    <p>
                      DevPipeline was a unique expereince rich with real-world
                      experience. Checkout what that looked like!
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="blog-entry">
                  <a href="blog.html" className="blog-img">
                    <img
                      src="images/blog-3.jpg"
                      className="img-responsive"
                      alt="HTML5 Bootstrap Template by colorlib.com"
                    />
                  </a>
                  <div className="desc">
                    <span>
                      <small>April 14, 2018 </small> |{" "}
                      <small> Inspiration </small> |{" "}
                      <small>
                        {" "}
                        <i className="icon-bubble3" /> 4
                      </small>
                    </span>
                    <h3>
                      <a href="blog.html">
                        How I Built And Managed Departments From Scratch
                      </a>
                    </h3>
                    <p>
                      QA, Onboarding, IT and DevOps? None of these departments
                      existed, before me!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
