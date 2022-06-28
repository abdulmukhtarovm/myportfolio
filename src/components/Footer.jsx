import { faFacebookF, faInstagram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer d-flex justify-content-between align-items-center">
    <div className="name">
      <p>MUKHAMMADUMAR ABDULMUKHTAROV</p>
    </div>
    <ul className='d-flex socials'>
      <li><Link to='https://www.facebook.com/abdulmukhtarovm'><FontAwesomeIcon icon={faFacebookF} /></Link></li>
      <li><Link to='https://www.instagram.com/abdulmukhtarov_m/'><FontAwesomeIcon icon={faInstagram} /></Link></li>
      <li><Link to='https://t.me/abdulmukhtarov_m'><FontAwesomeIcon icon={faTelegramPlane} /></Link></li>
    </ul>
  </div>
  )
}

export default Footer