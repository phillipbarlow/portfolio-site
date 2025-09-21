import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import frontendProject from "../images/frontend.webp";
import backendProject from "../images/backend-project.webp";
import leedsYouAround from "../images/leedsYouAround.webp";
import portfolioImg from "../images/portfolioImg.webp";
export default function Work() {
  return (
    <div>
      <Header/>
      <section className="projects-wrapper">
        <div className="philsNewsFrontend-container">
          <img
            className="project-img"
            src={frontendProject}
            alt="front desktop view of phils news"
          />
          <p className="project-title">Phils news frontend</p>
          <p className="project-paragraph">
            A CRUD (create, read, update, delete) application created using
            React for the front-end, created during my time at Northcoders
          </p>
          <div className="projectBtn-container">
            <a href="https://phils-news.netlify.app" target="_blank">
              View in action
            </a>
            <a href="https://github.com/phillipbarlow/nc-news" target="_blank">
              View on Github
            </a>
          </div>
        </div>
        <div className="philsNewsBackend-container">
          <img
            className="project-img"
            src={backendProject}
            alt="Desktop view of my code in visual studio code"
          />
          <p className="project-title">Phils news backend</p>
          <p className="project-paragraph">
            A RESTful API backend project built using JavaScript and Express.js
            to interact with a PostgreSQL database.
          </p>
          <div className="projectBtn-container">
            <a href="https://nc-project-wk.onrender.com/api" target="_blank">
              View API
            </a>
            <a
              href="https://github.com/phillipbarlow/nc-project-wk"
              target="_blank"
            >
              View on Github
            </a>
          </div>
        </div>
        <div className="LeedsYouAround-container">
          <img className="LeedsYouAround-img" src={leedsYouAround} alt="" />
          <p className="project-title">LeedsYouAround</p>
          <p className="project-paragraph">
            My final project which I teamed up with three other northcoders to
            develop LeedsYouAroun from design to code within two week, the
            mobile scavenger hunt app focused on landmarks in the Leeds area.
            Players navigate to various sights using an integrated map and
            validate their visits by taking pictures, which are then verified
            and marked off. The app was built using React Native and Expo, with
            Firebase and Google Vision handling the backend and image
            recognition. We managed our project with Jira, which also inspired
            our team name.
          </p>
          <div className="projectBtn-container">
            <a
              href="https://northcoders.com/project-phase/leedsyouaround"
              target="_blank"
            >
              View in action
            </a>
            <a
              href="https://github.com/mstent/Leeds-You-Around"
              target="_blank"
            >
              View on Github
            </a>
          </div>
        </div>
        <div className="portfolio-container">
          <img className="portfolio-img" src={portfolioImg} alt="" />
          <p className="project-title">Portfolio site</p>
          <p className="project-paragraph">
            This site which you are viewing now, I created to demonstate some of
            my ability to use HTML CSS and React.
          </p>
          <div className="projectBtn-container">
            <a
              href="https://github.com/phillipbarlow/portfolio-site"
              target="_blank"
            >
              View on Github
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
