import React from "react";
import Form from "../../shared/form/Form";
import Button from "../../shared/button/Button";
import "./Contact.css";

const Contact = () => (
  <div>
    <div className="portfolio_showcase" style={{ display: "block", width: "100%", marginBottom: "1.5rem" }}>
      <h3 className="title">Get in Touch</h3>
      <p style={{ color: "#bebebe", lineHeight: 1.8, marginBottom: "1.5rem" }}>
        Have a project, role, or collaboration in mind? Send a message and I&apos;ll
        get back to you.
      </p>
    </div>
    <Form />
    <Button
      previous={{ url: "/project", text: "Projects" }}
      next={{ url: "/resume", text: "Resume" }}
    />
  </div>
);

export default Contact;