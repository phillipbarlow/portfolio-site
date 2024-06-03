import React from 'react'
import backendImg from '../images/backend-project.png'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
export default function NewsBackend() {
  return (
    <div>
    <section className='backend-page'>
      <Header/>
      <Hero headerText={'backendTextClass'} headerName={'Phils news backend'}/>
      <h1>Phils news backend</h1>
      <h2 className='subHeading'>Building a RESTful API in 5 Days</h2>
      <div className="backendDesktopImg">
        <img src={backendImg} alt="Desktop view of the code used for the API"/>
      </div>
      <p>This project which i did my time at Northcoders demonstrates my ability to build a RESTful API backend in just 5 days. I used JavaScript and Express.js to create an API that interacts with a PostgreSQL database, showcasing my backend development skills.</p>
      <h2>Technical Stack</h2>
      <ul>
        <li>Javascript</li>
        <li>Express.js</li>
        <li>PostgreSQL</li>
        <li>Jest</li>
      </ul>
      <p>Accomplishments in 5 Days:</p>
      <ul>
        <li>Implemented data queries.</li>
        <li>Set up routing with Express.js.</li>
        <li>Handled errors for API stability.</li>
        <li>Tested API behavior using Jest.</li>
      </ul>
      <div className="backend-btn-container-mobile">
          <button className='action-btn'>
            <a href="https://nc-project-wk.onrender.com/api" target='_blank'>View API</a>
          </button>
          <button className='github-btn-backend'>
            <a href="https://github.com/phillipbarlow/nc-project-wk" target='_blank'>View on Github</a>
          </button>
        </div>
    </section>
    <Footer/>
    </div>
  )
}
