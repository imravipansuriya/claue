import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Electronics from "./components/Electronics/Electronics";
import Fashion from "./components/Fashion/Fashion"
import Grocery from "./components/Grocery/Grocery"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Fashion" element={<Fashion />} />
          <Route path="/Electronics" element={<Electronics />} />
          <Route path="/Grocery" element={<Grocery />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


