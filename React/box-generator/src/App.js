import React, { useState } from 'react';
import MessageForm from './components/MessageForm';
import MessageDisplay from './components/MessageDisplay';
    
    
function App() {
    const [currentColor, setCurrentColor] = useState("There are no messages");
    
    const [colorArr, setColorArr] = useState([]);

    const youGotColor = ( newColor ) => {
      setCurrentColor( newColor );
  }
    
    return (
        <>
            <MessageForm colorArr={colorArr} onNewMessage={ youGotColor } />
            <MessageDisplay colorArr={colorArr} color={ currentColor } />
        </>
    );
}
    
export default App;

