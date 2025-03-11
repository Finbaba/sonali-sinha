import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white text-center py-3">
      <p className="text-sm text-gray-600">
        <strong>Disclaimer:</strong> We DO NOT offer any financial advice here. It should be used only for informational purposes. 
        Investment in mutual funds or any asset class comes with inherent risk. This tool is for rough estimation only, and actual returns may vary.
        Please do your own research or consult a financial advisor before making any investment decisions.
      </p>
      <p className="text-xs mt-1">© 2024 sipcalculator.in - Contact - All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
