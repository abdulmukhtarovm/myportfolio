import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getLanguage, getText } from '../locales'
import { LANGUAGE } from '../tools/constants'


const Navbar = () => {

    // const [navbar, setNavbar] = useState(false)
    const [burger, setBurger] = useState(false)

    const changeLanguage = (e) => {
        localStorage.setItem(LANGUAGE, e.target.value)
        document.location.reload(true)
    }
    const location = useLocation()
    return (
        <div className="main-navBar">
            <div className="Navbar">
                <div className="row align-items-center">
                    <div className="col-sm-2 col-3">
                        <div className="logo">
                            <Link to="/">
                                <img className='w-100' src="./img/logo.png" alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className={`col-lg-12 col-9 mobileWrap ${burger ? '' : 'burgered'}`}>
                        <ul>
                            <li><Link to='/'>{getText("home")}</Link></li>
                            <li><Link className={`${location.pathname === '/profile' ? 'active-link' : ''}`} to='/profile'>{getText("profile")}</Link></li>
                            <li><Link className={`${location.pathname === '/resume' ? 'active-link' : ''}`} to='/resume'>{getText("resume")}</Link></li>
                            <li><Link className={`${location.pathname === '/portfolio' ? 'active-link' : ''}`} to='/portfolio'>{getText("portfolio")}</Link></li>
                            <li><Link className={`${location.pathname === '/contacts' ? 'active-link' : ''}`} to='/contacts'>{getText("contacts")}</Link></li>
                            <li>
                                <select className='siteLang' onChange={changeLanguage}>
                                    <option value="ru" selected={getLanguage() === "ru"} >Ру</option>
                                    <option value="uz" selected={getLanguage() === "uz"} >Uz</option>
                                    <option value="en" selected={getLanguage() === "en"} >Eng</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                    <div onClick={() => setBurger(!burger)} className={`burger pr-4 ml-auto d-flex d-lg-none ${burger ? 'burgered' : ''}`}>
                        <div className="burger1"></div>
                        <div className="burger2"></div>
                        <div className="burger3"></div>
                    </div>
                </div>
            </div>
            <div className="NavbarLine"></div>
        </div>
    )
}

export default Navbar