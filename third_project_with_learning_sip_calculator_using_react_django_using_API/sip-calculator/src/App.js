import React from 'react';
// import logo from './logo.svg';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SIPCalculator from "./pages/SIPCalculator";
import MutualFunds from "./pages/MutualFunds";
import SIPVsLumpsum from "./pages/SIPVsLumpsum";
import SIPVsSWP from "./pages/SIPVsSWP";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SIPCalculator" element={<SIPCalculator />} />
        <Route path="/MutualFunds" element={<MutualFunds />} />
        <Route path="/SIPVsLumpsum" element={<SIPVsLumpsum />} />
        <Route path="/SIPVsSWP" element={<SIPVsSWP />} />
      </Routes>
    </Router>
  );
}

export default App;