import React from "react";
import styled from "styled-components";

export default function LinkTag({ link }) {
    if (link.type) {
        if (link.link !== "#") {
            return (
                <Link 
                    style={{display: "inline-block", width: "fit-content", fontSize: "16px", fontFamily: "Exo, sans-serif", paddingBottom: "0"}} 
                    className="link"
                    href={link.link}
                >
                    {link.text}
                </Link>
            )
        } else {
            return (
                <Link 
                    style={{width: link.width, fontSize: "16px", fontFamily: "Exo, sans-serif", paddingBottom: "2px"}} 
                    className="link"
                >
                    {link.text}
                </Link>
            )
        }
    } else {
        return (
            <Link style={{width: link.width}} className="link">
                {link.text}
                <Arrow className="arrow">></Arrow>
            </Link>
        )
    }
}

const Link = styled.a`
    display: flex;
    flex-direction: row;
    text-align: center;
    color: #5390D9;
    padding-bottom: 5px;
    background: linear-gradient(#F7F7F7, #F7F7F7);
    background-position: 0 100%;
    background-size: 0% 2px;
    background-repeat: no-repeat;
    text-decoration: none;
    transition: 
        background-size 0.3s;
    :hover {
        color: #F7F7F7;
        background-size: 100% 2px;
    }
    :hover > .arrow {
        width: 2.5rem;
        color: #F7F7F7;
    }

`;

const Arrow = styled.h4`
    width: 1.5rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    vertical-align: middle;
    padding-bottom: 5px;
    transition: width 0.3s ease;
    color: #5390D9;
`;