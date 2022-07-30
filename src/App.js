import React from 'react'
import './App.css';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import Educations from './components/Educations';
import Portfolios from './components/Portfolios';

function App() {
  return (
    <Router>
      
            <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route  path="/skills" element={<Skills />}/>
              <Route  path="/experiences" element={<Experiences />}/>
              <Route  path="/educations" element={<Educations />}/>
              <Route  path="/portfolios" element={<Portfolios />}/>
            </Routes>
    </Router>
  );
}

export default App;
