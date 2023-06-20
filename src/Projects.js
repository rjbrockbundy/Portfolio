import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Particles from "react-particles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-free/css/all.css';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ImageGallery from 'react-image-gallery';
import { redirect } from 'react-router-dom';

import './App.css'
const StuffioWebsite = [
    {
        src: `${process.env.PUBLIC_URL}/StuffioWebsite/1.PNG`,
    },
    {
        src: `${process.env.PUBLIC_URL}/StuffioWebsite/2.PNG`,
    },
    {
        src: `${process.env.PUBLIC_URL}/StuffioWebsite/3.PNG`,
    },
    {
        src: `${process.env.PUBLIC_URL}/StuffioWebsite/4.PNG`,
    },
    {
        src: `${process.env.PUBLIC_URL}/StuffioWebsite/5.PNG`,
    },
    {
        src: `${process.env.PUBLIC_URL}/StuffioWebsite/6.PNG`,
    },
    {
        src: `${process.env.PUBLIC_URL}/StuffioWebsite/7.PNG`,
    },
    {
        src: `${process.env.PUBLIC_URL}/StuffioWebsite/8.PNG`,
    },
    {
        src: `${process.env.PUBLIC_URL}/StuffioWebsite/9.PNG`,
    },
    {
        src: `${process.env.PUBLIC_URL}/StuffioWebsite/10.PNG`,
    },
    {
        src: `${process.env.PUBLIC_URL}/StuffioWebsite/11.PNG`,
    },
    {
        src: `${process.env.PUBLIC_URL}/StuffioWebsite/12.PNG`,
    },
    {
        src: `${process.env.PUBLIC_URL}/StuffioWebsite/1.PNG`,
    },
    {
        src: `${process.env.PUBLIC_URL}/StuffioWebsite/13.PNG`,
    },
    {
        src: `${process.env.PUBLIC_URL}/StuffioWebsite/14.PNG`,
    },
    {
        src: `${process.env.PUBLIC_URL}/StuffioWebsite/15.PNG`,
    },
    {
        src: `${process.env.PUBLIC_URL}/StuffioWebsite/16.PNG`,
    },
]

const StuffioiOS = [
    {
        src: `${process.env.PUBLIC_URL}/StuffioiOS/1.PNG`,
    },
    {
        src: `${process.env.PUBLIC_URL}/StuffioiOS/2.PNG`,
    },
    {
        src: `${process.env.PUBLIC_URL}/StuffioiOS/3.PNG`,
    },
    {
        src: `${process.env.PUBLIC_URL}/StuffioiOS/4.PNG`,
    },
    {
        src: `${process.env.PUBLIC_URL}/StuffioiOS/5.PNG`,
    },
    {
        src: `${process.env.PUBLIC_URL}/StuffioiOS/6.PNG`,
    },
    {
        src: `${process.env.PUBLIC_URL}/StuffioiOS/7.PNG`,
    },
    {
        src: `${process.env.PUBLIC_URL}/StuffioiOS/8.PNG`,
    },
    {
        src: `${process.env.PUBLIC_URL}/StuffioiOS/9.PNG`,
    },
    {
        src: `${process.env.PUBLIC_URL}/StuffioiOS/10.PNG`,
    },
]


