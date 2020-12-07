import React, {} from "react";
import styled from "styled-components";

export function HeaderSub({ details }) {
    return (
        <Header>
            <h3>{details.name}</h3>
        </Header>
    )
}

const Header = styled.div`
    padding-top: 6em;
    height: auto;
    padding-bottom: 3em;
`;