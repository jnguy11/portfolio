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
    width: 48em;
    height: 30.875em;
`;

const Image = styled.img`
    width: 48em;
    height: 30.875em;
`;