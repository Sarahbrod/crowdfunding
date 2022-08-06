import React from "react";
import { BrowserRouter as Router, Routes, Route } from
  "react-router-dom";
import Nav from "./Components/Nav/Nav";
import HomePage from "./Pages/HomePage";
import ProjectPage from "./Pages/ProjectPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/ProjectPage" element={<ProjectPage />} />
        </Routes>
      </div >
    </Router >
  );
}
export default App;