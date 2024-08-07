import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import {Link} from "react-router-dom";
import profile from "../images/profile-image.webp"

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function About() {
  return (
    <div className='aboutPage'>
      <Header/>
      <Hero headerName={'About me'} className={'about-hero'} headerText={'about-text'}/>
      <section className='about-main'>
        <div className="img-container">
          <img src={profile} alt="Profile of me on beach in Norfolk"/>
        </div>
        <div className="littleBit-about">
          <p className='about-title'>A little bit about me.</p>
          <p>My name is Phillip Barlow but just call me Phil :)
          I’m an enthusiastic, self taught software developer and recently graduated a 12 week bootcamp at Northcoders in April 2024. 

          My coding journey began in March 2020 during the Covid pandemic, while working as a bench hand joiner making bespoke
          furniture as well as making bars for restaurants and night clubs from from technical scaled drawings.

          Being highly motivated and detail-oriented, I am looking to leverage my problem-solving skills and hands-on experience into a 
          career in software development. 

          I am actively looking for opportunities, available immediately and eager to learn and contribute to a collaborative development team.
          </p>
        </div>
        <div className="littlebitMore-about">
          <p className='about-title'>A little bit about me when I am not at the computer.</p>
          <p>lol just kidding, I’m always at the computer ...
          Seriously though, when I’m not at the computer I spend my free time with my family; 
          My wife and I became parents in 2020 to our daughter and again in 2023 to our son.
          We love to be outdoors, either taking long walks as a family with our cockapoo Nelly or gardening.
          I like to teach our children there is more to life  than TV and YouTube.
          We also love to bake cakes.</p>
        </div>
        <h2 className='timeline-title'>Timeline of progression</h2>
        <Timeline style={{alignItems: 'flex-start'}}>
      <TimelineItem>
        <TimelineSeparator className='timeline-sep'>
          <TimelineDot />
          <TimelineConnector className='timeline-connector' />
        </TimelineSeparator>
        <TimelineContent className='timeline-content'>
          Some content going here
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Step 2</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Step 3</TimelineContent>
      </TimelineItem>
    </Timeline>
          <Link className='mailme-link' to="mailto:phillipbarlow10@gmail.com">Lets chat, click here!</Link>
      </section>
      <Footer/>
    </div>
  )
}
