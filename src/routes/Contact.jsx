import React from 'react';
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
            <img src={linkedin}alt="Linkedin contact me" />
            <p>Linkedin</p>
          </div>
          <div className="github">
            <img className='github' src={github} alt="Github contact me" />
            <p>Github</p>
          </div>
          <div className="x">
          <img src={x} alt="Connect with me on twitter X"/>
         <p>Twitter X</p>
         </div>
          <div className="email">
            <img src={email} alt="Email me"/>
            <p>Email</p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
