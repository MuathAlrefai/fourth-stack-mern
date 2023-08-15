import react, { useState } from 'react';
import '../style.css'


const MessageDisplay = (props) => {

    return (
        <>

            {props.colorArr.map((box, i) => {

                return (
                    <>
                        <div style={{backgroundColor: box, width: '100px', height: '100px'}} ></div >
                    </>)
            })}
        </>
    );
};
    
export default MessageDisplay;

