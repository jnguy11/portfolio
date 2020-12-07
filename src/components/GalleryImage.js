import React from "react";
import styled from "styled-components";

export default function GalleryImage({ image }) {
    return (
        <Div>
            <Image
                src={image.src}
             />
        </Div>
    )
}

const Div = styled.div`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;