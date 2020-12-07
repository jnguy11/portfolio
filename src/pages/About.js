import React, {} from "react";
import styled from "styled-components";
import { HeaderCon } from '../components/HeaderCon';
import { HeaderBody } from '../components/HeaderBody';
import { HeaderSub } from '../components/HeaderSub';

export default function About() {
    const body = `
        I'm a full-stack developer currently enrolled at BCIT in Vancouver, BC.\
        I really enjoy working on projects where my main focus can be on front-end development using\
        React and React Native, creating and managing databases using MySQL, setting up servers, and 
        creating documentation.
    `;

    const bodyTwo = `I strive to provide great teamwork and communication as I firmly believe these two aspects are the\
    key to success when working in a group.\
    `;

    return (
        <Container id="about">
            <BodyCon>
                <Body>
                    <HeaderCon details={{name: "ABOUT ME"}}/>
                    <HeaderBody details={{body}}/>
                    <div style={{lineHeight: 1.75}}>
                        <BodyCopy>
                            {bodyTwo}
                        </BodyCopy>
                    </div>
                    <HeaderSub details={{name: "SKILLS"}}/>
                    <SkillsContainer>
                        <Skill>
                            <Bulletin />
                            <h4>REACT</h4>
                        </Skill>
                        <Skill>
                            <Bulletin />
                            <h4>JAVASCRIPT</h4>
                        </Skill>
                        <Skill>
                            <Bulletin />
                            <h4>MYSQL</h4>
                        </Skill>
                        <Skill>
                            <Bulletin />
                            <h4>REACT NATIVE</h4>
                        </Skill>
                        <Skill>
                            <Bulletin />
                            <h4>NODEJS</h4>
                        </Skill>
                        <Skill>
                            <Bulletin />
                            <h4>DOCUMENTATION</h4>
                        </Skill>
                    </SkillsContainer>
                </Body>
            </BodyCon>
        </Container>
    )
}

const BodyCopy = styled.p`
    height: auto;
    padding-bottom: 1.5%;
`;

const BodyCon = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: auto;
`;
const Container = styled.div`
    padding-top: 7.5%;
    padding-bottom: 2.5%;
    min-width: 75rem;
    height: auto;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const SkillsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`;

const Skill = styled.div`
    width: 33%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1em;
    margin-bottom: 2em;
`;

const Bulletin = styled.div`
    border-radius: 50%;
    background-color: #5390D9;
    width: 0.75em;
    height: 0.75em;
    margin-right: 1em;
`;