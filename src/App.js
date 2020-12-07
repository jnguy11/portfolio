import React, { createContext, useReducer } from "react";
import { Route, Switch } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Typography from "./pages/Typography";
import ColourPalette from "./pages/ColourPalette";
import Imagery from "./pages/Imagery";
import Mockup from "./pages/Mockup";
import Pages from "./pages/Pages";

import Footer from "./pages/Footer";

import HeroParticles from './pages/HeroParticles';

function App() {
  return (

    <MainContent>
        <GlobalStyles />
        <HeroParticles />
        <BodyCon>
            <Header name={"STYLEGUIDE"}/>
            <Content>
                <NavBar />
                <Pages />
            </Content>
            {/* <Switch>
                <Route path="/" component={Logo} exact/>
                <Route path="/colour" component={ColourPalette} />
                <Route path="/typography"  component={Typography} />
                <Route path="/imagery" component={Imagery} />
                <Route path="/mockup" component={Mockup} />
            </Switch> */}
        </BodyCon>
        <Footer />
    </MainContent>

  );
}

const MainContent = styled.div`
    background-color: black;
    display: flex;
    flex-direction: column;
`;
const Content = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;

`;

const BodyCon = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

export default App;
