import React from "react";
import styled from "styled-components";

export default function Color({ color }) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                height: "20rem",
                width: "22.5%",
                backgroundColor: `#${color.type}`,

            }}
        >
            <Sizing>
                <div style={{height: "5rem", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",}}>
                    <h5 style={{color: `#${color.font}`, textAlign: "center", verticalAlign: "bottom", lineHeight: 1.75}}>{color.name}</h5>
                    <p style={{color: `#${color.font}`, textAlign: "center"}}>{color.usage}</p>
                </div>

                <div style={{height: "5rem", width: "100%", display: "flex", justifyContent: "center", flexDirection: "column",}}>
                    <p style={{color: `#${color.font}`, textAlign: "center"}}>HEX {color.type}</p>
                    <p style={{color: `#${color.font}`, textAlign: "center"}}>RGB {color.rgb}</p>
                </div>
            </Sizing>
        </div>
    )
}

const Sizing = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
