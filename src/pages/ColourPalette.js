import React, {} from "react";
import styled from "styled-components";
import Color from "../components/Color";
import ButtonDetail from "../components/ButtonDetail";
import LinkDetail from "../components/LinkDetail";


function ColourPalette() {
    return (
        <>
            <Container>
                <BodyCon>
                <Body>
                    <HeaderCon>
                        <h3>COLOUR PALETTE</h3>
                    </HeaderCon>
                    <HeaderBody>
                        Cornflower Blue, #5390D9, will be used to add a splash of colour and contrast to the black, grey, 
                        and white colours found throughout the portfolio. The reason for choosing a blue colour was because it 
                        instils confidence and inspires feelings of trust, loyalty, and responsibility.   
                    </HeaderBody>
                    <Spacer />

                    <ColorCon>
                        <Color color={{type: "000000", rgb: "0, 0, 0", font: "FFFFFF", name: "BLACK", usage: "Background"}} />
                        <Color color={{type: "909497", rgb: "144, 148, 151", font: "000000", name: "ALIMUNIUM", usage: "Paragraph Text"}} />
                        <Color color={{type: "F7F7F7", rgb: "247, 247, 247", font: "000000", name: "WHITE SMOKE", usage: "Headers"}} />
                        <Color color={{type: "5390D9", rgb: "212, 51, 86", font: "000000", name: "CORNFLOWER BLUE", usage: "Nav / Buttons / Links"}} />
                    </ColorCon>
                    <Spacer />
                    <ButtonDetail />
                    <SmallSpacer />
                    <LinkDetail />
                    <Spacer />
                </Body>
                </BodyCon>

            </Container>
        </>
    )
}

const SmallSpacer = styled.div`
    height: 4.5rem;
`;


const Spacer = styled.div`
    height: 7.5rem;
`;

const HeaderCon = styled.div`
    height: 3.5rem;
`;

const ColorCon = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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

    width: 76rem;
    height: auto;
    display: flex;
    flex-direction: column;
`;

export default ColourPalette;