import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import contactImage from '../images/Phil.webp';
import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';
import email from '../images/email.svg';
import x from '../images/twitter.svg';
export default function Contact() {
  return (
    <div className='contactPage'>
      <Header/>
      <Hero headerName={'Contact me'} className={'contact-hero'} headerText={'contact-txt'}/>
      <section className='contact-section'>
        <div className="contact-container">
          <p className='connect-txt'>Let's connect</p>
          <div className="main-image-container">
            <img  className='main-image' src={contactImage} alt="Me last day of Northcoders" />
          </div>
          <div className="linkedin">
            <a  href="https://www.linkedin.com/in/phil-barlow-0222461b5" target="_blank">
            <img className="linkedinImg" src={linkedin}alt="Linkedin contact me" />
            <p>Linkedin</p>
            </a>
          </div>
          <div className="github">
            <a href='https://github.com/phillipbarlow' target="_blank">
            <img className='githubImg' src={github} alt="Github contact me" />
            <p>Github</p>
            </a>
          </div>
          <div className="x">
            <a  href="https://x.com/PhillipBarlow14" target="_blank" >
              <img className="xImg" src={x} alt="Connect with me on twitter X"/>
              <p>Twitter X</p>
            </a>
         </div>
          <div className="email">
            <a href="mailto:phillipbarlow10@gmail.com" target="_blank" >
            <img className='emailImg' src={email} alt="Email me"/>
            <p>Contact</p>
            </a>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
