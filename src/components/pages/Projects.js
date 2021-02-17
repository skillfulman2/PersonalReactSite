import React from "react";
import "../../App.css";
import "./Projects.css";

export default function Projects() {
  return (
    <>
      <span>
        <h1 className="projectsHeader">Projects</h1>
      </span>

      <span>
        <div className="chartItem">
          <figure>
            <embed src="https://wakatime.com/share/@d6808870-d215-46d3-80bc-2d523b87089c/7ab4580a-61c3-42f2-8be6-b3d5d122ad72.svg"></embed>
          </figure>
        </div>
        <div className="chartItem">
          <figure>
            <embed src="https://wakatime.com/share/@d6808870-d215-46d3-80bc-2d523b87089c/a5ad3422-5c89-464f-a67d-596b7dc7d9c4.svg"></embed>
          </figure>
        </div>
      </span>

      <div className="projects-row">
        <div className="projects-section">
          <span>
            <a href="https://lh3.googleusercontent.com/68m33NHsR8ZbKPd2BJMZ9rkjeucK2wSwj4_CV_jQXwzj0OurwZs9LUJMKxfXQCh8UfWCkeBvcfsZVQ9ZzSuT24I1w3jW1ZcqL_w4CFbxaU-d2lzeAyhLwY3uQSrEXwozimoAMgBk5A=w2400?source=screenshot.guru">
              {" "}
              <img
                src="https://lh3.googleusercontent.com/68m33NHsR8ZbKPd2BJMZ9rkjeucK2wSwj4_CV_jQXwzj0OurwZs9LUJMKxfXQCh8UfWCkeBvcfsZVQ9ZzSuT24I1w3jW1ZcqL_w4CFbxaU-d2lzeAyhLwY3uQSrEXwozimoAMgBk5A=w600-h315-p-k"
                alt="agVisionHelper"
              />{" "}
            </a>
          </span>

          <span>
            <h2>AgVision Helper</h2>
            <br />
            <p>
              <b>Tech Stack Used:</b>
            </p>
            <p>
              - Java
              <br />
              - mySQL
              <br />- Jasper Reports
            </p>
            <br />
            <p>Reduced export documentation generation time by 90%</p>
            <p>
              Parsed data from .csv every 5 minutes and put them into the
              database
            </p>
            <p>
              Data from mySQL was put into a google charts dashboard for data
              visualization
            </p>
          </span>
        </div>
      </div>

      <div className="projects-row">
        <div className="projects-section">
          <a href="https://lh3.googleusercontent.com/edQfK9BC6eZXLQqmH045E4AS60INbzMbHi5MatDlv8q642Yu1mrxKC3fVhIMa7pA1j7ScNO3pRAkyyscBceA36_2eHt2iZLBbOgM4b3H_jmF1m18PuzJCzQeLrpLRAnUoZPMVjCDtg=w300?source=screenshot.guru">
            {" "}
            <img
              src="https://lh3.googleusercontent.com/edQfK9BC6eZXLQqmH045E4AS60INbzMbHi5MatDlv8q642Yu1mrxKC3fVhIMa7pA1j7ScNO3pRAkyyscBceA36_2eHt2iZLBbOgM4b3H_jmF1m18PuzJCzQeLrpLRAnUoZPMVjCDtg=w600-h315-p-k"
              alt="globalGaming"
            />{" "}
          </a>
          <span>
            <h2>Global Gaming</h2>
            <br />
            <p>
              <b>Tech Stack Used: </b>
            </p>
            <p>- Swift/SwiftUI</p>
            <p>- Firebase for Authentication and user data store</p>
            <br />

            <p>
              Global Gaming attempted to become the world's first live action
              game show launched on iOS. I wanted to ship premium subscribers a
              box of items that would be used to complete a challenge. The
              person who finished it the fastest while being recorded would be
              the first winner.
            </p>
          </span>
        </div>
      </div>
    </>
  );
}
