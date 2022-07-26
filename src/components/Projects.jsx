import React, { useState } from 'react'


import { TabContent, TabPane, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { getText } from '../locales';
// import { Link } from 'react-router-dom';

const Projects = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className='Project-blog mt-md-5 mt-0'>
            <div className="text-center"><h2 className="small-heading">{getText("portfolio")}</h2></div>
            <div className="projects row">
                <div className="col-12">

                    <NavItem className='d-flex'>
                        <NavLink
                            className={`list-group-item list-group-item-action tab_list-link ` + classnames({ active: activeTab === `1` })}
                            onClick={() => { toggle(`1`) }} >
                            {getText("all")}
                        </NavLink>
                        <NavLink
                            className={`list-group-item list-group-item-action tab_list-link ` + classnames({ active: activeTab === `2` })}
                            onClick={() => { toggle(`2`) }} >
                            {getText("landing")}
                        </NavLink>
                        <NavLink
                            className={`list-group-item list-group-item-action tab_list-link ` + classnames({ active: activeTab === `3` })}
                            onClick={() => { toggle(`3`) }} >
                            {getText("catalog")}
                        </NavLink>
                        <NavLink
                            className={`list-group-item list-group-item-action tab_list-link ` + classnames({ active: activeTab === `4` })}
                            onClick={() => { toggle(`4`) }} >
                            {getText("korporativ")}
                        </NavLink>
                        <NavLink
                            className={`list-group-item list-group-item-action tab_list-link ` + classnames({ active: activeTab === `5` })}
                            onClick={() => { toggle(`5`) }} >
                            {getText("marketpleys")}
                        </NavLink>
                    </NavItem>


                    <div className="tab-content tab-pane fade show active tab" id="nav-tabContent">
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1" className=''>
                                <AnimatePresence>
                                    <motion.div layout>
                                        <div className="all row">
                                            <motion.div className='col-lg-4 col-sm-6' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout>
                                                <div className="cards new">
                                                    <img className='w-100' src="img/tehnoplast.jpg" alt="" />
                                                    <div className="overly">
                                                        <div className="buttons">
                                                            <a target="blank" href="https://tehnoplast.uz/">
                                                                <FontAwesomeIcon icon={faLink} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>

                                            <motion.div className='col-lg-4 col-sm-6' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout>
                                                <div className="cards new">
                                                    <img className='w-100' src="img/moneybek.jpg" alt="" />
                                                    <div className="overly">
                                                        <div className="buttons">
                                                            <a target="blank" href="https://moneybek.uz/">
                                                                <FontAwesomeIcon icon={faLink} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                            <motion.div className='col-lg-4 col-sm-6' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout>
                                                <div className="cards new">
                                                    <img className='w-100' src="img/ideal.jpg" alt="" />
                                                    <div className="overly">
                                                        <div className="buttons">
                                                            <a target="blank" href="https://idealgold.uz/">
                                                                <FontAwesomeIcon icon={faLink} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>

                                            <motion.div className='col-lg-4 col-sm-6' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout>
                                                <div className="cards">
                                                    <img className='w-100' src="img/agrom.jpg" alt="" />
                                                    <div className="overly">
                                                        <div className="buttons">
                                                            <a target="blank" href="https://agrom.uz/">
                                                                <FontAwesomeIcon icon={faLink} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                            <motion.div className='col-lg-4 col-sm-6' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout>
                                                <div className="cards">
                                                    <img className='w-100' src="img/agrifood.png" alt="" />
                                                    <div className="overly">
                                                        <div className="buttons">
                                                            <a target="blank" href="https://agrifood.uz/">
                                                                <FontAwesomeIcon icon={faLink} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                            <motion.div className='col-lg-4 col-sm-6' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout>
                                                <div className="cards">
                                                    <img className='w-100' src="img/basalt.png" alt="" />
                                                    <div className="overly">
                                                        <div className="buttons">
                                                            <a target="blank" href="https://basaltuzb.com/">
                                                                <FontAwesomeIcon icon={faLink} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>

                                            <motion.div className='col-lg-4 col-sm-6' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout>
                                                <div className="cards">
                                                    <img className='w-100' src="img/southgroup.jpg" alt="" />
                                                    <div className="overly">
                                                        <div className="buttons">
                                                            <a target="blank" href="https://southgroup.uz/">
                                                                <FontAwesomeIcon icon={faLink} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                            <motion.div className='col-lg-4 col-sm-6' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout>
                                                <div className="cards">
                                                    <img className='w-100' src="img/mixtechno.jpg" alt="" />
                                                    <div className="overly">
                                                        <div className="buttons">
                                                            <a target="blank" href="https://mix-techno.uz/#/">
                                                                <FontAwesomeIcon icon={faLink} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                            <motion.div className='col-lg-4 col-sm-6' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout>
                                                <div className="cards">
                                                    <img className='w-100' src="img/ekofrukt.jpg" alt="" />
                                                    <div className="overly">
                                                        <div className="buttons">
                                                            <a target="blank" href="https://ekofrukt.uz/">
                                                                <FontAwesomeIcon icon={faLink} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>

                                            <motion.div className='col-lg-4 col-sm-6' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout>
                                                <div className="cards">
                                                    <img className='w-100' src="img/spp.png" alt="" />
                                                    <div className="overly">
                                                        <div className="buttons">
                                                            <a target="blank" href="https://smartpackprint.uz/">
                                                                <FontAwesomeIcon icon={faLink} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>

                                            <motion.div className='col-lg-4 col-sm-6' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout>
                                                <div className="cards">
                                                    <img className='w-100' src="img/xtb.png" alt="" />
                                                    <div className="overly">
                                                        <div className="buttons">
                                                            <a target="blank" href="https://yunusobodtxtb.uz/">
                                                                <FontAwesomeIcon icon={faLink} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                            <motion.div className='col-lg-4 col-sm-6' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout>
                                                <div className="cards">
                                                    <img className='w-100' src="img/baby.png" alt="" />
                                                    <div className="overly">
                                                        <div className="buttons">
                                                            <a target="blank" href="https://babycare-spa.uz/">
                                                                <FontAwesomeIcon icon={faLink} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                            <motion.div className='col-lg-4 col-sm-6' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout>
                                                <div className="cards">
                                                    <img className='w-100' src="img/slb.jpg" alt="" />
                                                    <div className="overly">
                                                        <div className="buttons">
                                                            <a target="blank" href="https://slbgroup.uz/">
                                                                <FontAwesomeIcon icon={faLink} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                            <motion.div className='col-lg-4 col-sm-6' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout>
                                                <div className="cards">
                                                    <img className='w-100' src="img/bahtwoman.jpg" alt="" />
                                                    <div className="overly">
                                                        <div className="buttons">
                                                            <a target="blank" href="https://bahtwoman.uz/">
                                                                <FontAwesomeIcon icon={faLink} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                            <motion.div className='col-lg-4 col-sm-6' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout>
                                                <div className="cards">
                                                    <img className='w-100' src="img/koko.png" alt="" />
                                                    <div className="overly">
                                                        <div className="buttons">
                                                            <a target="blank" href="https://kokoagency.uz/">
                                                                <FontAwesomeIcon icon={faLink} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </TabPane>
                            <TabPane tabId="2" className=''>
                                <AnimatePresence>
                                    <motion.div layout>
                                        <div className="landing row">
                                            <motion.div className='col-lg-4 col-sm-6' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout>
                                                <div className="cards">
                                                    <img className='w-100' src="img/baby.png" alt="" />
                                                    <div className="overly">
                                                        <div className="buttons">
                                                            <a target="blank" href="https://babycare-spa.uz/">
                                                                <FontAwesomeIcon icon={faLink} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                            <motion.div className='col-lg-4 col-sm-6' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout>
                                                <div className="cards new">
                                                    <img className='w-100' src="img/moneybek.jpg" alt="" />
                                                    <div className="overly">
                                                        <div className="buttons">
                                                            <a target="blank" href="https://moneybek.uz/">
                                                                <FontAwesomeIcon icon={faLink} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                            <motion.div className='col-lg-4 col-sm-6' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout>
                                                <div className="cards">
                                                    <img className='w-100' src="img/slb.jpg" alt="" />
                                                    <div className="overly">
                                                        <div className="buttons">
                                                            <a target="blank" href="https://slbgroup.uz/">
                                                                <FontAwesomeIcon icon={faLink} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </TabPane>
                            <TabPane tabId="3" className=''>
                                <AnimatePresence>
                                    <motion.div layout>
                                        <div className="vizitka row">
                                            <motion.div className='col-lg-4 col-sm-6' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout>
                                                <div className="cards">
                                                    <img className='w-100' src="img/agrifood.png" alt="" />
                                                    <div className="overly">
                                                        <div className="buttons">
                                                            <a target="blank" href="https://agrifood.uz/">
                                                                <FontAwesomeIcon icon={faLink} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                            <motion.div className='col-lg-4 col-sm-6' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout>
                                                <div className="cards">
                                                    <img className='w-100' src="img/bahtwoman.jpg" alt="" />
                                                    <div className="overly">
                                                        <div className="buttons">
                                                            <a target="blank" href="https://bahtwoman.uz/">
                                                                <FontAwesomeIcon icon={faLink} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                            <motion.div className='col-lg-4 col-sm-6' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout>
                                                <div className="cards">
                                                    <img className='w-100' src="img/ekofrukt.jpg" alt="" />
                                                    <div className="overly">
                                                        <div className="buttons">
                                                            <a target="blank" href="https://ekofrukt.uz/">
                                                                <FontAwesomeIcon icon={faLink} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </TabPane>
                            <TabPane tabId="4" className=''>
                                <AnimatePresence>
                                    <motion.div layout>
                                        <div className="korporativ row">
                                            <motion.div className='col-lg-4 col-sm-6' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout>
                                                <div className="cards new">
                                                    <img className='w-100' src="img/tehnoplast.jpg" alt="" />
                                                    <div className="overly">
                                                        <div className="buttons">
                                                            <a target="blank" href="https://tehnoplast.uz/">
                                                                <FontAwesomeIcon icon={faLink} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                           
                                            <motion.div className='col-lg-4 col-sm-6' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout>
                                                <div className="cards">
                                                    <img className='w-100' src="img/agrom.jpg" alt="" />
                                                    <div className="overly">
                                                        <div className="buttons">
                                                            <a target="blank" href="https://agrom.uz/">
                                                                <FontAwesomeIcon icon={faLink} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                            <motion.div className='col-lg-4 col-sm-6' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout>
                                                <div className="cards">
                                                    <img className='w-100' src="img/basalt.png" alt="" />
                                                    <div className="overly">
                                                        <div className="buttons">
                                                            <a target="blank" href="https://basaltuzb.com/">
                                                                <FontAwesomeIcon icon={faLink} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>

                                            <motion.div className='col-lg-4 col-sm-6' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout>
                                                <div className="cards">
                                                    <img className='w-100' src="img/southgroup.jpg" alt="" />
                                                    <div className="overly">
                                                        <div className="buttons">
                                                            <a target="blank" href="https://southgroup.uz/">
                                                                <FontAwesomeIcon icon={faLink} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                            <motion.div className='col-lg-4 col-sm-6' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout>
                                                <div className="cards">
                                                    <img className='w-100' src="img/mixtechno.jpg" alt="" />
                                                    <div className="overly">
                                                        <div className="buttons">
                                                            <a target="blank" href="https://mix-techno.uz/#/">
                                                                <FontAwesomeIcon icon={faLink} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                            <motion.div className='col-lg-4 col-sm-6' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout>
                                                <div className="cards">
                                                    <img className='w-100' src="img/spp.png" alt="" />
                                                    <div className="overly">
                                                        <div className="buttons">
                                                            <a target="blank" href="https://smartpackprint.uz/">
                                                                <FontAwesomeIcon icon={faLink} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>

                                            <motion.div className='col-lg-4 col-sm-6' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout>
                                                <div className="cards">
                                                    <img className='w-100' src="img/xtb.png" alt="" />
                                                    <div className="overly">
                                                        <div className="buttons">
                                                            <a target="blank" href="https://yunusobodtxtb.uz/">
                                                                <FontAwesomeIcon icon={faLink} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                            <motion.div className='col-lg-4 col-sm-6' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout>
                                                <div className="cards">
                                                    <img className='w-100' src="img/koko.png" alt="" />
                                                    <div className="overly">
                                                        <div className="buttons">
                                                            <a target="blank" href="https://kokoagency.uz/">
                                                                <FontAwesomeIcon icon={faLink} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </TabPane>
                            <TabPane tabId="5" className=''>
                                <AnimatePresence>
                                    <motion.div layout>
                                        <div className="magazin row">
                                        <motion.div className='col-lg-4 col-sm-6' animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout>
                                                <div className="cards new">
                                                    <img className='w-100' src="img/ideal.jpg" alt="" />
                                                    <div className="overly">
                                                        <div className="buttons">
                                                            <a target="blank" href="https://idealgold.uz/">
                                                                <FontAwesomeIcon icon={faLink} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </TabPane>
                        </TabContent>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects