import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavLink } from 'react-bootstrap';

import './Toolbar.css';

function Toolbar() {
    const [activeComponent, setActiveComponent] = useState('#');
    const [clickedComponent, setClickedComponent] = useState('#');

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById('about');
            const projectsSection = document.getElementById('projects');
            const contactSection = document.getElementById('contact');

            const scrollPosition = window.scrollY;

            if (scrollPosition >= aboutSection.offsetTop && scrollPosition < projectsSection.offsetTop) {
                setActiveComponent('about');
                setClickedComponent('about');
            } else if (scrollPosition >= projectsSection.offsetTop && scrollPosition < contactSection.offsetTop) {
                setActiveComponent('projects');
                setClickedComponent('projects');

            } else if (scrollPosition >= contactSection.offsetTop) {
                setActiveComponent('contact');
                setClickedComponent('contact');

            } else if (scrollPosition < aboutSection.offsetTop) {
                setActiveComponent('home');
                setClickedComponent('home');

            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavLinkClick = (component) => {
        setClickedComponent(component);
        setActiveComponent(component);
    };

    const getNavLinkClassName = (component) => {
        return activeComponent === component ? 'nav-text active' : 'nav-text';
    };


    return (
        <Navbar collapseOnSelect expand="sm" sticky="top" className="toolbar-pos" bg="dark" variant="dark">
            <Navbar.Brand href="#" className="nav-text">
                Home
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <NavLink
                        href="#about"
                        className={getNavLinkClassName('about')}
                        onClick={() => handleNavLinkClick('about')}
                    >
                        About
                    </NavLink>
                    <NavLink
                        href="#projects"
                        className={getNavLinkClassName('projects')}
                        onClick={() => handleNavLinkClick('projects')}
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        href="#contact"
                        className={getNavLinkClassName('contact')}
                        onClick={() => handleNavLinkClick('contact')}
                    >
                        Contact
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Toolbar;
