import React from "react";
import styled from "styled-components";
import { Link } from 'react-scroll';

export default function HomeButton({ details }) {

    function setModalStuff() {
        details.submit(details.modal);
        details.setModal(true);
    }
    return (
        <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
        >
            <CustomButton
                onClick={() => {details.modal ? setModalStuff() : console.log("nothing")}}
                style={{
                    height: details.height ? details.height : "2.5rem",
                    width: details.width ? details.width : "8.5rem"
                }}
            >{details.name}</CustomButton>
        </Link>

    )
}

const CustomButton = styled.button`
    z-index: 1000;
    width: 8.5rem;
    height: 2.5rem;
    color: #5390D9;
    border: 2px solid;
    border-color: #5390D9;
    background: linear-gradient(to right, #5390D9 50%, rgba(0,0,0,0) 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.4s ease-out;
    :hover {
        background-position: left bottom;
        cursor: pointer;
        color: #000000;
    };
`;