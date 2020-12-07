import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

import styled from "styled-components";
import NavItem from "./NavItem";


function NavBar() {
    const location = useLocation();
    const [focused, setFocused] = useState(location.pathname);

    return (
        <Nav>
            <NavCon>
                <NavItem details={{link: "home", name: "HOME", focused: focused, setFocused: setFocused}} />
                <NavItem details={{link: "about", name: "ABOUT", focused: focused, setFocused: setFocused}} />
                <NavItem details={{link: "projects", name: "PROJECTS", focused: focused, setFocused: setFocused}} />
                <NavItem details={{link: "contact", name: "CONTACT", focused: focused, setFocused: setFocused}} />
            </NavCon>
        </Nav>
    );
}

const Nav = styled.div`
    position: absolute;
    position: sticky;
    left: 0;
    top: 22%;
    width: 15rem;
    height: 30rem;
    z-index: 1000000;
    display: flex;
    flex-direction: column;
    border-right: 1px solid;
    border-color: #525456;
    justify-content: flex-start;
`;

const NavCon = styled.div`
    height: 100%;
    width: 100%;
    min-width: 12.5em;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export default NavBar;