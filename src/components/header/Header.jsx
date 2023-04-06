import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Stefan Parrish</h1>
        <h5 className="text-light">Undergrad Computer Science Major at Cal State Fullerton</h5>
        <CTA />

        {/* <div className="me">
          <img src={ME} alt="me" />
        </div> */}

      </div>
    </header>
  )
}

export default Header
