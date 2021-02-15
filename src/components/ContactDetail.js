import React from "react";
import "./ContactDetail.css";

function ContactDetail() {
  return (
    <div className="contactDetail-container">
        <h1>Email and Twitter are the fastest ways to get in touch</h1>
        <h2>I'm happy to talk about anything</h2><br></br>
      <div class="contactDetail-links">
        <div className="contactDetail-link-wrapper">
          <div class="contactDetail-link-items">
              
            <h2>Contact Me</h2>
            <a href="mailto:ryan@globalgaming.dev">ryan@globalgaming.dev</a>
          </div>
        </div>
        <div class="contactDetail-link-items">
          <h2>Social Media</h2>
          <a href="https://twitter.com/RyanRemaly/">Twitter</a>
        </div>
      </div>
    </div>
  );
}

export default ContactDetail;
