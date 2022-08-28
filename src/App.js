import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav';

// Import pages
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import CreatePage from './pages/CreatePage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <Router>
      <div>
        <Nav />
      </div>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;