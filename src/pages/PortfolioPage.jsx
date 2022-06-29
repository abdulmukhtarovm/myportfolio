import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import { getText } from '../locales';



const PortfolioPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1400);
    }, []);


    //   const [toggleState, setToggleState] = useState(1);
    //   const toggleTab = (index) => {
    //     setToggleState(index);
    //   }
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
                    <div className='PortfolioPage'>
                        <div className="PortfolioPageLeft position-relative">
                            <div className="mask"></div>
                            <div className="info">
                                <h1>{getText("port")}<span>{getText("f")}</span>{getText("olio")}</h1>
                            </div>
                        </div>
                        <div className="PortfolioPageRight">
                            <Navbar />
                            <div className="main-bg">
                                    <img src="./img/wall1.png" alt="" />
                                </div>
                            <Projects />

                            <Footer />

                        </div>
                    </div>
            }
        </>
    )
}

export default PortfolioPage