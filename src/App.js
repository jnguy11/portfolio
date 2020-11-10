import React, { createContext, useReducer } from "react";
import { Route, Switch } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Logo from "./pages/Logo";
import Typography from "./pages/Typography";
import ColourPalette from "./pages/ColourPalette";
import Imagery from "./pages/Imagery";
import Mockup from "./pages/Mockup";

function App() {
  return (

    <MainContent>
        <GlobalStyles />
        <Header name={"STYLEGUIDE"}/>
        <BodyCon>
            <NavBar />
            <Switch>
                <Route path="/" component={Logo} exact/>
                <Route path="/colour" component={ColourPalette} />
                <Route path="/typography"  component={Typography} />
                <Route path="/imagery" component={Imagery} />
                <Route path="/mockup" component={Mockup} />
            </Switch>
        </BodyCon>
    </MainContent>

  );
}

const MainContent = styled.div`
    background-color: black;
    display: flex;
    flex-direction: column;
`;

const BodyCon = styled.div`
    display: flex;
    flex-direction: row;
`;

export default App;
