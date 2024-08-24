import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./component/Navbar";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import "./App.css";
import Skills from "./component/Skills";
import Allcompenets from "./component/Allcompenets";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Allcompenets />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
