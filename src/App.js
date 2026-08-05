// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router";
// import { BrowserRouter, Routes, Route } from 'react-dom/client';
import Home from "../src/Home"
import About from '../src/section/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
// import Navbar from "../src/components/navbar/Navbar";
import React from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/skills" element={<Skills/>} />
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
