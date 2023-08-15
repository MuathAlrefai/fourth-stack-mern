import React from "react";

const TabsInfo = (props) => {
    return(
        <div style={{width:"500px", margin:"0 auto", display:"flex", justifyContent: "space-evenly", alignContent: "center" , fontFamily: "consolas", color: "green"}}>
            {props.currentTab.info}
        </div>
    )
};

export default TabsInfo