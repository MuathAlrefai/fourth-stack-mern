import react, { useState } from 'react';
    
    
const MessageForm = (props) => {
    const [color, setColor] = useState("");
    
    const handleSubmit = (e) => {
    e.preventDefault();
    
    props.onNewMessage( color );
    props.colorArr.push(color);
    };

    
    
    return (
    <form onSubmit={ handleSubmit }>
        <label>Set Color</label> <br></br>
        <input type='text' onChange={ (e) => setColor(e.target.value) } value={ color } /> <span></span>
        <input type="submit" value="Add" />
    </form>
    );
};
    
export default MessageForm;
