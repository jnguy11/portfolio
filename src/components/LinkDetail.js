import React from "react";
import styled from "styled-components";
import LinkTag from "./LinkTag";

export default function LinkDetail() {
    return (
        <>
            <TitleCon>
                <h4 style={{height: "3.5rem"}}>LINKS</h4>
                <p style={{lineHeight: "1.75"}}>Links are identified by blue, capitalized text containing an arrow at the end. Links do not contain
                    any text decoration except when hovered.
                </p>
            </TitleCon>
            <TitleDim>
                <h5 style={{height: "2.5rem"}}>LINK COLOURS</h5>
                <div style={{display: "flex", flexDirection: "row", width: "52%", justifyContent: "space-between"}}>
                    <div>
                        <Div>
                            <BoldP>colour:</BoldP>
                            <p style={{textIndent: "0.25em", color: "#5390D9"}}> #5390D9</p>
                        </Div>
                        <a style={{display: "flex", flexDirection: "row"}}>NORMAL STATE 
                        <Arrow style={{color: "#5390D9"}} className="arrow">></Arrow>
                        </a>
                    </div>
                    <div>
                        <Div>
                            <BoldP>colour: </BoldP>
                            <p style={{textIndent: "0.25em", color: "#F7F7F7"}}> #F7F7F7</p>
                        </Div>
                        <HoveredA>
                            HOVER STATE 
                            <Arrow className="arrow">></Arrow>
                        </HoveredA>
                    </div>
                </div>
            </TitleDim>
            <SmallSpacer />
            <TitleDim style={{height: "12em"}}>
                <h5 style={{height: "2.5rem"}}>LINK EFFECTS</h5>
                <div style={{display: "flex", flexDirection: "column", width: "72%", }}>
                    <div>
                        <Div style={{height: "1.5em"}}>
                            <BoldP>background:</BoldP>
                            <P style={{width: "auto", display: "flex", flexDirection: "row"}}>
                                linear-gradient(
                                    <p style={{textIndent: "0.25em", color: "#F7F7F7"}}> #F7F7F7</p>,
                                    <p style={{textIndent: "0.25em", color: "#F7F7F7"}}> #F7F7F7</p> 
                                )
                                </P>
                        </Div>
                        <Div>
                            <BoldP>colour:</BoldP>
                            <p style={{textIndent: "0.25em", color: "#5390D9"}}> #5390D9</p>
                        </Div>
                    </div>

                </div>
                <LinkTag link={{text: "MOUSE OVER", link: "#", width: "7.5em"}} />
                <div style={{height: "1.25em"}} />
                <LinkTag link={{text: "Inline link", link: "#", type: "inline", width: "5em" }} />

            </TitleDim>
        </>
    )
}

const SmallSpacer = styled.div`
    height: 1.75rem;
`;

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
    height: 2.75rem;
`;
const BoldP = styled.p`
    font-weight: 400;
`;

const P = styled.p`
    text-indent: 0.25em;
`;

const TitleCon = styled.div`
    height: 9.5rem;
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const HoveredA = styled.a`
    display: flex;
    flex-direction: row;
    color: #F7F7F7;
    cursor: pointer;
    padding-bottom: 2px !important;
    border-bottom: 2px solid #F7F7F7;
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
    color: #F7F7F7;
`;