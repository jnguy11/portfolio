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
                    <h5 style={{color: "#F7F7F7"}}>{image.title}</h5>
                    <p style={{color: "#5390D9"}}>{image.tech}</p>
                </TextCon>
                <Image src={image.src} />
                <ButtonCon className="button">
                    <Button details={{name: "SHOW DETAILS"}} />
                </ButtonCon>
            </Div>
        )
    }
}

const Div = styled.div`
    position: relative;
    width: 22.5em;
    height: 17.5em;
    transition: 0.3s ease;
    :hover > img {
        opacity: 0.1;
    }
    :hover > div.button {
        opacity: 100;
        bottom: 72px;
    }
    :hover > div.text {
        opacity: 100;
        top: 40px;
    }
`;

const Image = styled.img`
    width: 20em;
    height: 15em;
    transition: 0.5s ease;
`;

const TextCon = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    top: 0px;
    opacity: 0;
    right: 132px;
    position: absolute;
    width: auto;
    height: auto;
    background-position: right bottom;
    transition: 0.5s ease;
`;
const ButtonCon = styled.div`
    bottom: 40px;
    opacity: 0;
    right: 132px;
    position: absolute;
    width: auto;
    height: auto;
    transition: 0.5s ease;
`;

const StaticDiv = styled.div`
    width: 22.5em;
    height: 17.5em;
`;