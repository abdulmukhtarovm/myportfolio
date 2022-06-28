import { faBriefcase, faEnvelope, faGraduationCap, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { getText } from '../locales'

const HomePageRight = () => {
    return (
        <div className='HomePageRight w-50 '>
            <div className="menu">
                    <Link to='/profile'>
                <div className="profile-btn">
                        <div className="heading">
                            <div className="item">
                                <FontAwesomeIcon className='icon' icon={faUser} />
                            </div>
                            <div className="masking"></div>
                            <div className="info">
                                <h2> {getText("pr")}<span>{getText("o")}</span>{getText("fil")}</h2>
                                <h3>{getText("aboutme")}</h3>
                            </div>
                        </div>
                </div>
                    </Link>

                    <Link to='/resume'>
                <div className="resume-btn">
                        <div className="heading">
                            <div className="item">
                                <FontAwesomeIcon className='icon' icon={faGraduationCap} />
                            </div>
                            <div className="masking"></div>

                            <div className="info">
                                <h2>{getText("re")}<span>{getText("z")}</span>{getText("ume")}</h2>
                                <h3>{getText("skillEx")}</h3>
                            </div>
                        </div>
                </div>
                    </Link>

                    <Link to='/portfolio' >
                <div className="portfolio-btn">
                        <div className="heading">
                            <div className="item">
                                <FontAwesomeIcon className='icon' icon={faBriefcase} />
                            </div>
                            <div className="masking"></div>

                            <div className="info">
                                <h2>{getText("port")}<span>{getText("f")}</span>{getText("olio")}</h2>
                                <h3>{getText("portfolios")}</h3>
                            </div>
                        </div>
                </div>
                    </Link>

                    <Link to='/contacts'>
                <div className="contact-btn">
                        <div className="heading">
                            <div className="item">
                                <FontAwesomeIcon className='icon' icon={faEnvelope} />
                            </div>
                            <div className="masking"></div>

                            <div className="info">
                                <h2>{getText("kon")}<span>{getText("t")}</span>{getText("akti")}</h2>
                                <h3>{getText("svyaz")}</h3>
                            </div>
                        </div>
                </div>
                    </Link>
            </div>
        </div>
    )
}

export default HomePageRight