import React from 'react';
import './App.css';
import Home from './components/Home';
import {
  Route,
  Routes,
} from "react-router-dom";
import About from './components/About';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;