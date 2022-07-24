import React, { useState } from "react";
import emailjs from "emailjs-com";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      // emailjs.send("service_s6z0pze","template_2d2ensi");

      const serviceId = "service_s6z0pze";
      const templateId = "template_2d2ensi";
      const userId = "user_9KMCOypFgHo2GOt1zyFUO";
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div>
      <section className="colorlib-work" data-section="contact">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">WANNA TALK?</span>
            </div>
          </div>
          <h2 className="colorlib-heading animate-box">Contact Me</h2>
          <Form style={{ width: "60%" }}>
            <Form.Control
              style={{ margin: "10px" }}
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Control
              style={{ margin: "10px" }}
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control
              style={{ margin: "10px" }}
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></Form.Control>
            <Button
              style={{
                marginTop: "10px",
                borderRadius: "12px",
                backgroundColor: "#D69460",
              }}
              onClick={submit}
            >
              Send Message
            </Button>
            {emailSent ? (
              <span>
                Thank you for your message, we will be in touch in no time!
              </span>
            ) : null}
          </Form>
        </div>
      </section>
    </div>
  );
}
