import React, {} from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import ButtonStale from "../components/ButtonStale";

export default function Footer() {
    return (
        <FooterCon id="contact">
            <MessageCon>
                <MessageHeader>
                    <h2>CONTACT ME</h2>
                </MessageHeader>
                <MessageForm>
                    <MessageInput
                        placeholder="Name"
                    />
                    <MessageInput
                        style={{marginBottom: "9%"}}
                        placeholder="Email"
                    />
                    <MessageArea
                        placeholder="Enter Your Message"
                    />
                    <ButtonStale details={{name: "SUBMIT"}} />
                </MessageForm>
            </MessageCon>
            <FooterBox>
                <IconBox>
                    <IconCon 
                        href="https://www.facebook.com/john.nguy.9"
                    >
                        <FontAwesomeIcon
                            className="icons"
                            style={{color: "#000000", height: "25px", width: "25px"}}
                            icon={faFacebookF} 
                        />
                    </IconCon>
                    <IconCon
                        href="https://github.com/jnguy11"
                    >
                        <FontAwesomeIcon
                            className="icons"
                            style={{color: "#000000", height: "25px", width: "25px"}}
                            icon={faGithub} 
                        />
                    </IconCon>
                    <IconCon 
                        href="https://www.linkedin.com/in/fullstackjohnnguy/"
                    >
                        <FontAwesomeIcon
                            className="icons"
                            style={{color: "#000000", height: "25px", width: "25px"}}
                            icon={faLinkedinIn} 
                        />
                    </IconCon>
                </IconBox>
                <FooterNote>
                    <p style={{fontSize: "14px"}}>JOHN NGUY <p style={{display: "inline", color: "#efa147", fontSize: "14px"}}>2020</p></p>
                </FooterNote>
            </FooterBox>
        </FooterCon>
    )
}

const FooterNote = styled.div`
    height: auto;
    display; flex;
    justify-content: center;
    align-items: center;
`;

const IconCon = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3em;
    width: 3em;
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

const FooterBox = styled.div`
    height: 25%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
const IconBox = styled.div`
    width: 12.5%;
    height: 70%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`;

const MessageForm = styled.form`
    height: 60%;
    display: flex;
    flex-direction: column;
    width: 60%;
`;

const MessageArea = styled.textarea`
    height: 45%;
    max-height: 45%;
    overflow-y: scroll;
    width: 100%;
    background-color: black;
    border-radius: 0.4em;
    margin-bottom: 5%;
`;
const MessageInput = styled.input`
    width: 100%;
    height: 10%;
    border: 0px solid;
    border-bottom: 1px solid #525456;
    background-color: black;
    margin-bottom: 5%;
`;

const MessageHeader = styled.div`
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FooterCon = styled.div`
    margin-top: 25em;
    height: 42.5em;
    border-top: 1px solid #525456;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`;

const MessageCon = styled.div`
    height: 75%;
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;