import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Parent from "./components/Parent";
import Items from "./components/Items";
import ItemHistory from "./components/ItemHistory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Parent />} />
        <Route path="/items" element={<Items />} />
        <Route path="/history" element = {<ItemHistory/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
