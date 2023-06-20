import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Particles from "react-particles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-free/css/all.css';


import './App.css'

function About() {
    return (
        <Row style={{ minHeight: '100vh' }}>
            <div className='' id="about">
                <div style={{
                    position: 'absolute',
                    top: '100vh',
                    left: '0%',
                    height: '100%', // Adjust the height of the box as needed
                    width: '100%',
                    background: 'black',
                    zIndex: 0,
                }}>
                    <Particles

                        id="tsparticles2"
                        width="100%"
                        height="100%"
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                        }}
                        options={{
                            fpsLimit: 120,
                            pauseOnBlur: true,
                            pauseOnOutsideViewport: true,


                            particles: {
                                color: {
                                    value: ['#0d6efd', '#ff4d5a'],
                                    random: true
                                },

                                collisions: {
                                    enable: true,
                                },
                                move: {
                                    direction: 'random',
                                    enable: true,
                                    outModes: {
                                        default: 'bounce',
                                    },
                                    random: true,
                                    speed: 1,
                                    straight: false,
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        area: 800,
                                    },
                                    value: 75,
                                },
                                opacity: {
                                    value: 0.5,
                                    random: true,
                                    animation: {
                                        enable: true,
                                        speed: .2,
                                        minimumValue: 0.1,
                                        sync: false
                                    },
                                },
                                shape: {
                                    type: 'circle',
                                },
                                size: {
                                    value: { min: 1, max: 3 },
                                },
                            },
                            detectRetina: true,
                        }}
                    />
                </div>
                <Row style={{ zIndex: 3, textAlign: 'center' }}>
                    <h2 className='about_text underline'>About</h2>
                    <Col md={1} />
                    <Col style={{
                        zIndex: 3,
                    }} md={5}>
                        <Row>

                            <span className='user-icon-wrapper'>
                                <i className='user-icon fas fa-user' />
                            </span>
                        </Row>
                        <Row>
                            <p className='about-info'>
                                As an avid web developer, I possess extensive experience in React and Django.  I am constantly seeking opportunities to refine my skills and stay at the forefront of industry trends. Beyond coding, I find joy in activities like running, reading, and learning about history. This combination of web development prowess, intellectual curiosity, physical fitness, and competitive drive forms the very essence of who I am, propelling me towards continual growth and personal fulfilment.</p>
                        </Row>
                    </Col>
                    <Col style={{
                        zIndex: 3,
                    }} md={5} className="tools-list">
                        <div className='spacer' />
                        <Row>
                            <Col >
                                <Col>
                                    <div className='tools' >
                                        <img src={`${process.env.PUBLIC_URL}/html.png`} className='tools-img' />
                                        <span style={{ color: "white" }}>HTML</span>
                                    </div>
                                    <div className='tools' >

                                        <img src={`${process.env.PUBLIC_URL}/react.png`} className='tools-img' />

                                        <span style={{ color: "white" }}>REACT</span>
                                    </div>
                                    <div className='tools'>
                                        <img src={`${process.env.PUBLIC_URL}/mongodb.png`} className='tools-img' />

                                        <span style={{ color: "white" }}>MONGODB</span>
                                    </div>
                                </Col>
                            </Col>
                            <Col>
                                <Col>
                                    <div className='tools' >
                                        <img src={`${process.env.PUBLIC_URL}/django.png`} className='tools-img' />

                                        <span style={{ color: "white" }}>DJANGO</span>
                                    </div>
                                    <div className='tools' >
                                        <img src={`${process.env.PUBLIC_URL}/git.png`} className='tools-img' />

                                        <span style={{ color: "white" }}>GIT</span>
                                    </div>
                                    <div className='tools' >
                                        <img src={`${process.env.PUBLIC_URL}/javascript.png`} className='tools-img' />

                                        <span style={{ color: "white" }}>JAVASCRIPT</span>
                                    </div>

                                </Col>
                            </Col>
                            <Col>
                                <Col>
                                    <div className='tools' >
                                        <img src={`${process.env.PUBLIC_URL}/python.png`} className='tools-img' />

                                        <span style={{ color: "white" }}>PYTHON</span>
                                    </div>
                                    <div className='tools' >
                                        <img src={`${process.env.PUBLIC_URL}/nodejs.png`} className='tools-img' />

                                        <span style={{ color: "white" }}>NODE.JS</span>
                                    </div>
                                    <div className='tools' >
                                        <img src={`${process.env.PUBLIC_URL}/php.png`} className='tools-img' />

                                        <span style={{ color: "white" }}>PHP</span>
                                    </div>

                                </Col>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={1} />

                </Row>

            </div >
        </Row>
    )
}

export default About;