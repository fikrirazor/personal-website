import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
