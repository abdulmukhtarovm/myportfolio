import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faInstagram, faTelegramPlane, faTwitter } from '@fortawesome/free-brands-svg-icons'

import React from 'react'
import { Link } from 'react-router-dom'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { getLanguage, getText } from '../locales'
import { LANGUAGE } from '../tools/constants'

const HomePageLeft = () => {
    const changeLanguage = (e) => {
        localStorage.setItem(LANGUAGE, e.target.value)
        document.location.reload(true)
    }
    return (
        <div className='HomePageLeft w-50 d-flex align-items-center justify-content-center'>
            <div className="site-lang">
            <select className='siteLang' onChange={changeLanguage}>
                <option value="ru" selected={getLanguage() === "ru"} >Ру</option>
                <option value="uz" selected={getLanguage() === "uz"} >Uz</option>
                <option value="en" selected={getLanguage() === "en"} >Eng</option>
            </select>
            </div>
            <div className="content">
                <div className="logo">
                    <img src="../../img/logo-yellow.png" alt="" />
                </div>
                <h1><span>{getText("myName")}</span> {getText("mySName")}</h1>
                <h2>{getText("programist")}</h2>
                <div className="social-media d-sm-block d-none">
                    <ul className='d-flex justify-content-center'>
                        <li><Link to='https://www.facebook.com/abdulmukhtarovm'><FontAwesomeIcon icon={faFacebookF} /></Link>
                            <span>{getText("fb")}</span></li>
                        <li><Link to='https://instagram.com/abdulmukhtarov_m/'><FontAwesomeIcon icon={faInstagram} /></Link>
                            <span>{getText("ig")}</span></li>
                        <li><Link to='https://t.me/abdulmukhtarov_m'><FontAwesomeIcon icon={faTelegramPlane} /></Link>
                            <span>{getText("tg")}</span></li>
                        <li><Link to='https://twitter.com/abdulmukhtarovm'><FontAwesomeIcon icon={faTwitter} /></Link>
                            <span>{getText("tw")}</span></li>
                        <li><Link to='mailto:abdulmukxtarovm@gmail.com'><FontAwesomeIcon icon={faEnvelope} /></Link>
                            <span>{getText("email")}</span></li>
                        <li><Link to='https://github.com/abdulmukhtarovm'><FontAwesomeIcon icon={faGithub} /></Link>
                            <span>{getText("gh")}</span></li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HomePageLeft