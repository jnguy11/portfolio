import React from "react";
import styled from "styled-components";

export default function ButtonColor({ details }) {
    return (
            <form>
            <CustomButton
                type="submit"
                formAction={details.link}
                style={{
                    height: details.height ? details.height : "2.5rem",
                    width: details.width ? details.width : "8.5rem"
                }}
            >{details.name}</CustomButton>
        </form>
    )
}

const CustomButton = styled.button`
    z-index: 1000;
    width: 8.5rem;
    height: 2.5rem;
    color: 	#efa147;
    border: 2px solid;
    border-color: 	#efa147;
    background: linear-gradient(to right, 	#efa147 50%, rgba(0,0,0,0) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.4s ease-out;
    :hover {
        background-position: left bottom;
        cursor: pointer;
        color: #000000;
    };
`;