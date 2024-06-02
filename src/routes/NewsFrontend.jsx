import React from 'react';
import Hero from '../components/Hero';
import Header from '../components/Header';
import frontend from '../images/frontend.png';
import frontendmobile from '../images/frontend-mobile.png';

export default function NewsFrontend() {
  return (
    <div>
        <Header/>
      <Hero/>
      <section className='frontend-page'>
        <h1>Phils news frontend</h1>
        <p>CRUD Project: Managing Data in React</p>
        <img src={frontend} alt="Phils new desktop view"/>
        <img src={frontendmobile} alt="Phils new desktop view"/>
        <p> 
        This project demonstrates my ability to build a single-page application (SPA) using React for managing data. The application implements CRUD (Create, Read, Update, Delete) operations, allowing users to interact with data in a user-friendly interface.
        </p>
        <p>Features</p>
        <ul>
          <li>Create, read, update, and delete data</li>
          <li>Built with React components and state management</li>
        </ul>
        <p>Technologies Used:</p>
        <ul>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>React router</li>
        </ul>
        <div className="fronted-btn-container-mobile">
          <button>View in action</button>
          <button>View on Github</button>
        </div>
      </section>
    </div>
  )
}
