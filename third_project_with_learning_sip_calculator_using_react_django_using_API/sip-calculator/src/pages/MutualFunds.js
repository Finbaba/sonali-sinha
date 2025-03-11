import React, { useEffect, useState } from "react";

const Top10MutualFunds = () => {
  const [indianFunds, setIndianFunds] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.mfapi.in/mf");
        const data = await response.json();

        // Fetch details for top 10 funds based on scheme codes
        const top10Funds = data.slice(0, 10);
        const fundDetails = await Promise.all(
          top10Funds.map(async (fund) => {
            const navResponse = await fetch(`https://api.mfapi.in/mf/${fund.schemeCode}`);
            const navData = await navResponse.json();
            const navs = navData.data || [];

            let returns = "N/A";
            if (navs.length >= 2) {
              const latestNAV = parseFloat(navs[0].nav);
              const oldestNAV = parseFloat(navs[navs.length - 1].nav);
              returns = (((latestNAV - oldestNAV) / oldestNAV) * 100).toFixed(2);
            }

            return {
              name: fund.schemeName,
              returns,
            };
          })
        );

        setIndianFunds(fundDetails);
      } catch (error) {
        console.error("Error fetching mutual funds data:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // Refresh data every 60 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full px-6 md:px-45 lg:px-20 py-20 text-gray-800">
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
