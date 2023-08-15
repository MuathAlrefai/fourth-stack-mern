import React, {useState} from "react";

const Tabs = (props) => {

    return(
        <div style={{width:"500px", margin:"0 auto", display:"flex", justifyContent: "space-evenly", alignContent: "center"}}>
            {props.data.map((tab, i) =>
                <div key={i} onClick={e => {props.choose(tab, e)}} style={{cursor: "pointer", backgroundColor: "tomato", border: "1px solid black", color: "white"}}>
                    {tab.name}
                </div>)}
        </div>
    );
};

export default Tabs