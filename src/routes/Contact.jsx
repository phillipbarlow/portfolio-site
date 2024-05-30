import React from 'react';
import {Link} from "react-router-dom"
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import contactImage from '../images/Phil.jpeg';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import email from '../images/email.png';
import x from '../images/twitterx.png';
export default function Contact() {
  return (
    <div className='contactPage'>
      <Header/>
      <Hero headerName={'Contact me..'} className={'contact-hero'} headerText={'contact-txt'}/>
      <section className='contact-section'>
        <div className="contact-container">
          <p className='connect-txt'>Let's connect</p>
          <div className="main-image-container">
            <img  className='main-image' src={contactImage} alt="Me last day of Northcoders" />
          </div>
          <div className="linkedin">
            <a className="linkedin" href="https://www.linkedin.com/in/phil-barlow-0222461b5" target="_blank">
            <img src={linkedin}alt="Linkedin contact me" />
            <p>Linkedin</p>
            </a>
          </div>
          <div className="github">
            <a className="github" href='https://github.com/phillipbarlow' target="_blank">
            <img className='github' src={github} alt="Github contact me" />
            <p>Github</p>
            </a>
          </div>
          <div className="x">
            <a className="x" href="https://x.com/PhillipBarlow14" target="_blank" >
              <img src={x} alt="Connect with me on twitter X"/>
              <p>Twitter X</p>
            </a>
         </div>
          <div className="email">
            <a href="mailto:phillipbarlow10@gmail.com" target="_blank" >
            <img src={email} alt="Email me"/>
            <p>Contact</p>
            </a>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
