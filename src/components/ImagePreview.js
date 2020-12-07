import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

export default function ImagePreview({ image }) {


    if (image.hide) {
        return (
            <StaticDiv>
                <Image
                    src={image.src}
                 />
            </StaticDiv>
        )
    } else {
        return (
            <Div>
                <TextCon className="text">
                    <h5 style={{color: "#F7F7F7", paddingBottom: "2.5%"}}>{image.title}</h5>
                    <p style={{color: "#5390D9", width: "75%"}}>{image.tech}</p>
                </TextCon>
                <Image src={image.src} />
                <ButtonCon className="button">
                    <Button 
                        details={{name: "SHOW DETAILS", modal: image.modal, submit: image.submit, setModal: image.setModal}} 
                    />
                </ButtonCon>
            </Div>
        )
    }
}

const Div = styled.div`
    position: relative;
    width: 33%;
    height: 55.75%;
    transition: 0.3s ease;
    :hover > img {
        opacity: 0.1;
    }
    :hover > div.button {
        opacity: 100;
        bottom: 15%;
    }
    :hover > div.text {
        opacity: 100;
        top: 15%;
    }
`;

const Image = styled.img`
    width: 97.5%;
    height: 97.5%;
    transition: 0.5s ease;
`;

const TextCon = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    top: 0px;
    opacity: 0;
    right: 0;
    position: absolute;
    width: 100%;
    height: auto;
    background-position: right bottom;
    transition: 0.5s ease;
`;
const ButtonCon = styled.div`
    bottom: 0;
    opacity: 0;
    right: 0;
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: auto;
    transition: 0.5s ease;
`;

const StaticDiv = styled.div`
    width: 22.5em;
    height: 17.5em;
`;