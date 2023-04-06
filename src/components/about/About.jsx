import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Coding</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>1500+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Education</h5>
              <small>Cal State Fullerton Bachelor's Degree Computer Science</small>
            </article>
          </div>

          <p>
          I'm currently a Senior at Cal State Fullerton pursuing my B.S. in Computer Science. Throughout college and taking online supplement classes, I have learned a variety of languages including: C, C++, SQL, Python, and Javascript. I have been self-employed since 2016 running my own e-commerce retail business as well as doing IT Support for an automation software business (Destroyer Bots - Big Time LLC). I will be graduating in May 2023 with a Bachelor's in Computer Science and am currently searching for job opportunities.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About