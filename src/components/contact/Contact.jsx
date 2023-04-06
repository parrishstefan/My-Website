import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_3fjfb17', 'template_ky1ucaz', form.current, 'user_641J0AWGxx4qcKi835yDq')

  //   e.target.reset()
  // };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        {/* <div className="contact__options">
          <article className="contact__option">
            <BsGithub className='contact__option-icon'/>
            <h4>GitHub</h4>
            <a href="https://github.com/parrishstefan" target="_blank">View Repository</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/stefan-parrish-875522137/" target="_blank">Connect with me</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Phone</h4>
            <h5>+1 949 813 2763</h5>
            <a href="sms:+19498132763" target="_blank">Text me</a>
          </article>
        </div> */}
        <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>parrishstefan@gmail.com</h4>
            <a href="mailto:parrishstefan@gmail.com" target="_blank">Email Me</a>
        </article>

        <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/stefan-parrish-875522137/" target="_blank">Connect with Me</a>
        </article>

        <article className="contact__option">
            <BsGithub className='contact__option-icon'/>
            <h4>GitHub</h4>
            <a href="https://github.com/parrishstefan" target="_blank">View Repository</a>
          
          </article>
      </div>
    </section>
  )
}

export default Contact