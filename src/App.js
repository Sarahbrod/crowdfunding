import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';

// Import pages
import HomePage from './pages/HomePage';
import AccountPage from './pages/AccountPage';
import ProjectPage from './pages/ProjectPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import CreateRequestPage from './pages/CreateRequestPage';
import Footer from "./components/Footer/Footer";


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
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create" element={<CreateRequestPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;