import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import styled from "styled-components";
import NavItem from "./NavItem";


function NavBar() {
    const location = useLocation();
    const [focused, setFocused] = useState(location.pathname);

    return (
        <Nav>
            <NavCon>
                <NavItem details={{link: "/", name: "LOGO", focused: focused, setFocused: setFocused}} />
                <NavItem details={{link: "/colour", name: "COLOUR PALETTE", focused: focused, setFocused: setFocused}} />
                <NavItem details={{link: "/typography", name: "TYPOGRAPHY", focused: focused, setFocused: setFocused}} />
                <NavItem details={{link: "/imagery", name: "IMAGERY & ICONS", focused: focused, setFocused: setFocused}} />
                <NavItem details={{link: "/mockup", name: "MOCKUP", focused: focused, setFocused: setFocused}} />
            </NavCon>
        </Nav>
    );
}

const Nav = styled.div`
    min-width: 15rem;
    height: 30rem;
    background-color: black;
    display: flex;
    flex-direction: column;
    border-right: 1px solid;
    border-color: #525456;
    justify-content: flex-end;
`;

const NavCon = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export default NavBar;