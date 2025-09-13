import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import lya1 from '../images/leedsYouAround.webp';
export default function LeedsYouAround() {
  return (
    <div>
    <section className="leedsYouAround-page">
      <Header />
      {/* <Hero
        headerText={"lya-TextClass"}
        headerName={"LeedsYouAround"}
      /> */}
      <h1>LeedsYouAround</h1>
      <h2 className="subHeading">Building a RESTful API in 5 Days</h2>
      <div className="backendDesktopImg">
        <img
          src={lya1}
          alt="Four stage demonstration of starting, viewing tasks, taking photo, final time"
        />

      </div>
      <p className='lya-overview'>
        For our final project at Northcoders, I collaborated with three teammates to develop LeedsYouAround, a mobile scavenger hunt app centered around landmarks in the Leeds area. Over the course of two weeks, we took the project from initial design to a fully functional application. Here’s a detailed breakdown of our development process:
      </p>
      <h2>Technical Stack</h2>
      <ul>
        <li>Javascript</li>
        <li>React Native & Expo</li>
        <li>Firebase</li>
        <li>Google Vision API</li>
        <li>Jira</li>
      </ul>
      <h2>Planning and Design</h2>
      <ul>
        <li>Conceptualization: Brainstormed ideas and settled on a scavenger hunt app focusing on Leeds landmarks.</li>
        <li>Wireframing and UI Design: Created wireframes and UI mockups to guide the development process.</li>
        <li>Task Allocation: Divided tasks among team members using Jira, ensuring everyone had clear responsibilities.</li>
      </ul>
      <h2>Core Functionality Development</h2>
      <ul>
        <li>Map Integration: Implemented map functionality using React Native maps.</li>
        <li>Photo Capture and Upload: Enabled photo capture and upload features using Expo’s camera module.</li>
        <li>Image Verification: Connected the captured images to the Google Vision API for landmark recognition and verification.</li>
      </ul>
      <div className="backend-btn-container-mobile">
        <button className="action-btn">
          <a href="https://northcoders.com/project-phase/leedsyouaround" target="_blank">
            View in action
          </a>
        </button>
        <button className="github-btn-backend">
          <a
            href="https://github.com/mstent/Leeds-You-Around"
            target="_blank"
          >
            View on Github
          </a>
        </button>
      </div>
    </section>
    <Footer />
  </div>
  )
}