function Project() {
    const [stuffiowebsitephotoshow, setstuffiowebsite] = useState(null);
    const [toggle, setToggle] = React.useState(false);
    const [toggleiOS, setToggleiOS] = React.useState(false);

    return (
        <Row style={{ minHeight: '100vh', marginBottom: '10vh' }}>
            <div className='' id="projects" >
                <Row style={{ zIndex: '10', textAlign: 'center' }}>
                    <h2 className='about_text underline-projects' >Projects</h2>


                </Row>
                <Row style={{ zIndex: '10', textAlign: 'center', minHeight: '50vh' }}>
                    <Col md={1} />
                    <Col style={{
                        zIndex: 3,
                    }} md={5}>
                        <img src={`${process.env.PUBLIC_URL}/1.png`} className='market-algo' />

                    </Col>
                    <Col style={{
                        zIndex: 3,
                    }} md={5}>
                        <Row className="project-text-right">
                            <h2 style={{ fontWeight: "600" }}   >
                                Market Algorithm Dashboard
                            </h2>
                        </Row>
                        <Row className="project-text-right">
                            Desktop application built to view a quant firm's algorithm performance dynamically overlayed onto historical market data. 
                            Built using React, Tauri and Python
                        </Row>
                        &nbsp;
                        <Row className="project-text-right">
                            Contact me below to view a demo
                        </Row>
                    </Col>
                    <Col md={1} />


                </Row>
                <Row style={{ zIndex: '10', textAlign: 'center', minHeight: '50vh' }}>
                    <Lightbox
                        open={toggle}
                        close={() => setToggle(false)}
                        slides={StuffioWebsite}
                    />

                    <Col md={1} />
                    <Col style={{
                        zIndex: 3,
                    }} md={5}>
                        <Row className="project-text">
                            <h2 style={{ fontWeight: "600" }}>
                                Stuff.io Website
                            </h2>
                        </Row>
                        <Row className="project-text">
                            Full stack website to buy/sell and track items using a blockchain.
                            Built with React, DjangoREST, postgresDB and Hyperledger Fabric.

                        </Row>
                        <button onClick={() => { setToggle(true) }} className='project-button' >See More</button>
                    </Col>
                    <Col style={{
                        zIndex: 3,
                    }} md={5}>
                        <img src={`${process.env.PUBLIC_URL}/StuffioWebsite/1.PNG`} className='stuffio-website' onClick={() => { setToggle(true) }} />
                    </Col>
                    <Col md={1} />
                </Row>
                <Row style={{ zIndex: '10', textAlign: 'center', minHeight: '50vh' }}>
                    <Lightbox
                        open={toggleiOS}
                        close={() => setToggleiOS(false)}
                        slides={StuffioiOS}
                        styles={{ zIndex: 9999 }}
                    />
                    <Col md={1} />
                    <Col style={{
                        zIndex: 3,
                    }} md={5}>
                        <img src={`${process.env.PUBLIC_URL}/StuffioiOS/2.PNG`} style={{ maxWidth: "100%", maxHeight: '50vh' }} className='stuffio-ios' onClick={() => setToggleiOS(true)} />

                    </Col>
                    <Col style={{
                        zIndex: 3,
                    }} md={5}>
                        <Row className="project-text-right">
                            <h2 style={{ fontWeight: "600" }}>
                                Stuff.io iOS App
                            </h2>
                        </Row>
                        <Row className="project-text-right">
                            iOS app component for the Stuff.io website.  Built with Swift.
                        </Row>

                        <button onClick={() => { setToggleiOS(true) }} className='project-button' >See More</button>

                    </Col>
                    <Col md={1} />

                </Row>
                <Row style={{ zIndex: '10', textAlign: 'center', minHeight: '50vh', marginTop: '10vh' }}>
                    <Col md={1} />
                    <Col style={{
                        zIndex: 3, minHeight: ''
                    }} md={5} >
                        <Row className="project-text">
                            <h2 style={{ fontWeight: "600" }}>
                                Smash News
                            </h2>
                        </Row>
                        <Row className="project-text">
                            Full stack news and user forum to discuss all things competitve Super Smash Bros.
                            Built with React, DjangoREST and mongoDB
                        </Row>
                        <button className='project-github' onClick={() => { window.open('https://github.com/rjbrockbundy/SmashNews', '_blank'); }}>View Github</button>
                    </Col>
                    <Col style={{
                        zIndex: 3,
                    }} md={5}>
                        <img src={`${process.env.PUBLIC_URL}/2.png`} className='market-algo' />

                    </Col>
                    <Col md={1} />
                </Row>
            </div >
            
        </Row >
    )
}

export default Project;