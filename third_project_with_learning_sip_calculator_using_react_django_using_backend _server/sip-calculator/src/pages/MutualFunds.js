import React, { useEffect, useState } from "react";

const Top10MutualFunds = () => {
  const [indianFunds, setIndianFunds] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/mutualfunds/");
        const data = await response.json();
        setIndianFunds(data);
      } catch (error) {
        console.error("Error fetching mutual funds data:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // Refresh data every 60 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full px-6 md:px-16 lg:px-32 py-20 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Top 10 Mutual Funds (Indian Market)</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Rank</th>
              <th className="border border-gray-300 p-2">Fund Name</th>
              <th className="border border-gray-300 p-2">Returns (%)</th>
            </tr>
          </thead>
          <tbody>
            {indianFunds.map((fund, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 p-2">{index + 1}</td>
                <td className="border border-gray-300 p-2">{fund.name}</td>
                <td className="border border-gray-300 p-2">{fund.returns}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Top10MutualFunds;
