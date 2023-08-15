import  React, { useState } from "react";
import BoxForm from "./components/BoxForm";
import Box from "./components/Box";

function App() {

  const [color, setColor] = useState("");
  const [colors, setColors] = useState([]);

  const handleColor = (newColor) => {
    setColor(newColor);
    setColors(colors.push(newColor));
  }
  return (
    <>
      <BoxForm colorArr={colors} setColor={handleColor} />
      <Box colorArr={colors} />
    </>
  );
}

export default App;
