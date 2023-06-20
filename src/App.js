import React, { useState, useEffect, nagivate } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Toolbar from './Toolbar';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './App.css'
function App() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <div className="App" >
      <Container fluid style={{ height: "100vh", zIndex: 3 }}>
        <Row style={{}}>
          <div
            id="particles-container"
            style={{
              position: 'absolute',
              top: '0%',
              left: '0%',
              transform: 'translate(0%, -0%)',
              width: '100vw', // Adjust the width of the box as needed
              height: '100vh', // Adjust the height of the box as needed
              zIndex: 1,
              background: 'black',
              overflow: 'hidden', // Add overflow property

            }}
          >
            <Particles

              id="tsparticles"
              width="100%"
              height="100%"
              init={particlesInit}
              loaded={particlesLoaded}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
              }}
              options={{
                fpsLimit: 120,
                pauseOnBlur: true,
                pauseOnOutsideViewport: true,
                interactivity: {
                  events: {
                    onClick: {
                      enable: false,
                      mode: 'push',
                    },
                    onHover: {
                      enable: true,
                      mode: ['grab'],
                    },
                    onDiv: {
                      enable: true,
                      mode: 'repulse',
                      selectors: '#repulse-div',

                    },

                    resize: true,
                  },
                  modes: {
                    push: {
                      quantity: 4,
                    },
                    repulse: {
                      distance: 1000,
                      duration: 10,
                      divs: {
                        distance: 1,
                        duration: 1,
                        speed: 5,
                        maxSpeed: 50,
                        shape: {
                          type: 'square'
                        }

                      }
                    },

                    grab: {
                      distance: 125,
                      lineLinked: {
                        opacity: .5,
                      },
                      collisions: true,
                    },
                  },
                },

                particles: {
                  color: {
                    value: ['#0d6efd', '#ff4d5a'],
                    random:true
                  },
                  links: {
                    color: '#0d6efd',
                    distance: 100,
                    enable: true,
                    opacity: 0.3,
                    width: .4,
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
                    value: 150,
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
          <Col />
          <Col>
            <div id="repulse-div" className='welcome-button'>
              <div className="welcome-text" >RJ Brock Bundy</div>
              <div className='welcome-text'>Web Developer</div>
              <AnchorLink href='#about' className='button-59'>See My Work</AnchorLink>
            </div>
          </Col>
          <Col />
        </Row>

      </Container>



    </div>


  );

}
export default App;