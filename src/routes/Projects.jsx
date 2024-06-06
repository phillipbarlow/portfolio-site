import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import frontendProject from '../images/frontend.webp'
import backendProject from '../images/backend-project.webp'
import leedsYouAround from '../images/leedsYouAround.webp';
import portfolioImg from '../images/portfolioImg.webp';
export default function Work() {
  return (
    <div>
      <Header/>
      <Hero headerName={'Projects'} className={'projectsClass'} headerText={'projects-text'}/>
      <section className='all-projects-container'>
          <img className='philsNewsFrontend-img' src={frontendProject} alt="front desktop view of phils news" />
          <div  className='philsNewsFrontend-txt'>
            <p className='project-title'>Phils news frontend</p>
            <p>
            A CRUD (create, read, update, delete) application created using React for the front-end, created during my time at Northcoders
            </p>
            <div className="projectBtn-container">
            <a href="https://phils-news.netlify.app" target="_blank"> View in action</a>
            <a href="https://github.com/phillipbarlow/nc-news" target="_blank">View on Github</a>
            </div>
          </div>
          <img className='philsNewsBackend-img' src={backendProject} alt="Desktop view of my code in visual studio code" />
          <div className='philsNewsBackend-txt'>
            <p  className='project-title'>
              Phils news backend
            </p>
            <p>
              A RESTful API backend project built using JavaScript and Express.js to interact with a PostgreSQL database.
            </p>
            <div className="projectBtn-container">
              <a href="https://nc-project-wk.onrender.com/api" target="_blank">View API</a>
              <a href="https://github.com/phillipbarlow/nc-project-wk" target="_blank">View on Github</a>
            </div>
          </div>
          <img className='LeedsYouAround-img' src={leedsYouAround} alt="" />
          <div className='LeedsYouAround-txt'>
            <p className='project-title'>LeedsYouAround</p>
            <p className='LeedsYouAround-txt'>
            My final project which I teamed up with three other northcoders to develop LeedsYouAroun from design to code within two week, the mobile scavenger hunt app focused on landmarks in the Leeds area. Players navigate to various sights using an integrated map and validate their visits by taking pictures, which are then verified and marked off. The app was built using React Native and Expo, with Firebase and Google Vision handling the backend and image recognition. We managed our project with Jira, which also inspired our team name.
            </p>
            <div className="projectBtn-container">
              <a href="https://northcoders.com/project-phase/leedsyouaround" target="_blank">View in action</a>
              <a href="https://github.com/mstent/Leeds-You-Around" target="_blank">View on Github</a>
            </div>
          </div>
            <img className='portfolio-img' src={portfolioImg} alt="" />
          <div className='portfolio-txt'>
            <p className='project-title'>Portfolio site</p>
            <p className='portfolio-txt'>
              This site which you are viewing now, I created to demonstate some of my ability to use HTML CSS and React.
            </p>
            <div className="projectBtn-container">
              <a href="https://github.com/phillipbarlow/portfolio-site" target="_blank">View on Github</a>
            </div>
          </div>
      </section>
      <Footer/>
    </div>
  )
}
