import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // <nav className="bg-blue-600 text-white p-4 shadow-md">
    <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white py-3 px-6 shadow-md z-10">
   
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Left Side - Logo */}
        <h1 className="text-2xl font-bold">
          <Link to="/">SIPCalculator.in</Link>
        </h1>

        {/* Right Side - Navigation Links */}
        <div className="space-x-6">
          {/*<Link to="/SIPCalculator" className="hover:text-gray-300">SIP Calculator</Link>*/}
          <Link to="/" className="hover:text-gray-300">SIP Calculator</Link>
          <Link to="/MutualFunds" className="hover:text-gray-300">Top 10 Mutual Funds</Link>
          <Link to="/SIPvsLumpsum" className="hover:text-gray-300">SIP vs Lumpsum</Link>
          <Link to="/SIPvsSWP" className="hover:text-gray-300">SIP vs SWP</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;