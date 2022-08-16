import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';

// Import pages
import HomePage from './Pages/HomePage'
import ProjectPage from './Pages/ProjectPage'
import AboutPage from './Pages/AboutPage'
import LoginPage from './Pages/LoginPage'

function App() {
  return (
    <Router>
      <Nav />
      <div id="project-list">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;