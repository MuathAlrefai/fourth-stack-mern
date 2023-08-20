import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import { useState } from "react";
import ShowAPI from "./components/ShowAPI.js";

function App() {
  const [showStar, setShowStar] = useState("");
  const [showID, setShowID] = useState("");

  const setAPI = (poke, id) => {
    setShowID(id);
    setShowStar(poke);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Main setAPI={setAPI} />} />
          <Route
            path="/:wars/:id"
            element={<ShowAPI poke={showStar} id={showID} />}
          />
        </Routes>
      </header>
    </div>
  );
}

export default App;
