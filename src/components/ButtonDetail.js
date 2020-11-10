import React from "react";
import styled from "styled-components";

export default function ButtonDetail() {
    return (
        <>
            <TitleCon>
                <h4 style={{height: "3.5rem"}}>BUTTONS</h4>
                <p style={{lineHeight: "1.75"}}>Only one button type will be used throughout the portfolio. The following is how the button should appear and
                    function. </p>
            </TitleCon>
            <TitleDim>
                <h5 style={{height: "2.5rem"}}>BUTTON DIMENSIONS</h5>
                <div style={{display: "flex", flexDirection: "row", width: "60%", justifyContent: "space-between"}}>
                    <div>
                        <Div>
                            <BoldP>width: </BoldP>
                            <P>8.5em / 136px</P>
                        </Div>
                        <Div>
                            <BoldP>height: </BoldP>
                            <P>2.5em / 40px</P>
                        </Div>
                    </div>
                    <div>
                        <Div>
                            <BoldP>border: </BoldP>
                            <P>0.15em solid</P>
                        </Div>
                        <Div>
                            <BoldP>border-colour:</BoldP>
                            <p style={{textIndent: "0.25em", color: "#5390D9"}}> #5390D9</p>
                        </Div>
                    </div>
                </div>
            </TitleDim>

            <Title>
                <h5 style={{height: "2.5rem"}}>BUTTON COLOURS</h5>
            </Title>
            <ButtonCon>
                <ButtonType>
                    <Div>
                        <BoldP>background-colour:</BoldP>
                        <P>#000000</P>
                    </Div>
                    <div style={{display: "flex", flexDirection: "row", marginBottom: "1.5em"}}>
                        <BoldP >colour:</BoldP>
                        <p style={{textIndent: "0.25em", color: "#5390D9"}}> #5390D9</p>
                    </div>

                    <UnfocusedButton>NORMAL</UnfocusedButton>
                </ButtonType>

                <ButtonType>
                    <Div>
                        <BoldP>background-colour:</BoldP>
                        <p style={{textIndent: "0.25em", color: "#5390D9"}}> #5390D9</p>
                    </Div>
                    <div style={{display: "flex", flexDirection: "row", marginBottom: "1.5em"}}>
                        <BoldP >colour:</BoldP>
                        <P>#000000</P>
                    </div>

                    <FocusedButton>HOVERED</FocusedButton>
                </ButtonType>
            </ButtonCon>
            <Title>
                <h5 style={{height: "2.5em"}}>BUTTON EFFECTS</h5>
            </Title>
            <ButtonCon>
                <ButtonHover>
                    <Div>
                        <BoldP>background:</BoldP>
                        <P>linear-gradient(to right, #5390D9 50%, #000000 50%)</P>
                    </Div>
                    <div style={{display: "flex", flexDirection: "row", marginBottom: "1.5em"}}>
                        <BoldP >transition:</BoldP>
                        <P>all 0.3s ease-out</P>
                    </div>
                    <Button>MOUSE OVER !</Button>
                </ButtonHover>
            </ButtonCon>
        </>
    )
}

const TitleDim = styled.div`
    height: 7.5rem;
    width: 75%;
`;
const Title = styled.div`
    height: 2.5rem;
    width: 75%;
`;

const Div = styled.div`
    display: flex;
    flex-direction: row;
`;
const BoldP = styled.p`
    font-weight: 400;
`;

const P = styled.p`
    text-indent: 0.25em;
`;

const TitleCon = styled.div`
    height: 9rem;
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const ButtonCon = styled.div`
    height: 9rem;
    width: 55%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const ButtonType = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const ButtonHover = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const UnfocusedButton = styled.button`
    width: 8.5rem;
    height: 2.5rem;
    background-color: #000000;
    color: #5390D9;
    border: 0.15rem solid;
    border-color: #5390D9;
    :hover {
        cursor: pointer;
    };
`;

const FocusedButton = styled.button`
    width: 8.5rem;
    height: 2.5rem;
    background-color: #5390D9;
    color: #000000;
    border: 0.15rem solid;
    border-color: #5390D9;
    :hover {
        cursor: pointer;
    };
`;

const Button = styled.button`
    width: 8.5rem;
    height: 2.5rem;
    background-color: #000000;
    color: #5390D9;
    border: 2px solid;
    border-color: #5390D9;
    background: linear-gradient(to right, #5390D9 50%, #000000 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.4s ease-out;
    :hover {
        background-position: left bottom;
        cursor: pointer;
        color: #000000;
    };
`;