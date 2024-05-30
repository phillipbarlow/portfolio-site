import Header from '../components/Header';
import '../App.css'
import svg from '../images/wave-4.svg'
import mainImage from '../images/home-mainImage2.svg';
import Skills from '../components/Skills';
import frontendProject from '../images/frontend.png'
import backendProject from '../images/backend-project.png'
import react from '../images/react.png';
import html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/javascript.png';
import axios from '../images/axios.svg';
import node from '../images/node-js.png';
import express from '../images/express-js.svg';
import psql from '../images/psql.png';
import jest from '../images/jest.svg';
import render from '../images/render.png';
import reactNative from '../images/react-native.svg';
import expo from '../images/expo.svg';
import firebase from '../images/firebase.svg';
import googleVision from '../images/googleVision.png';
import jira from '../images/jira.svg';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import leedsYouAround from '../images/leedsYouAround.png';

export default function App() {
  return (
    <div className='homePage' >
      <Header/>
      <Hero headerName={'Home'} intro={'Hi,I’m Phil and I am a Software Developer from Leeds.'} bio={"I am a Software Developer with a strong foundation in programming principles, problem-solving and a passion for innovation and continuous learning.I am looking for an entry-level opportunity and I am excited to embark on the next stage of my career journey."} mainImage={mainImage} className={'hero'} headerText={'home-text'}/>
      <Skills/>
      <section className='latestWork-sectionContainer'>
        <div className="projects-container">
          <p className='work-title'>Latest work</p>
          <div className='project a'>
              <img className='project-a' src={frontendProject} alt="Frontend project called Phils news"/>
              <div className="frontend-icons">
                <img src={html} alt="React"/>
                <img src={css} alt="React"/>
                <img src={react} alt="React"/>
                <img src={js} alt="React"/>
                <img src={axios} alt="React"/>
              </div>
              <div className="overlay">
                <p>Frontend project</p>
                <div className="btn-container">
                <a href="https://github.com/phillipbarlow/nc-news" target='_blank'>View source code</a>
                <a href="https://phils-news.netlify.app" target='_blank'>View site in action</a>
                <button>View more!</button>
                </div>
            </div>
          </div>
          <div className='project b'>
            <img className='project-b' src={backendProject} alt="backend project called Phils news"/>
            <div className="backend-icons">
              <img src={js} alt="JavaScript"/>
              <img src={node} alt="Node js"/>
              <img src={express} alt="Express js"/>
              <img src={psql} alt="Psql"/>
              <img src={jest} alt="Jest"/>
              <img src={render} alt="Render"/>
            </div>
            <div className="overlay">
              <div className="btn-container">
              <p>Backend project</p>
              <a href="https://github.com/phillipbarlow/nc-project-wk" target='_blank'>View source code</a>
              <button>View more!</button>
            </div>
            </div>
          </div>
          <div className='project c'>
          <img className='project-b' src={leedsYouAround} alt="backend project called Phils news"/>
            <div className="leedsYouAround-icons">
              <img src={reactNative} alt="React native"/>
              <img src={expo} alt="React Expo"/>
              <img src={firebase} alt="Firebase"/>
              <img src={googleVision} alt="Google vision API"/>
              <img src={js} alt="JavaScript"/>
              <img src={jira} alt="Jira"/>
            </div>
            <div className="overlay">
              <p>Leeds you around</p>
              <div className="btn-container">
              <a href="https://github.com/mstent/Leeds-You-Around" target='_blank'>View source code</a>
              <a href="https://northcoders.com/project-phase/leedsyouaround" target='_blank'>Project page</a>
              <button>View more</button>
              </div>
            </div>
            </div>
          </div>
      </section>
      <Footer/>
    </div>
  )
}
