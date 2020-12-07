import React, {} from "react";
import styled from "styled-components";

export function HeaderBody({ details }) {
    return (
        <div style={{lineHeight: 1.75}}>
            <Body>
                {details.body}
            </Body>
        </div>

    )
}

const Body = styled.p`
    height: auto;
    padding-bottom: 1.5%;
`;