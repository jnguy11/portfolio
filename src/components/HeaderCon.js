import React, {} from "react";
import styled from "styled-components";

export function HeaderCon({ details }) {
    return (
        <Header>
            <h2>{details.name}</h2>
        </Header>
    )
}

const Header = styled.div`
    height: auto;
    padding-bottom: 2em;
`;