import React from "react";
import styled from "styled-components";

function ListItem({ details }) {

    // let fontColor;
    // if (details.style) {
    //     fontColor = details.style;
    // } else {
    //     fontColor = "#FFFFFF";
    // }
    return (
        <List>
            <ListHeader>
                {details.header}
            </ListHeader>
            <ListSize>
                <p>{details.size}</p>
            </ListSize>
            <ListFont>
                <p>{details.font}</p>
            </ListFont>
            <ListColor>
                <p style={{color: details.color}}>{details.color}</p>
            </ListColor>
        </List>
    )
}

const List = styled.div`

    display: flex;
    flex-direction: row;
    justify-self: center;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid;
    border-color: #525456;
`;

const ListHeader = styled.div`
    width: 28%;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
`;

const ListSize = styled.div`
    width: 16%;
    display: flex;
    justify-content: flex-start;
`;

const ListFont = styled.div`
    width: 36%;
    display: flex;
    justify-content: flex-start;
`;

const ListColor = styled.div`
    width: 20%;
    display: flex;
    justify-content: flex-start;
`;

export default ListItem;