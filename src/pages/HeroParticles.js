import React, {} from "react";
import Particles from 'react-particles-js';
import styled from "styled-components";
import HomeButton from '../components/HomeButton';

const Title = styled.div`
    position: absolute;
    height: auto;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const TextCon = styled.div`
    max-width: 40em;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    line-height: 4em;
`;

const ColoredH1 = styled.h1`
    display: inline-block;
    color: #5390D9;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
export default function HeroParticles() {

    return (
        <Container
            id="home"
        >
            <Title>
                <TextCon>
                    <h1 style={{paddingBottom: "2%", cursor: "default"}}>WHO AM I? MY NAME'S <ColoredH1>JOHN NGUY</ColoredH1>. I'M A FULL-STACK WEB DEVELOPER.</h1>
                    <HomeButton 
                        details={{name: "VIEW MY PROJECTS", width: "12.5em", height: "3em"}}
                    />
                </TextCon>
            </Title>
            <Particles 
                className="particles"
                params={{
                    "particles": {
                        "number": {
                        "value": 300,
                        "density": {
                            "enable": true,
                            "value_area": 789.1476416322727
                        }
                        },
                        "color": {
                        "value": "FFFFFF"
                        },
                        "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 1,
                            "color": "#5390D9"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 1,
                            "height": 1
                        }
                        },
                        "opacity": {
                        "value": 0.48927153781200905,
                        "random": false,
                        "anim": {
                            "enable": true,
                            "speed": 0.2,
                            "opacity_min": 0,
                            "sync": false
                        }
                        },
                        "size": {
                        "value": 2,
                        "random": true,
                        "anim": {
                            "enable": true,
                            "speed": 2,
                            "size_min": 0,
                            "sync": false
                        }
                        },
                        "line_linked": {
                        "enable": false,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                        },
                        "move": {
                        "enable": true,
                        "speed": 0.2,
                        "direction": "none",
                        "random": true,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "bubble",
                            "color": {
                                "value": "#efa147"
                            }
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                        },
                        "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                            "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 150,
                            "size": 2,
                            "duration": 3,
                            "opacity": 1,
                            "color": "#efa147",
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                        }
                    },
                    "retina_detect": true
                }}
            />
        </Container>
    )
};