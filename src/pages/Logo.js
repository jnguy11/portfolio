import React, {} from "react";
import styled from "styled-components";
import Header from "../components/Header";
import LogoComp from "../components/LogoComp";

function Logo() {
    return (
        <>
            <Container>
                <BodyCon>
                <Body>
                    <HeaderCon>
                        <h3>LOGO</h3>
                    </HeaderCon>
                    <HeaderBody>I decided to keep the logo relatively simple in design by encapsulating my initials inside a round shape.
                        The circle is often used to represent unity, harmony, and commitment. As full-stack implies knowledge of both frontend 
                        and backend, and bringing the two together, I wanted the logo to also reflect this notion of harmony. The overall meaning
                        of the logo is complete with the addition of the color blue, as it is usually associated with security, stability, trust,
                        and loyalty.

                    </HeaderBody>
                    <LogoCon>
                        <LogoComp image={{src: "/coloured-logo.png", size: "large"}}/>
                    </LogoCon>
                    <TitleCon>
                        <h4>LOGO FORMAT</h4>
                    </TitleCon>
                    <HeaderBody>
                        Two types of logo format; logo mark and logo mark with logo type.
                    </HeaderBody>
                    <SmallSpacer />

                    <TitleDim style={{height: "5.5rem"}}>
                        <h5 style={{height: "2.5rem"}}>LOGO MARK</h5>
                        <div style={{display: "flex", flexDirection: "row", width: "60%", justifyContent: "space-between"}}>
                            <div>
                                <Div>
                                    <BoldP>width:</BoldP>
                                    <P>4.688em / 75px</P>
                                </Div>
                                <Div>
                                    <BoldP>height: </BoldP>
                                    <P>4.688em / 75px</P>
                                </Div>
                            </div>
                        </div>
                    </TitleDim>
                    <LogoConHead>
                        <LogoComp image={{src: "/coloured-logo.png", size: "small"}}/>
                    </LogoConHead>

                    <SmallSpacer />

                    <TitleDim style={{height: "6rem"}}>
                        <h5 style={{height: "2.5rem"}}>LOGO MARK & TYPE</h5>
                        <div style={{display: "flex", flexDirection: "row", width: "60%", justifyContent: "space-between"}}>
                            <div>
                                <Div>
                                    <BoldP>width:</BoldP>
                                    <P>13em / 208px</P>
                                </Div>
                                <Div>
                                    <BoldP>height: </BoldP>
                                    <P>4.688em / 75px</P>
                                </Div>
                            </div>
                        </div>
                    </TitleDim>
                    <LogoConHead>
                        <LogoComp image={{src: "/coloured-logo.png", size: "small"}}/>
                        <h3 style={{textIndent: "5px"}}>JOHN NGUY</h3>
                    </LogoConHead>

                    <Spacer />

                    <TitleCon>
                        <h4>LOGO COLOUR</h4>
                    </TitleCon>
                    <HeaderBody>
                        Black & white logo and colour logo.
                    </HeaderBody>

                    <SmallSpacer />

                    <TitleDim style={{height: "13rem"}}>
                        <h5 style={{height: "2.5rem"}}>BLACK & WHITE</h5>
                        <div style={{display: "flex", flexDirection: "row", width: "75%", justifyContent: "space-between"}}>
                            <div>
                                <Div>
                                    <BoldP>logo colour:</BoldP>
                                    <P>#000000</P>
                                </Div>
                                <Div>
                                    <BoldP>font colour: </BoldP>
                                    <p style={{textIndent: "0.25em", color: "#F7F7F7"}}> #F7F7F7</p>
                                </Div>
                                <SmallSpacer />
                                <LogoConHead style={{background: "#909497", width: "13em"}}>
                                    <LogoComp image={{src: "/black-logo.png", size: "small"}}/>
                                    <h3 style={{textIndent: "5px"}}>JOHN NGUY</h3>
                                </LogoConHead>
                            </div>
                            <div>
                                <Div>
                                    <BoldP>logo colour:</BoldP>
                                    <p style={{textIndent: "0.25em", color: "#F7F7F7"}}> #F7F7F7</p>
                                    
                                </Div>
                                <Div>
                                    <BoldP>font colour: </BoldP>
                                    <P>#000000</P>
                                </Div>
                                <SmallSpacer />
                                <LogoConHead style={{background: "#909497", width: "13em"}}>
                                    <LogoComp image={{src: "/white-logo.png", size: "small"}}/>
                                    <h3 style={{textIndent: "5px", color: "#000000"}}>JOHN NGUY</h3>
                                </LogoConHead>
                            </div>
                        </div>
                    </TitleDim>
                    <SmallSpacer />
                    <TitleDim style={{height: "15em"}}>
                        <h5 style={{height: "2.5rem"}}>COLOURED</h5>
                        <div style={{display: "flex", flexDirection: "row", width: "75%", justifyContent: "space-between"}}>
                            <div>
                                <Div>
                                    <BoldP>logo colour:</BoldP>
                                    <p style={{textIndent: "0.25em", color: "#5390D9"}}> #5390D9</p>
                                    
                                </Div>
                                <Div>
                                    <BoldP>font colour: </BoldP>
                                    <p style={{textIndent: "0.25em", color: "#F7F7F7"}}> #F7F7F7</p>
                                </Div>
                                <LogoConHead style={{width: "13em"}}>
                                    <LogoComp image={{src: "/coloured-logo.png", size: "small"}}/>
                                    <h3 style={{textIndent: "5px", color: "#F7F7F7"}}>JOHN NGUY</h3>
                                </LogoConHead>
                            </div>
                        </div>
                    </TitleDim>
                </Body>
                </BodyCon>

            </Container>
        </>
    )
}
const Spacer = styled.div`
    height: 5rem;
`;

const HeaderCon = styled.div`
    height: 3.5rem;
`;

const TitleCon = styled.div`
    height: 3.5rem;
    display: flex;
    align-items: flex-start;
`;

const HeaderBody = styled.p`
    line-height: 1.75;
`;

const BodyCon = styled.div`
    display: flex;
    justify-content: center;
    width: 75rem;
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 60rem;
`;
const Container = styled.div`
    padding-top: 2.5%;
    min-width: 90rem;
    height: auto;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const LogoCon = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const LogoConHead = styled.div`
    width: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

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
    height: 1.5rem;
`;
const BoldP = styled.p`
    font-weight: 400;
`;

const P = styled.p`
    text-indent: 0.25em;
`;

export default Logo;