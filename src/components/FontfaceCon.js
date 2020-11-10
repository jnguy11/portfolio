import React, { useState } from "react";
import styled from "styled-components";

function FontfaceCon({ details }) {

    return (
        <FontCon>
            <FontHeaderCon>
                <h5 style={{fontFamily: details.fontFamily}}>{details.fontName}</h5>
            </FontHeaderCon>
            <ExampleCon>
                <p style={{lineHeight: 1.75, fontFamily: details.fontFamily, letterSpacing: 1.25 }}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                <p style={{lineHeight: 1.75, fontFamily: details.fontFamily, letterSpacing: 1.25 }}>abcdefghijklmnopqrstuvwxyz</p>
                <p style={{lineHeight: 1.75, fontFamily: details.fontFamily, letterSpacing: 1.25 }}>0123456789!@#$%^&*()</p>
            </ExampleCon>
        </FontCon>
    )
}

const FontCon = styled.div`
    height: 90%;
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const FontHeaderCon = styled.div`
    height: 20%;
    width: 100%;
    display: flex;
    align-items: flex-start;
`;

const ExampleCon = styled.div`
    display: flex;
    flex-direction: column;

    height: 70%;
    width: 100%;
`;



export default FontfaceCon;