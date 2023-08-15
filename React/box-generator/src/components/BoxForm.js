import React, {useState} from "react";
import '../css/style.css'

const BoxForm = (props) => {
    const [color, setColor] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.setColor(color);
    };
    
    
    return (
        <form className="box" onSubmit={ handleSubmit }>
                <label>Add Color </label> <br/>
                <input type="text" onChange={ (e) => setColor(e.target.value)} value={color} />
                <input className="submit" type="submit" value="Add" />
        </form>
    );
};

export default BoxForm