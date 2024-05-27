import html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/javascript.png';
import git from '../images/git.png';
import node from '../images/node-js.png';
import react from '../images/react.png';
import psql from '../images/psql.png';
import axios from '../images/axios-logo.png';
import express from '../images/express-js.svg';
import jest from '../images/jest.svg'
export default function Skills() {
  return (
    <section className='skills'>
        <div className="skills-grid-container">
          <div className="skill htmlCss">
              <img src={html} alt="html icon"/>
            <p>HTML</p>
          </div>
          <div className="skill css">
              <img src={css} alt="css icon"/>
            <p>Css</p>
          </div>
          <div className="skill js">
          <img src={js} alt="Javascript icon"/>
          <p>JavaScript</p>
          </div>
          <div className="skill react">
          <img src={react} alt="react icon"/>
          <p>React</p>
          </div>
          <div className="skill git">
          <img src={git} alt="Git icon"/>
          <p>Git</p>
          </div>
          <div className="skill node">
          <img src={node} alt="Node icon"/>
          <p>Node js</p>
          </div>
          <div className="skill psql">
          <img src={psql} alt="Postgress icon"/>
          PostgreSQL
          </div>
          <div className="skill axios">
          <img src={axios} alt="Axios icon"/>
          Axios
          </div>
          <div className="skill express">
          <img src={express} alt="Express js icon"/>
          Express js
          </div>
          <div className="skill jest">
          <img src={jest} alt="Jest js icon"/>
          Express js
          </div>
        </div>
    </section>
  )
}
