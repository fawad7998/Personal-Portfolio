import React from 'react';
import './App.css';
import {
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./Pages/Home"
import Allprojects from './Pages/Projects/AllProjectSection';
import NewProjectAdd from './Pages/SecretPage/NewProjectAdd';
import ContactForm from './Pages/Contact';


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allprojects" element={<Allprojects />} />
        <Route path="/secretpath" element={<NewProjectAdd />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </>
  );
}

export default App;
