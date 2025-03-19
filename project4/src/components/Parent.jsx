import Navbar from "./Navbar";
import Body from "./Body";
import {useState} from "react";
export default function Parent() {
  const [type, setType] = useState("");
  const [val, setInterval] = useState("");
  return (
    <>
      <Navbar setType={setType} setInterval={setInterval} val={val}></Navbar>
      <Body type={type} val={val}></Body>
    </>
  );
}
