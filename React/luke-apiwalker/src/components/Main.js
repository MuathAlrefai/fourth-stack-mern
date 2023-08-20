import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Main = (props) => {
  const [wars, setWars] = useState("");
  const [id, setID] = useState("");
  const navigate = useNavigate();

  const handleWars = (e) => {
    e.preventDefault();
    props.setAPI(wars, id);
    navigate(`/${wars}/${id}`);
  };
  return (
    <div>
      <form onSubmit={handleWars}>
        <h1>Search Characters</h1>
        <label>Search for: </label>
        <select onChange={(e) => setWars(e.target.value)}>
          <option value="" disabled selected>
            Select your option
          </option>
          <option value="people">People</option>
          <option value="planets">Planets</option>
        </select>
        <label>ID : </label>
        <input min={0} type="number" onChange={(e) => setID(e.target.value)} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};
export default Main;
