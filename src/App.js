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
          <Route path="/portfolio/about" element={<About />} />
          <Route path="/portfolio/skills" element={<Skills />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio" element={<Home />} />
        </Routes>
    </Router>
    
        </div>
  );
}

export default App;
