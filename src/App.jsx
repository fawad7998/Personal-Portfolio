import React from 'react';
import './App.css';
import Home from './components/Home';
import {
  Route,
  Routes,
} from "react-router-dom";
import About from './components/About';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
}

export default App;
