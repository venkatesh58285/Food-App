import { useState } from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { Practise, P1, P2 } from "./components/Practise";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  const [type, setType] = useState("");
  const [val, setInterval] = useState("");
  return (
    <div>
      <Navbar setType={setType} setInterval={setInterval} val = {val}></Navbar>
      <Body type={type} val={val}></Body>
    </div>
  );
}

export default App;
