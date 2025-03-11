import React from "react";
import "./styles/App.css"; // ✅ Existing CSS file import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // ✅ Footer component add kiya
import Home from "./pages/Home";
import SIPCalculator from "./pages/SIPCalculator";
import MutualFunds from "./pages/MutualFunds";
import SIPVsLumpsum from "./pages/SIPVsLumpsum";
import SIPVsSWP from "./pages/SIPVsSWP";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar /> {/* ✅ Fixed Navbar */}

        <div className="content"> {/* ✅ Yeh scroll karega */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SIPCalculator" element={<SIPCalculator />} />
            <Route path="/MutualFunds" element={<MutualFunds />} />
            <Route path="/SIPVsLumpsum" element={<SIPVsLumpsum />} />
            <Route path="/SIPVsSWP" element={<SIPVsSWP />} />
          </Routes>
        </div>

        <Footer /> {/* ✅ Fixed Footer */}
      </div>
    </Router>
  );
}

export default App;
