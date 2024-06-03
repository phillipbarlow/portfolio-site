import React from 'react';
import Hero from '../components/Hero';
import Header from '../components/Header';
import frontend from '../images/frontend.png';
import frontendmobile from '../images/frontend-mobile.png';
import Footer from '../components/Footer';

export default function NewsFrontend() {
  return (
    <div>
        <section className='frontend-page'>
        <Header/>
        <Hero headerName={'Phils news read all about it!'} headerText={'frontendTextClass'}/>
        <h1>Phils news frontend</h1>
        <h2 className='subHeading'>CRUD Project: Managing Data in React</h2>
        <div className="frontendImg-container">
          <img className='frontendDesktopImg' src={frontend} alt="Phils new desktop view"/>
          <img className='frontendMobileImg' src={frontendmobile} alt="Phils new desktop view"/>
        </div>
        <p> 
        This project demonstrates my ability to build a single-page application (SPA) using React for managing data. The application implements CRUD (Create, Read, Update, Delete) operations, allowing users to interact with data in a user-friendly interface.
        </p>
        <h2>Features</h2>
        <ul>
          <li>Create, read, update, and delete data</li>
          <li>Built with React components and state management</li>
        </ul>
        <h2>Technologies Used:</h2>
        <ul>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>React router</li>
        </ul>
        <div className="fronted-btn-container-mobile">
          <button className='action-btn'>
            <a href="https://phils-news.netlify.app" target='_blank'>View in action</a>
          </button>
          <button className='github-btn-frontend'>
            <a href="https://github.com/phillipbarlow/nc-news" target='_blank'>View on Github</a>
          </button>
        </div>
      <Footer/>
      </section>
    </div>
  )
}
