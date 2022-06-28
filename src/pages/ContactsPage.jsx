import { faApple, faFacebookF, faGithub, faInstagram, faLinkedinIn, faTelegramPlane, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'


// import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getText } from '../locales';


const ContactsPage = () => {
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
          <div className='ContactsPage'>
            <div className="ContactsPageLeft position-relative">
              <div className="mask"></div>
              <div className="info">
                <h1>{getText("kon")}<span>{getText("t")}</span>{getText("akti")}</h1>
              </div>
            </div>
            <div className="ContactsPageRight">
              <Navbar />

              <div className="row">
                <div className="col-12">
                  <h2 className="small-heading">{getText("sayhello")}</h2>

                  


                  <form action="" className="contact-form">
                    <div className="position-relative wrap">
                      <input type="text" className='form-control' placeholder=' ' id="name" />
                      <label className='contact-label'>{getText("contactName")}<span>*</span></label>
                    </div>
                    <div className="position-relative wrap">
                      <input type="tel" className='form-control' placeholder=' ' id="tel" />
                      <label className='contact-label'>{getText("phoneNum")}<span>*</span></label>
                    </div>
                    <div className="position-relative wrap">
                      <textarea className='form-control' placeholder=' ' id="message"></textarea>
                      <label className='contact-label'>{getText("contactMsg")}<span>*</span></label>
                    </div>
                    <button className=" btn send-btn">
                    {getText("send")}
                    </button>
                  </form>





                  {/* <div className="kubik-rubik">

                    <div id='container'>
                      <div id='box-area'>
                        <div id="box-front" className='box'>
                          <div className="grid-container bg-front">
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                          </div>
                        </div>
                        <div id="box-back" className='box'>
                          <div className="grid-container bg-back">
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                          </div>
                        </div>
                        <div id="box-right" className='box'>
                          <div className="grid-container bg-right">
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                          </div>
                        </div>
                        <div id="box-left" className='box'>
                          <div className="grid-container bg-left">
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                          </div>
                        </div>
                        <div id="box-top" className='box'>
                          <div className="grid-container bg-top">
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                          </div>
                        </div>
                        <div id="box-bottom" className='box'>
                          <div className="grid-container bg-bottom">
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                            <div className="grid-item"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}






                  <div className="contact-info">
                    <h2 className="small-heading">{getText("contactInfo")}</h2>
                    <div className="row">
                      <div className="col-md-4 col-6">
                        <div className="bord">
                          <a href="tel:+998999992727">
                            <div className="icon">
                              <FontAwesomeIcon className='phone-icon' icon={faPhone}></FontAwesomeIcon>
                            </div>
                            <p>{getText("call")}</p>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-4 col-6">
                        <div className="bord">
                          <a href="mailto:abdulmukxtarovm@gmail.com">
                            <div className="icon">
                              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                            </div>
                            <p>{getText("email")}</p>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-4 col-6">
                        <div className="bord">
                          <a href="https://t.me/abdulmukhtarov_m">
                            <div className="icon">
                              <FontAwesomeIcon icon={faTelegramPlane}></FontAwesomeIcon>
                            </div>
                            <p>{getText("tg")}</p>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-4 col-6">
                        <div className="bord">
                          <a href="https://instagram.com/abdulmukhtarov_m/">
                            <div className="icon">
                              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                            </div>
                            <p>
                              {getText("ig")}
                            </p>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-4 col-6">
                        <div className="bord">
                          <a href="https://www.facebook.com/abdulmukhtarovm">
                            <div className="icon">
                              <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                            </div>
                            <p>
                              {getText("fb")}
                            </p>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-4 col-6">
                        <div className="bord">
                          <a href="https://twitter.com/abdulmukhtarovm">
                            <div className="icon">
                              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                            </div>
                            <p>
                              {getText("tw")}
                            </p>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-4 col-6">
                        <div className="bord">
                          <a href="https://github.com/abdulmukhtarovm">
                            <div className="icon">
                              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                            </div>
                            <p>
                              {getText("gh")}
                            </p>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-4 col-6">
                        <div className="bord">
                          <a href="www.linkedin.com/in/abdulmukhtarovm">
                            <div className="icon">
                              <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                            </div>
                            <p>
                              {getText("li")}
                            </p>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-4 col-6">
                        <div className="bord">
                          <a href="abdulmukhtarov@icloud.com">
                            <div className="icon">
                              <FontAwesomeIcon icon={faApple}></FontAwesomeIcon>
                            </div>
                            <p>
                              {getText("ic")}
                            </p>
                          </a>
                        </div>
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

export default ContactsPage