import React from "react";
import { useParams } from "react-router-dom";

const Numbers = () => {
    const {word, color, background} = useParams();

    return (
        <h1 style={{color: color, backgroundColor: background}}>Your name is: {word}</h1>
    );
};

export default Numbers