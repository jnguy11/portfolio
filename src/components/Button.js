import React from "react";
import styled from "styled-components";

export default function Button({ details }) {
    return (
        <CustomButton>{details.name}</CustomButton>
    )
}

const CustomButton = styled.button`
    width: 8.5rem;
    height: 2.5rem;
    color: #5390D9;
    border: 2px solid;
    border-color: #5390D9;
    background: linear-gradient(to right, #5390D9 50%, rgba(0,0,0,0.4) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.4s ease-out;
    :hover {
        background-position: left bottom;
        cursor: pointer;
        color: #000000;
    };
`;