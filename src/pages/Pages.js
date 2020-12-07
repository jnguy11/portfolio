import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import About from "./About";
import Projects from './Projects';

export default function Pages() {

    return (
        <Content>
            <About />
            <Projects />
        </Content>
    )
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
`;