import Home from "./components/Home";
import Numbers from "./components/Numbers";
import Words from "./components/Words";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/:number" element={<Numbers />} />
        <Route path="/:word/:color/:background" element={<Words />} />
      </Routes>

    </>
  );
}

export default App;
