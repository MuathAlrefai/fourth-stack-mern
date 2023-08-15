import React, {useState} from "react";
import '../css/style.css'

const Box = (props) => {
    return (
        <div>
            {props.colorArr.map((color, i) => {
                return (
                    <div style={{width:'100px', height:'100px', backgroundColor: color}} key={i}></div>
                )
            })}
        </div>
    );
};

export default Box;