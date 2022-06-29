
import { faChalkboard, faCode, faHandshake, faImages, faLightbulb, faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { getText } from '../locales';

const ProfilePage = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1400);
    }, []);
    return (
        <>
            {
                isLoading ?
                    <>
                        <div id="preloader">
                            <div className="loader">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </>
                    :
                    <div className='ProfilePage'>
                        <div className="ProfilePageLeft position-relative">
                            <div className="mask"></div>
                            <div className="info">
                                <h1>{getText("pr")}<span>{getText("o")}</span>{getText("fil")}</h1>
                            </div>
                        </div>
                        <div className="ProfilePageRight">

                            <Navbar />

                            <div className="aboutMe">
                                <div className="main-bg">
                                    <img src="./img/wall1.png" alt="" />
                                </div>
                                <div className="text-center">
                                    <h2 className="small-heading">{getText("istoriyaslavy")}</h2>
                                </div>
                                <div className="history">
                                    <div className="row justify-content-md-center">
                                        <div className="img col-md-3 col-8 offset-md-1">
                                            <img className='w-100' src="../../img/me.jpg" alt="" />
                                        </div>
                                        <div className="info col-md-7 col-11">
                                            <h3>{getText("uniqueweb")}</h3>
                                            <p className="me">
                                                {getText("aboutP1")}
                                            </p>

                                            <p className="add-info">{getText("dopinfo")} </p>

                                            <p className="mom">
                                                {getText("mominfo")}
                                            </p>

                                            <p className="dad">
                                                {getText("dadinfo")}
                                            </p>

                                            <p className="bro">
                                                {getText("broinfo")}
                                            </p>
                                            <div className="btn download-btn">
                                                <a download href="../Abdulmukhtarov's  Resume _ Portfolio.pdf">{getText("downloadresume")}</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="whatcanido">
                                <div className="text-center">
                                    <h2 className="small-heading pt-5">{getText("whatcanido")}</h2>
                                </div>
                                <div className="row m-0 justify-content-md-center">
                                    <div className="col-md-4 col-sm-8">
                                        <div className="card">
                                            <div className="masking"></div>
                                            <div className="item">
                                                <FontAwesomeIcon className='icon' icon={faCode} />
                                            </div>
                                            <h3>{getText("frontverstka")}</h3>
                                            <p>
                                                {getText("frontverstkaP")}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-8">
                                        <div className="card">
                                            <div className="masking"></div>
                                            <div className="item">
                                                <FontAwesomeIcon className='icon' icon={faImages} />
                                            </div>
                                            <h3>{getText("rabotamaket")}</h3>
                                            <p>
                                                {getText("rabotamaketP")}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-8">
                                        <div className="card">
                                            <div className="masking"></div>
                                            <div className="item">
                                                <FontAwesomeIcon className='icon' icon={faLink} />
                                            </div>
                                            <h3>{getText("apiconnect")}</h3>
                                            <p>
                                                {getText("apiconnectP")}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-8">
                                        <div className="card">
                                            <div className="masking"></div>
                                            <div className="item">
                                                <FontAwesomeIcon className='icon' icon={faLightbulb} />
                                            </div>
                                            <h3>{getText("ideas")}</h3>
                                            <p>
                                                {getText("ideasP")}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-8">
                                        <div className="card">
                                            <div className="masking"></div>
                                            <div className="item">
                                                <FontAwesomeIcon className='icon' icon={faHandshake} />
                                            </div>
                                            <h3>{getText("smmhelp")}</h3>
                                            <p>
                                                {getText("smmhelpP")}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-8">
                                        <div className="card">
                                            <div className="masking"></div>
                                            <div className="item">
                                                <FontAwesomeIcon className='icon' icon={faChalkboard} />
                                            </div>
                                            <h3>{getText("fastlearning")}</h3>
                                            <p>
                                                {getText("fastlearningP")}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="statistika">
                                <div className="row justify-content-md-center">
                                    <div className="col-md-4 col-sm-8">
                                        <div className="card">
                                            <h6>{getText("doneprojects")}</h6>
                                            <h4>20<span>+</span></h4>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-8">
                                        <div className="card">
                                            <h6>{getText("clients")}</h6>
                                            <h4>30<span>+</span></h4>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-8">
                                        <div className="card">
                                            <h6>{getText("meetings")}</h6>
                                            <h4>35<span>+</span></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Footer />
                        </div>
                    </div>
            }
        </>
    )
}

export default ProfilePage