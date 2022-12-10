import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./myComponents/header";
import Home from "./myComponents/home";
import About from "./myComponents/about";
import Skills from "./myComponents/skills";
import Projects from "./myComponents/projects";
function App() {
  return (
    <div className='main'>
    
    <Router>
    <Header/>
    <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="" element={<Home />} />
        </Routes>
    </Router>
    
        </div>
  );
}

export default App;
