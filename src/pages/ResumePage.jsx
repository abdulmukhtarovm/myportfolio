import React, { useEffect, useState } from 'react'


import "@fancyapps/ui/dist/fancybox.css";


import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getText } from '../locales';

const ResumePage = () => {
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
                    <div className='ResumePage'>
                        <div className="ResumePageLeft position-relative">
                            <div className="mask"></div>
                            <div className="info">
                                <h1>{getText("re")}<span>{getText("z")}</span>{getText("ume")}</h1>
                            </div>
                        </div>
                        <div className="ResumePageRight">
                            <div className="main-bg">
                                <img src="./img/wall1.png" alt="" />
                            </div>
                            <Navbar />
                            <div className="education row justify-content-center">



                                <div className="text-center">
                                    <h2 className="small-heading">{getText('education')}</h2>
                                </div>
                                <div className="edu-content col-md-10 col-12">
                                    <div className="item">
                                        <div className="bullet ">
                                        </div>
                                        <div className="education-content">
                                            <h3>{getText("school")}</h3>
                                            <p>
                                                {getText('schoolP')}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="bullet ">
                                        </div>
                                        <div className="education-content">
                                            <h3>{getText('proweb')}</h3>
                                            <p>
                                                {getText('prowebP')}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="bullet ">
                                        </div>
                                        <div className="education-content">
                                            <h3>{getText("univer")}</h3>
                                            <p>
                                                {getText("univerP")}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="bullet ">
                                        </div>
                                        <div className="education-content">
                                            <h3>{getText("langs")}</h3>
                                            <p>
                                                {getText("langsP")}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="experience row justify-content-center">
                                <div className="text-center">
                                    <h2 className="small-heading">{getText("dostijeniya")}</h2>
                                </div>
                                <div className="experience-content col-md-10 col-12">
                                    <div className="item">
                                        <div className="bullet ">
                                        </div>
                                        <div className="info">
                                            <h3>{getText("sport")}</h3>
                                            <p>
                                                {getText("sportP1")} <br />
                                                {getText("sportP2")} <br />
                                                {getText("sportP3")}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="bullet ">
                                        </div>
                                        <div className="info">
                                            <h3>{getText("znaniy")}</h3>
                                            <p>
                                                {getText("znaniyP")}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="bullet ">
                                        </div>
                                        <div className="info">
                                            <h3>{getText("certificates")}</h3>

                                        </div>
                                    </div>
                                </div>
                                <div className="certificates mb-5">
                                    <div className="row">
                                        <div className="col-lg-6 mb-3 mb-lg-0">
                                            <div className="img">
                                                <a href='../img/web.jpg' data-fancybox="gallery">
                                                    <img src='../img/web.jpg' className='w-100' alt="" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="img">
                                                <a href='../img/smm.jpg' data-fancybox="gallery">
                                                    <img src='../img/smm.jpg' className='w-100' alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix">


                                <div className="text-center">
                                    <h2 className="small-heading">{getText("skills")}</h2>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card">
                                            <h6>{getText("photoshop")} 45%</h6>
                                            <div className="progress">
                                                <div className="progress-bar " style={{ width: '45%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <h6>{getText("smm")} 70%</h6>
                                            <div className="progress">
                                                <div className="progress-bar " style={{ width: '70%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <h6>{getText("figma")} 65%</h6>
                                            <div className="progress">
                                                <div className="progress-bar " style={{ width: '65%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <h6>{getText("target")} 55%</h6>
                                            <div className="progress">
                                                <div className="progress-bar " style={{ width: '55%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <h6>{getText("html")} 95%</h6>
                                            <div className="progress">
                                                <div className="progress-bar " style={{ width: '95%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <h6>{getText("copywriting")} 65%</h6>
                                            <div className="progress">
                                                <div className="progress-bar " style={{ width: '65%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <h6>{getText("css")} 88%</h6>
                                            <div className="progress">
                                                <div className="progress-bar " style={{ width: '88%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <h6>{getText("react")} 55%</h6>
                                            <div className="progress">
                                                <div className="progress-bar " style={{ width: '55%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <h6>{getText("js")} 65%</h6>
                                            <div className="progress">
                                                <div className="progress-bar " style={{ width: '65%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <h6>{getText("otherlib")} 45%</h6>
                                            <div className="progress">
                                                <div className="progress-bar " style={{ width: '45%' }}></div>
                                            </div>
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

export default ResumePage