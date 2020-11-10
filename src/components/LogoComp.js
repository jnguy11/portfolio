import React from "react";

export default function LogoComp({ image }) {

    let size;
    if (image.size === "large") {
        size = 500;
    } else if (image.size === "medium") {
        size = 100;
    } else if (image.size === "small") {
        size = 75;
    }

    return (
        <img 
            style={{
                maxHeight: size,
                maxWidth: size,
                width: "auto",
                height: "auto",
                objectFit: "cover",
            }}
            src={image.src}
        />

    )
}
