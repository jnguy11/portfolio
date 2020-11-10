import React, {} from "react";
import styled from "styled-components";
import ListItem from "../components/ListItem";
import FontfaceCon from "../components/FontfaceCon";

function Typography() {
    return (
        <>
            <Container>
                <BodyCon>
                <Body>
                    <HeaderCon>
                        <h3>TYPOGRAPHY</h3>
                    </HeaderCon>
                    <HeaderBody>Dosis sans-serif at regular/medium will be used for headers and interactive elements. The font has a futuristic, tech quality that makes it
                        great for the industry I will be going into. Dosis will be paired with Exo sans-serif for all other text due to the same qualities that this 
                        font shares with Dosis.
                    </HeaderBody>
                    <Spacer />

                    <TitleCon>
                        <h4>FONTFACES</h4>
                    </TitleCon>
                    <Fontfaces>
                        <FontfaceCon details={{fontName: "Dosis sans-serif", fontFamily: "Dosis, sans-serif"}} />
                        <FontfaceCon details={{fontName: "Exo sans-serif", fontFamily: "Exo, sans-serif"}} />
                    </Fontfaces>
                    <Spacer />
                    
                    <TitleCon>
                        <h4>FONT HIERARCHY</h4>
                    </TitleCon>

                    <HierTitle>
                        <p style={{width: "28%"}}>Element</p>
                        <p style={{width: "16%"}}>Size</p>
                        <p style={{width: "36%"}}>Font Style</p>
                        <p style={{width: "20%"}}>Colour</p>
                    </HierTitle>
                    <ListItem 
                        details={{
                            header: <h1>HEADER 1</h1>,
                            size: "44px",
                            font: "Dosis sans-serif - Regular / 400",
                            color: "#F7F7F7"
                        }}
                    />
                    <ListItem 
                        details={{
                            header: <h2>HEADER 2</h2>,
                            size: "36px",
                            font: "Dosis sans-serif - Regular / 400",
                            color: "#F7F7F7"
                        }}
                    />    
                    <ListItem 
                        details={{
                            header: <h3>HEADER 3</h3>,
                            size: "28px",
                            font: "Dosis sans-serif - Regular / 400",
                            color: "#F7F7F7"
                        }}
                    />    
                    <ListItem 
                        details={{
                            header: <h4>HEADER 4</h4>,
                            size: "22px",
                            font: "Dosis sans-serif - Bold / 500",
                            color: "#F7F7F7"
                        }}
                    /> 
                    <ListItem 
                        details={{
                            header: <h5>HEADER 5</h5>,
                            size: "18px",
                            font: "Dosis sans-serif - Regular / 400",
                            color: "#F7F7F7"
                        }}
                    />
                    <ListItem 
                        details={{
                            header: <a>NAVBAR - Normal</a>,
                            size: "18px",
                            font: "Dosis sans-serif - Regular / 400",
                            color: "#F7F7F7"
                        }}
                    />
                    <ListItem 
                        details={{
                            header: <Focus>NAVBAR - Focus / Rollover</Focus>,
                            size: "18px",
                            font: "Dosis sans-serif - Regular / 400",
                            color: "#5390D9"
                        }}
                    />     
                    <ListItem 
                        details={{
                            header: <ButtonFont>BUTTONS & LINKS - Normal</ButtonFont>,
                            size: "16px",
                            font: "Dosis sans-serif - Regular / 400",
                            color: "#5390D9"
                        }}
                    />
                    <ListItem 
                        details={{
                            header: <FocusedButtonFont>BUTTONS & LINKS - Hover</FocusedButtonFont>,
                            size: "16px",
                            font: "Dosis sans-serif - Regular / 400",
                            color: "#F7F7F7"
                        }}
                    />                        
                    <ListItem 
                        details={{
                            header: <p>Paragraph text</p>,
                            size: "16px",
                            font: "Exo sans-serif - Light / 300",
                            color: "#909497"
                        }}
                    />      
                    <ListItem 
                        details={{
                            header: <p style={{fontSize: "14px"}}>Footer Text</p>,
                            size: "14px",
                            font: "Exo sans-serif - Light / 300",
                            color: "#F7F7F7"
                        }}
                    />   
                    <Spacer />

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
    width: 90rem;
    height: auto;
    display: flex;
    flex-direction: column;
`;

const Focus = styled.a`
    color: hsl(213, 64%, 59%);
`;

const Fontfaces = styled.div`
    display: flex;
    flex-direction: row;
    align-items: space-between;
    justify-content: space-between;
    height: 8rem;
    width: 75%;
`;

const HierTitle = styled.div`
    height: 2rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid;
    border-color: #525456;
`;

const ButtonFont = styled.a`
    font-size: 16px; 
    color: hsl(213, 64%, 59%);
`;

const FocusedButtonFont = styled.a`
    font-size: 16px; 
    color: #FFFFFF;
`;
export default Typography;