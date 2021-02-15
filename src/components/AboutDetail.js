import React from "react";
import "./AboutDetail.css";

function AboutDetail() {
  return (
    <div className="aboutDetail-container">
      <span>
        <p>
          My name is Ryan Remaly. I am 23 years old and am always looking to
          learn and solve problems. My posts here will vary widely and I don't
          have an exact 5 year plan for how I want it to end up but that's ok. For now it will just
          house any projects and problems that I am working on or find interesting in addition to
          more personal blog posts. 
        </p>
        <br></br>
        <p>
          For fun I like playing all different types of sports and generally
          just being outside, especially when it's warm. My favorite book is
          probably Ishmael so if you have not read that I would recommend it.
          Favorite movie is Shawshank Redemption but my darkhorse is Fantastic
          Mr. Fox.
        </p><br></br>
        <p>
          I'm always happy to talk to new people so if you find anything in a post or code that you have
          questions about feel free to reach out. I am not very active on instagram or facebook so twitter/email is
          probably your best best for a quick response. You'll find all of the various methods of contact below. 
        </p>
      </span>

      <span>
        <a href="https://lh3.googleusercontent.com/rINS-LlXd6X4OZGzu5oxYeYdil30oeMP6wlpvWRofD_40EKpNwvpBhYiP2wiRSdtQCpCqMf6MscIJmOiYVdtKaHnC_etqPqTytJYXHR0aE8ArOQFNRzGjIAyzvEsVeK4xp0t1G6C9Q=w300?source=screenshot.guru">
          {" "}
          <img
            src="https://lh3.googleusercontent.com/rINS-LlXd6X4OZGzu5oxYeYdil30oeMP6wlpvWRofD_40EKpNwvpBhYiP2wiRSdtQCpCqMf6MscIJmOiYVdtKaHnC_etqPqTytJYXHR0aE8ArOQFNRzGjIAyzvEsVeK4xp0t1G6C9Q=w300-h315-p-k"
            alt="Me"
          />{" "}
        </a>
      </span>
    </div>
  );
}

export default AboutDetail;
