import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Stack from "./components/lists/Stack";
import Queue from "./components/lists/Queue";
import Home from "./components/Layout/Home";


function App() {
  
  return (
    
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/queue" element={<Queue />} />
      </Routes>
    </Router>
  )
}

export default App
