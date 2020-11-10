import React, { useState } from "react";
//import styled from "styled-components";
import { Link } from "react-router-dom";

export default function NavItem({ details }) {

    const [hover, setHover] = useState(false);

    function clickEvent(event) {
        details.setFocused(event);  
        setHover(false);
    }

    if (details.focused === details.link) {
        return (
            <>
            <Link 
                to={details.link}
                style={{
                    color: "hsl(213, 64%, 59%)",
                    width: "100%",
                    textAlign: "right",
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                }}
            >
                <h5 style={{color: "hsl(213, 64%, 59%)", fontWeight: "500", marginRight: "2.375rem"}}>{details.name}</h5>
                <div className="navslider" style={{width: "2px", height: "46px", background:"#5390D9"}} />
            </Link>

            </>
        )
    } else {
        return (
            <Link 
                className="NavLinkItem"
                to={details.link}
                style={{
                    color: "white",
                    paddingTop: "0.75rem",
                    paddingBottom: "0.75rem",
                    paddingRight: "2.375rem",
                    width: "100%",
                    textAlign: "right",
                    textDecoration: "none",
                    
                }}
                onClick={() => clickEvent(details.link)}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                >
                    <h5 
                        className="linkname"
                        style={{fontWeight: "500"}}
                    >
                        {details.name}
                    </h5>
            </Link>
        )
    }
}

// const UnfocusedLink = styled.Link`
//     color: white;
//     padding-top: 0.75rem;
//     padding-bottom: 0.75rem;
//     margin-right: 2.375rem;
//     width: 85%;
//     text-align: right;
//     :hover {
//         color: hsl(213, 64%, 59%);
//         cursor: pointer;
//     }
// `
// const FocusedLink = styled.Link`
//     color: hsl(213, 64%, 59%);
//     padding-top: 0.75rem;
//     padding-bottom: 0.75rem;
//     padding-right: 2.25rem;
//     border-right: 2px solid;
//     width: 85%;
//     text-align: right;
// `

