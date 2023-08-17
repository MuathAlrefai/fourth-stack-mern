import React from "react";
import { useParams } from "react-router-dom";

const Numbers = () => {
    const {number} = useParams();

    return (
       <>
         {isNaN(number) ?
        (<h1>Your Word is {number}</h1>) :
        (<h1>You are at Page Number {number}</h1>)}
       </>
    );
};

export default Numbers