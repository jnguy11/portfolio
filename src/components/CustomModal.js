import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactModal from 'react-modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import ButtonColor from '../components/ButtonColor';
import GalleryImage from '../components/GalleryImage';
export function CustomModal({ details }) {

    const [showModal, setShowModal] = useState(false);
    const [windowSize, setWindowSize] = useState(1440);

    useEffect(() => {
        function handleResize() {
            setWindowSize(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
    }, [])

    const techList = details.tech
    .map(name => (
        <TechBull>
            <Bulletin />
            <h5 style={{fontSize: "16px", color: "#5390D9"}}>{name}</h5>
        </TechBull>
    ))

    function setClose() {
        details.setModal(false);
    }
    return (

        <ReactModal 
            isOpen={details.modal === details.selectedModal ? true : false}
            style={{
                overlay: {
                    zIndex: 100000000000,
                    position: 'fixed',
                    width: "100vw",
                    height: "100vh",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.9)',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                },
                content: {
                    backgroundColor: 'rgba(0,0,0,0)',
                    border: "none",
                    position: "absolute",
                    minwidth: "56%",
                    width: windowSize > 1440 ? "65em" : "60em",

                    minheight: "52%",
                    height: "35em",

                    zIndex: 1000000000000,
                    display: "flex",

                    marginLeft: windowSize > 1440 ? "18.5%" : "13%",
                    marginTop: windowSize > 1440 ? "8%" : "5%",
                }
            }}
            onRequestClose={() => {setClose()}}
            shouldCloseOnOverlayClick={true}
        > 
        <MainDiv>
            <GalleryDiv>
                <GalleryImage image={{src: details.src}}/>
            </GalleryDiv>
            <DetailDiv>
                <TitleDiv>
                    <h3>{details.name}</h3>
                    <h5 style={{color: "#cccccc", textAlign: "center", width: "70%", fontSize: "16px"}}>{details.desc}</h5>
                </TitleDiv>
                <BodyDiv>
                    <BodyTitleTwo>
                        <h5 style={{ fontSize: "18px",}}>PROJECT TYPE: <h5 style={{color: "#5390D9", display: "inline"}}>{details.type}</h5></h5>
                    </BodyTitleTwo>
                    <BodyTitleTwo
                        style={{marginBottom: "2.5%"}}
                    >
                        <h5 style={{ fontSize: "18px",}}>POSITION: <h5 style={{color: "#5390D9", display: "inline"}}>{details.position}</h5></h5>
                    </BodyTitleTwo>
                    <BodyTitle>
                        <h5 style={{ fontSize: "18px",}}>TECHNOLOGIES:</h5>
                    </BodyTitle>
                    <TechDiv>
                        {techList}
                    </TechDiv>
                </BodyDiv>
                <ButtonBox>
                    { details.codeLink ? (
                        <ButtonColor details={{
                            name: "VIEW CODE",
                            link: details.codeLink
                            }} 
                        />
                    ) : null
                    }
                    { details.projectLink ? (
                        <ButtonColor details={{
                            name: "VIEW PROJECT",
                            link: details.projectLink
                            }} 
                        />
                    ) : null
                    }

                </ButtonBox>
            </DetailDiv>
        </MainDiv>

        </ReactModal>

    )
}

const TechBull = styled.div`
    display: flex;
    flex-direction: row;
    width: 45%;
    height: 20%;
    padding-bottom: 2%;
    align-items: center;
`;

const Bulletin = styled.div`
    border-radius: 50%;
    border-color: #FFFFFF;
    background-color: #FFFFFF;
    width: 8px;
    height: 8px;
    margin-right: 5%;
`;

const ModalDiv = styled.div`
    background-color: rgba(0,0,0,0.4);
    position: "fixed";

`;
const MainDiv = styled.div`
    z-index: 100000000;
    width: 100%;
    height: 100%;
    background: rgb(33,30,30), linear-gradient(21deg, rgba(33,30,30,1) 62%, rgba(51,51,51,1) 97%);
    background: linear-gradient(21deg, rgba(33,30,30,1) 62%, rgba(51,51,51,1) 97%);
    display: flex;
    flex-direction: row;

`;

const GalleryDiv = styled.div`
    width: 60%;
    height: 100%;

`;

const DetailDiv = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const TitleDiv = styled.div`
    height: 27.5%;
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    border-bottom: 1px solid;
    border-color: #525456;
`;

const TechDiv = styled.div`
    width: 100%;
    min-height: 30%;
    height: 30%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
`;

const BodyDiv = styled.div`
    height: 60%;
    width: 80%;
    display: flex;
    flex-direction: column;
    
`;
const BodyTitleTwo = styled.div`
    height: 12.5%;
    display: flex;
    align-items: flex-end;
`;

const BodyTitle = styled.div`
    height: 15%;
    margin-bottom: 4%;
    display: flex;
    align-items: flex-end;
`;

const ButtonBox = styled.div`
    height: 10%;
    width: 80%;
    display: flex;
    justify-content: space-between;
`;

const IconCon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 45px;
    background: linear-gradient(to right, #F7F7F7 50%, #5390D9 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.4s ease-out;
    :hover {
        background-position: left bottom;
        cursor: pointer;
        color: #F7F7F7;
    }
`;

{/* <IconCon >
<FontAwesomeIcon
    className="icons"
    style={{color: "#000000", height: "25px", width: "25px"}}
    icon={faGithub} 
/>
</IconCon> */}