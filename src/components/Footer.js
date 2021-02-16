import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join my newsletter to be notified when new posts are added
        </p>
        <p className="footer-subscription-text">
          Not too much to offer now but just wanted to add firebase writing
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Contact Me</h2>
            <a href="mailto:ryan@globalgaming.dev">ryan@globalgaming.dev</a>
          </div>
        </div>
        <div class="footer-link-items">
          <h2>Social Media</h2>
          <a href="https://twitter.com/RyanRemaly/">Twitter</a>
          <a href="https://www.facebook.com/ryan.remaly/">Facebook</a>
          <a href="https://www.instagram.com/ryanremaly/">Instagram</a>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              RBR
              <i class="fas fa-space-shuttle"></i>
            </Link>
          </div>
          <small class="website-built">Site built with react and GCP</small>
          <div class="social-icons">
            <a
              class="social-icon-link github"
              href="https://github.com/skillfulman2"
            >
              {" "}
              <i class="fab fa-github" />
            </a>

            <a
              class="social-icon-link medium"
              href="https://ryanremaly.medium.com"
            >
              {" "}
              <i class="fab fa-medium"></i>
            </a>

            <a
              class="social-icon-link youtube"
              href="https://www.youtube.com/channel/UCGIXtMTyohuM8ZD1Zpdek0A"
            >
              {" "}
              <i class="fab fa-youtube"></i>
            </a>

            <a
              class="social-icon-link linkedin"
              href="https://www.linkedin.com/in/ryan-remaly-24148211a/"
            >
              {" "}
              <i class="fab fa-linkedin" />
            </a>

            <a
              class="social-icon-link twitter"
              href="https://twitter.com/RyanRemaly"
            >
              {" "}
              <i class="fab fa-twitter" />
            </a>

            <a
              class="social-icon-link facebook"
              href="https://www.facebook.com/ryan.remaly/"
            >
              {" "}
              <i class="fab fa-facebook" />
            </a>

            <a
              class="social-icon-link instagram"
              href="https://www.instagram.com/ryanremaly/"
            >
              {" "}
              <i class="fab fa-instagram" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
