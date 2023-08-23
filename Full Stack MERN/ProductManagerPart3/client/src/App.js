// import logo from "./logo.svg";
import "./App.css";
import Main from "./views/Main";
import Details from "./views/Details";
import Update from "./views/Update";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products/:id" element={<Details />} />
        <Route element={<Update/>} path="/products/:id/edit"/>
      </Routes>
    </div>
  );
}
export default App;
