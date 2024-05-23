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
import Experience from './components/Experience/Experience';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
