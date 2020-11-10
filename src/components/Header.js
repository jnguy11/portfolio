import React, { useState } from "react";
import styled from "styled-components";
import LogoComp from "./LogoComp";

export default function Header(props) {
    console.log(props.name)
    return (
        <HeaderCon>
            <HeaderTitle>
                <LogoConHead>
                    <LogoComp image={{src: "/coloured-logo.png", size: "small"}}/>
                    <h3 style={{textIndent: "5px"}}>STYLE GUIDE</h3>
                </LogoConHead>
            </HeaderTitle>
        </HeaderCon>
    )
}

const LogoConHead = styled.div`
    width: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    
`;

const HeaderCon = styled.div`   
    width: 100%;
    height: 6rem;
    display: flex;
    flex-direction: row;
    align-items: center;

`;

const HeaderTitle = styled.div`
    width: 15%;
    height: 80%;
    color: white;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;