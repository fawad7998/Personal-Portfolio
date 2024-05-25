import React from 'react';
import './App.css';
import {
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./Pages/Home"
import Allprojects from './Pages/Projects/AllProjectSection';


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Allprojects" element={<Allprojects />} />
      </Routes>
    </>
  );
}

export default App;
