import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav';

// Import pages
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'

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