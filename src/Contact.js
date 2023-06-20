import React, { useState, useEffect, useRef } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Particles from "react-particles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-free/css/all.css';
import emailjs from '@emailjs/browser';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import './App.css'

function Contact() {
    const form = useRef();

    const [popup, togglepopup] = useState(false);
    const [btnValue, togglebtnValue] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        const isValid = (e.target[0].value !== '' && e.target[0].value !== null && e.target[0].value.trim().length > 0) && (e.target[1].value !== '' && e.target[1].value !== null && e.target[1].value.trim().length > 0) && (e.target[2].value !== '' && e.target[2].value !== null && e.target[2].value.trim().length > 0)
        if (isValidEmail && isValid) {
            togglepopup(false)
            togglebtnValue(true)

            emailjs.sendForm('service_4jse8ob', 'template_n4gi7qm', form.current, 'M2t8Fkrz6OOSov1H-')
                .then((result) => {
                }, (error) => {
                    console.log(error.text);
                });
        } else {
            { togglepopup(true) }
            { togglebtnValue(false) }
        }
    };


    return (
        <Row style={{ minHeight: '100vh', marginTop: '5vh' }}>
            <Col>
                <div className='' id="contact">
                    <Row style={{ zIndex: 3, textAlign: 'center', height: '100vh' }}>
                        <h2 className='about_text underline-contact'>Contact</h2>
                        <Col md={3} />
                        <Col style={{
                            zIndex: 3,
                        }} md={6}>
                            <form ref={form} onSubmit={sendEmail} className='contact-form'>
                                <input type="text" name="from_name" placeholder="Name" className='text-area' />
                                <input type="email" name="from_email" placeholder="Email" className='text-area' />
                                <textarea name="message" placeholder="Message" className='text-area message-text-area ' />
                                <input type="submit" value="Send" className='contact-button' />
                            </form>
                            {popup && <p style={{ color: 'white', fontWeight: 'bold' }}>
                                ALL FIELDS MUST BE FILLED
                            </p>}
                            {btnValue && <p style={{ color: 'white', fontWeight: 'bold' }}>EMAIL SENT SUCCESSFULLY</p>}

                        </Col>

                        <Col md={3} />

                    </Row>
                </div >
            </Col>
        </Row>
    )
}

export default Contact;