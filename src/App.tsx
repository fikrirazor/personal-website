import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
