import React, {} from "react";
import styled from "styled-components";
import ImagePreview from "../components/ImagePreview";
import GalleryImage from "../components/GalleryImage";
import LinkTag from "../components/LinkTag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Imagery() {
    return (
        <>
            <Container>
                <BodyCon>
                <Body>
                    <HeaderCon>
                        <h3>IMAGERY & ICONS</h3>
                    </HeaderCon>
                    <HeaderBody>All imagery, graphics, and icons will use straight, non-rounded edges. Subtle drop shadows will be used sparingly
                        on specific imagery and icons.
                    </HeaderBody>
                    <Spacer />

                    <HeaderCon>
                        <h4>IMAGERY</h4>
                    </HeaderCon>
                    <HeaderBody>The two types of imagery will be categorized into smaller project previews and larger gallery images. 
                        All images are obtained from <LinkTag link={{text: "Unsplash", link: "https://unsplash.com/", type: "inline", width: "5em" }} />.
                         </HeaderBody>
                    <SmallSpacer />

                    <TitleDim style={{height: "7rem"}}>
                        <h5 style={{height: "2.5rem"}}>PREVIEW IMAGE DIMENSIONS</h5>
                        <div style={{display: "flex", flexDirection: "row", width: "60%", justifyContent: "space-between"}}>
                            <div>
                                <Div>
                                    <BoldP>width: </BoldP>
                                    <P>22.5em / 360px</P>
                                </Div>
                                <Div>
                                    <BoldP>height: </BoldP>
                                    <P>17.5em / 280px</P>
                                </Div>
                                <Div>
                                    <BoldP>box-shadow: </BoldP>
                                    <P>none</P>
                                </Div>
                            </div>
                        </div>
                    </TitleDim>
                    <TinySpacer />
                    <ImagePreview image={{src: "/domenico-loia-hGV2TfOh0ns-unsplash.jpg", hide: true}}/>
                    <TinySpacer />
                    <TitleDim style={{height: "4.5rem"}}>
                        <h5 style={{height: "2.5rem"}}>PREVIEW IMAGE EFFECTS</h5>
                        <div style={{display: "flex", flexDirection: "row", width: "60%", justifyContent: "space-between"}}>
                            <div>
                                <Div>
                                    <BoldP>transition: </BoldP>
                                    <P>0.5s ease</P>
                                </Div>
                            </div>
                        </div>
                    </TitleDim>
                    <TinySpacer />
                    <ImagePreview image={{src: "/domenico-loia-hGV2TfOh0ns-unsplash.jpg", title: "REACT STYLEGUIDE", tech: "REACT"}}/>
                    <TinySpacer />
                    <TitleDim style={{height: "7.5rem"}}>
                        <h5 style={{height: "2.5rem"}}>GALLERY IMAGE DIMENSIONS</h5>
                        <div style={{display: "flex", flexDirection: "row", width: "60%", justifyContent: "space-between"}}>
                            <div>
                                <Div>
                                    <BoldP>width: </BoldP>
                                    <P>48em / 768px</P>
                                </Div>
                                <Div>
                                    <BoldP>height: </BoldP>
                                    <P>30.875em / 494px</P>
                                </Div>
                                <Div>
                                    <BoldP>box-shadow: </BoldP>
                                    <P>none</P>
                                </Div>
                            </div>
                        </div>
                    </TitleDim>
                    <TinySpacer />
                    <GalleryImage image={{src: "/charles-deluvio-cZr2sgaxy3Q-unsplash.jpg",}}/>
                    <Spacer />
                    <SmallSpacer />

                    <HeaderCon>
                        <h4>ICONS</h4>
                    </HeaderCon>
                    <HeaderBody>Currently, there is no plan to add extra icons other than for social media. Icons follow the same structure throughout the portfolio.
                        Icons are referenced from <LinkTag link={{text: "FontAwesome", link: "https://fontawesome.com/", type: "inline", width: "5em" }} />.
                    </HeaderBody>
                    <SmallSpacer />
                    <TitleDim style={{height: "7.5rem"}}>
                        <h5 style={{height: "2.5rem"}}>ICON DIMENSIONS</h5>
                        <div style={{display: "flex", flexDirection: "row", width: "60%", justifyContent: "space-between"}}>
                            <div>
                                <Div>
                                    <BoldP>width: </BoldP>
                                    <P>2.8125em / 45px</P>
                                </Div>
                                <Div>
                                    <BoldP>height: </BoldP>
                                    <P>2.8125em / 45px</P>
                                </Div>
                                <Div>
                                    <BoldP>background-colour: </BoldP>
                                    <p style={{textIndent: "0.25em", color: "#5390D9"}}> #5390D9</p>
                                </Div>

                            </div>
                        </div>
                    </TitleDim>
                    <TinySpacer />
                    <Icons>
                        <IconCon >
                            <FontAwesomeIcon
                                className="icons"
                                style={{color: "#000000", height: "25px", width: "25px"}}
                                icon={faFacebookF} 
                            />
                        </IconCon>
                        <IconCon >
                            <FontAwesomeIcon
                                className="icons"
                                style={{color: "#000000", height: "25px", width: "25px"}}
                                icon={faGithub} 
                            />
                        </IconCon>
                        <IconCon >
                            <FontAwesomeIcon
                                className="icons"
                                style={{color: "#000000", height: "25px", width: "25px"}}
                                icon={faLinkedinIn} 
                            />
                        </IconCon>
                    </Icons>

                    <Spacer />
                </Body>
                </BodyCon>

            </Container>
        </>
    )
}

const TinySpacer = styled.div`
    height: 0.75em;
`;

const SmallSpacer = styled.div`
    height: 2.25em;
`;

const Spacer = styled.div`
    height: 5rem;
`;

const HeaderCon = styled.div`
    height: 3.5rem;
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
    width: 90rem;
    height: auto;
    display: flex;
    flex-direction: column;
`;

const TitleDim = styled.div`
    height: 9rem;
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

const Icons = styled.div`
    display: flex;
    flex-direction: row;
    width: 20%;
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


export default Imagery;