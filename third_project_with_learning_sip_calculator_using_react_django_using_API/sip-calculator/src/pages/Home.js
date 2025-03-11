// import React, { useState } from "react";
// import { calculateSIP } from "../utils/calculateSIP";


// const Home = () => {
//   const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
//   const [annualReturn, setAnnualReturn] = useState(12);
//   const [investmentPeriod, setInvestmentPeriod] = useState(10);
//   const [maturityAmount, setMaturityAmount] = useState(null);
//   const [adjustForInflation, setAdjustForInflation] = useState(false);
//   const [inflationRate, setInflationRate] = useState(0);

//   const handleCalculate = () => {
//     const adjustedInflation = adjustForInflation ? parseFloat(inflationRate) : 0;
//     const result = calculateSIP(monthlyInvestment, annualReturn, investmentPeriod, adjustedInflation);
//     setMaturityAmount(result);
//   };


//   return (
//     <div className="p-6 max-w-lg mx-auto">
//       <h1 className="text-3xl font-bold text-blue-600 text-center">SIP Calculator</h1>
//       <p className="text-gray-700 text-center">Plan your investments smartly!</p>

//       <div className="mt-4">
//         <label className="block text-gray-700">Monthly Investment (₹)</label>
//         <input
//           type="number"
//           className="border p-2 w-full"
//           value={monthlyInvestment}
//           onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
//         />
//       </div>

//       <div className="mt-4">
//         <label className="block text-gray-700">Expected Annual Return (%)</label>
//         <input
//           type="number"
//           className="border p-2 w-full"
//           value={annualReturn}
//           onChange={(e) => setAnnualReturn(Number(e.target.value))}
//         />
//       </div>

//       <div className="mt-4">
//         <label className="block text-gray-700">Investment Period (Years)</label>
//         <input
//           type="number"
//           className="border p-2 w-full"
//           value={investmentPeriod}
//           onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
//         />
//       </div>

//       <div className="mt-4">
//         <label className="block text-gray-700">
//           <input 
//             type="checkbox"
//             checked={adjustForInflation}
//             onChange={(e) => setAdjustForInflation(e.target.checked)}
//           />
//           <span>Adjust for Inflation</span>
//         </label>

//         {adjustForInflation && (
//           <input
//             type="number"
//             value={inflationRate}
//             onChange={(e) => setInflationRate(e.target.value)}
//             placeholder="Enter Inflation Rate (%)"
//             // className="border p-2 rounded"
//           />
//         )}
//       </div>

//       <button
//         className="mt-4 bg-blue-600 text-white py-2 px-4 rounded w-full"
//         onClick={handleCalculate}
//       >
//         Calculate
//       </button>

//       {maturityAmount !== null && (
//         <div className="mt-4 text-lg font-bold text-green-600 text-center">
//           Maturity Amount: ₹{maturityAmount}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;
//--------------------------------------------------------------------------updated------------------//
// import React, { useState } from "react";
// import { calculateSIP } from "../utils/calculateSIP";

// const Home = () => {
//   const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
//   const [annualReturn, setAnnualReturn] = useState(12);
//   const [investmentPeriod, setInvestmentPeriod] = useState(10);
//   const [maturityAmount, setMaturityAmount] = useState(null);
  
//   // ✅ Inflation States
//   const [adjustForInflation, setAdjustForInflation] = useState(false);
//   const [inflationRate, setInflationRate] = useState(0);

//   const handleCalculate = () => {
//     const adjustedInflation = adjustForInflation ? parseFloat(inflationRate) : 0;
//     const result = calculateSIP(monthlyInvestment, annualReturn, investmentPeriod, adjustedInflation);
//     setMaturityAmount(result);
//   };

//   // ✅ Calculating Investment Details
//   const totalInvested = monthlyInvestment * investmentPeriod * 12;
//   const wealthGain = maturityAmount ? maturityAmount - totalInvested : 0;

//   return (
//     <div className="p-6 max-w-lg mx-auto">
//       <h1 className="text-3xl font-bold text-blue-600 text-center">SIP Calculator</h1>
//       <p className="text-gray-700 text-center">Plan your investments smartly!</p>

//       {/* Input Fields */}
//       <div className="mt-4">
//         <label className="block text-gray-700">Monthly Investment (₹)</label>
//         <input
//           type="number"
//           className="border p-2 w-full"
//           value={monthlyInvestment}
//           onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
//         />
//       </div>

//       <div className="mt-4">
//         <label className="block text-gray-700">Expected Annual Return (%)</label>
//         <input
//           type="number"
//           className="border p-2 w-full"
//           value={annualReturn}
//           onChange={(e) => setAnnualReturn(Number(e.target.value))}
//         />
//       </div>

//       <div className="mt-4">
//         <label className="block text-gray-700">Investment Period (Years)</label>
//         <input
//           type="number"
//           className="border p-2 w-full"
//           value={investmentPeriod}
//           onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
//         />
//       </div>

//       {/* Inflation Checkbox */}
//       <div className="mt-4">
//         <label className="block text-gray-700">
//           <input 
//             type="checkbox"
//             checked={adjustForInflation}
//             onChange={(e) => setAdjustForInflation(e.target.checked)}
//           />
//           <span>Adjust for Inflation</span>
//         </label>

//         {adjustForInflation && (
//           <input
//             type="number"
//             value={inflationRate}
//             onChange={(e) => setInflationRate(e.target.value)}
//             placeholder="Enter Inflation Rate (%)"
//             className="border p-2 rounded w-full mt-2"
//           />
//         )}
//       </div>

//       {/* Calculate Button */}
//       <button
//         className="mt-4 bg-blue-600 text-white py-2 px-4 rounded w-full"
//         onClick={handleCalculate}
//       >
//         Calculate
//       </button>

//       {/* Maturity Amount */}
//       {maturityAmount !== null && (
//         <div className="mt-4 text-lg font-bold text-green-600 text-center">
//           Maturity Amount: ₹{maturityAmount.toLocaleString()}
//         </div>
//       )}

//       {/* ✅ Summary Table */}
//       {maturityAmount !== null && (
//         <div className="mt-6 border border-gray-300 rounded-lg shadow-md p-4 bg-white">
//           <h2 className="text-xl font-semibold text-gray-700 text-center">Summary</h2>
//           <table className="w-full mt-2 text-left border-collapse">
//             <tbody>
//               <tr className="border-b">
//                 <td className="p-2 font-medium">Expected Amount</td>
//                 <td className="p-2 text-right">₹{maturityAmount.toLocaleString()} ({(maturityAmount / 100000).toFixed(1)} Lakhs)</td>
//               </tr>
//               <tr className="border-b">
//                 <td className="p-2 font-medium">Amount Invested</td>
//                 <td className="p-2 text-right">₹{totalInvested.toLocaleString()} ({(totalInvested / 100000).toFixed(1)} Lakhs)</td>
//               </tr>
//               <tr>
//                 <td className="p-2 font-medium">Wealth Gain</td>
//                 <td className="p-2 text-right text-green-600">₹{wealthGain.toLocaleString()} ({(wealthGain / 100000).toFixed(1)} Lakhs)</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;
//-----------------------------------------------updated with graph--------------------------------------------------
// import React, { useState } from "react";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
// import { calculateSIP } from "../utils/calculateSIP";

// const Home = () => {
//   const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
//   const [annualReturn, setAnnualReturn] = useState(12);
//   const [investmentPeriod, setInvestmentPeriod] = useState(10);
//   const [maturityAmount, setMaturityAmount] = useState(null);
  
//   // ✅ Inflation States
//   const [adjustForInflation, setAdjustForInflation] = useState(false);
//   const [inflationRate, setInflationRate] = useState(0);

//   const handleCalculate = () => {
//     const adjustedInflation = adjustForInflation ? parseFloat(inflationRate) : 0;
//     const result = calculateSIP(monthlyInvestment, annualReturn, investmentPeriod, adjustedInflation);
//     setMaturityAmount(result);
//   };

//   // ✅ Calculating Investment Details
//   const totalInvested = monthlyInvestment * investmentPeriod * 12;
//   const wealthGain = maturityAmount ? maturityAmount - totalInvested : 0;

//   // ✅ Graph Data
//   const data = [
//     { name: "Invested", amount: totalInvested },
//     { name: "Wealth Gain", amount: wealthGain },
//   ];

//   return (
//     <div className="p-6 max-w-lg mx-auto">
//       <h1 className="text-3xl font-bold text-blue-600 text-center">SIP Calculator</h1>
//       <p className="text-gray-700 text-center">Plan your investments smartly!</p>

//       {/* Input Fields */}
//       <div className="mt-4">
//         <label className="block text-gray-700">Monthly Investment (₹)</label>
//         <input
//           type="number"
//           className="border p-2 w-full"
//           value={monthlyInvestment}
//           onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
//         />
//       </div>

//       <div className="mt-4">
//         <label className="block text-gray-700">Expected Annual Return (%)</label>
//         <input
//           type="number"
//           className="border p-2 w-full"
//           value={annualReturn}
//           onChange={(e) => setAnnualReturn(Number(e.target.value))}
//         />
//       </div>

//       <div className="mt-4">
//         <label className="block text-gray-700">Investment Period (Years)</label>
//         <input
//           type="number"
//           className="border p-2 w-full"
//           value={investmentPeriod}
//           onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
//         />
//       </div>

//       {/* Inflation Checkbox */}
//       <div className="mt-4">
//         <label className="flex items-center space-x-2">
//           <input 
//             type="checkbox"
//             checked={adjustForInflation}
//             onChange={(e) => setAdjustForInflation(e.target.checked)}
//           />
//           <span>Adjust for Inflation</span>
//         </label>

//         {adjustForInflation && (
//           <input
//             type="number"
//             value={inflationRate}
//             onChange={(e) => setInflationRate(e.target.value)}
//             placeholder="Enter Inflation Rate (%)"
//             className="border p-2 rounded w-full mt-2"
//           />
//         )}
//       </div>

//       {/* Calculate Button */}
//       <button
//         className="mt-4 bg-blue-600 text-white py-2 px-4 rounded w-full"
//         onClick={handleCalculate}
//       >
//         Calculate
//       </button>

//       {/* Maturity Amount */}
//       {maturityAmount !== null && (
//         <div className="mt-4 text-lg font-bold text-green-600 text-center">
//           Maturity Amount: ₹{maturityAmount.toLocaleString()}
//         </div>
//       )}

//       {/* ✅ Summary Table */}
//       {maturityAmount !== null && (
//         <div className="mt-6 border border-gray-300 rounded-lg shadow-md p-4 bg-white">
//           <h2 className="text-xl font-semibold text-gray-700 text-center">Summary</h2>
//           <table className="w-full mt-2 text-left border-collapse">
//             <tbody>
//               <tr className="border-b">
//                 <td className="p-2 font-medium">Expected Amount</td>
//                 <td className="p-2 text-right">₹{maturityAmount.toLocaleString()} ({(maturityAmount / 100000).toFixed(1)} Lakhs)</td>
//               </tr>
//               <tr className="border-b">
//                 <td className="p-2 font-medium">Amount Invested</td>
//                 <td className="p-2 text-right">₹{totalInvested.toLocaleString()} ({(totalInvested / 100000).toFixed(1)} Lakhs)</td>
//               </tr>
//               <tr>
//                 <td className="p-2 font-medium">Wealth Gain</td>
//                 <td className="p-2 text-right text-green-600">₹{wealthGain.toLocaleString()} ({(wealthGain / 100000).toFixed(1)} Lakhs)</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* ✅ Wealth Gain vs. Investment Graph */}
//       {maturityAmount !== null && (
//         <div className="mt-6 border border-gray-300 rounded-lg shadow-md p-4 bg-white">
//           <h2 className="text-xl font-semibold text-gray-700 text-center">Wealth Gain vs. Investment</h2>
//           <div className="mt-4">
//             <ResponsiveContainer width="100%" height={250}>
//               <BarChart data={data}>
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="amount" fill="#3182CE" radius={[8, 8, 0, 0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;

//---------------------------------------------updated with normal graph and pie chart---------------------//
import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { calculateSIP } from "../utils/calculateSIP";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";

const Home = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [annualReturn, setAnnualReturn] = useState(12);
  const [investmentPeriod, setInvestmentPeriod] = useState(10);
  const [maturityAmount, setMaturityAmount] = useState(null);
  
  // ✅ Inflation States
  const [adjustForInflation, setAdjustForInflation] = useState(false);
  const [inflationRate, setInflationRate] = useState(0);

  const handleCalculate = () => {
    const adjustedInflation = adjustForInflation ? parseFloat(inflationRate) : 0;
    const result = calculateSIP(monthlyInvestment, annualReturn, investmentPeriod, adjustedInflation);
    setMaturityAmount(result);
  };

  // ✅ Function to calculate future SIP value
  const calculateFutureSIP = (years) => {
    return calculateSIP(monthlyInvestment, annualReturn, years, 0);
  };

  // ✅ Calculating Investment Details
  const totalInvested = monthlyInvestment * investmentPeriod * 12;
  const wealthGain = maturityAmount ? maturityAmount - totalInvested : 0;

  // ✅ Graph Data
  const data = [
    { name: "Invested", amount: totalInvested },
    { name: "Wealth Gain", amount: wealthGain },
  ];

  // ✅ Pie Chart Colors
  const COLORS = ["#3182CE", "#2ECC71"];


  // ✅ Projected SIP Data (Durations from 1 to 35 years)
  const durations = [1, 2, 3, 4, 5, 8, 10, 12, 15, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 35];

  return (
    // <div className="p-6 max-w-lg mx-auto">
    <div className="pt-16 p-6 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 text-center">SIP Calculator</h1>
      <p className="text-gray-700 text-center">Plan your investments smartly!</p>

      {/* Input Fields */}
      <div className="mt-4">
        <label className="block text-gray-700">Monthly Investment (₹)</label>
        <input
          type="number"
          className="border p-2 w-full"
          value={monthlyInvestment}
          onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
        />
      </div>

      <div className="mt-4">
        <label className="block text-gray-700">Expected Annual Return (%)</label>
        <input
          type="number"
          className="border p-2 w-full"
          value={annualReturn}
          onChange={(e) => setAnnualReturn(Number(e.target.value))}
        />
      </div>

      <div className="mt-4">
        <label className="block text-gray-700">Investment Period (Years)</label>
        <input
          type="number"
          className="border p-2 w-full"
          value={investmentPeriod}
          onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
        />
      </div>

      {/* Inflation Checkbox */}
      <div className="mt-4">
        <label className="flex items-center space-x-2">
          <input 
            type="checkbox"
            checked={adjustForInflation}
            onChange={(e) => setAdjustForInflation(e.target.checked)}
          />
          <span>Adjust for Inflation</span>
        </label>

        {adjustForInflation && (
          <input
            type="number"
            value={inflationRate}
            onChange={(e) => setInflationRate(e.target.value)}
            placeholder="Enter Inflation Rate (%)"
            className="border p-2 rounded w-full mt-2"
          />
        )}
      </div>

      {/* Calculate Button */}
      <button
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded w-full"
        onClick={handleCalculate}
      >
        Calculate
      </button>

      {/* Maturity Amount */}
      {maturityAmount !== null && (
        <div className="mt-4 text-lg font-bold text-green-600 text-center">
          Maturity Amount: ₹{maturityAmount.toLocaleString()}
        </div>
      )}

      {/* ✅ Summary Table */}
      {maturityAmount !== null && (
        <div className="mt-6 border border-gray-300 rounded-lg shadow-md p-4 bg-white">
          <h2 className="text-xl font-semibold text-gray-700 text-center">Summary</h2>
          <table className="w-full mt-2 text-left border-collapse">
            <tbody>
              <tr className="border-b">
                <td className="p-2 font-medium">Expected Amount</td>
                <td className="p-2 text-right">₹{maturityAmount.toLocaleString()} ({(maturityAmount / 100000).toFixed(1)} Lakhs)</td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">Amount Invested</td>
                <td className="p-2 text-right">₹{totalInvested.toLocaleString()} ({(totalInvested / 100000).toFixed(1)} Lakhs)</td>
              </tr>
              <tr>
                <td className="p-2 font-medium">Wealth Gain</td>
                <td className="p-2 text-right text-green-600">₹{wealthGain.toLocaleString()} ({(wealthGain / 100000).toFixed(1)} Lakhs)</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* ✅ Projected SIP Returns Table */}
      <div className="mt-6 border border-gray-300 rounded-lg shadow-md p-4 bg-white">
        <h2 className="text-xl font-semibold text-gray-700 text-center">Projected SIP Returns</h2>
        <table className="w-full mt-2 border-collapse">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-2 text-left">Duration</th>
              <th className="p-2 text-left">SIP Amount (₹)</th>
              <th className="p-2 text-left">Future Value (₹)</th>
            </tr>
          </thead>
          <tbody>
            {durations.map((years) => {
              const futureValue = calculateFutureSIP(years);
              return (
                <tr key={years} className="border-b">
                  <td className="p-2">{years} years</td>
                  <td className="p-2">₹{monthlyInvestment}</td>
                  <td className="p-2 font-bold text-green-600">₹{(futureValue / 100000).toFixed(1)} Lakhs</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ✅ Wealth Gain vs. Investment Graph */}
      {maturityAmount !== null && (
        <div className="mt-6 border border-gray-300 rounded-lg shadow-md p-4 bg-white">
          <h2 className="text-xl font-semibold text-gray-700 text-center">Wealth Gain vs. Investment</h2>
          <div className="mt-4">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" fill="#3182CE" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* ✅ Pie Chart for Investment Breakdown */}
      {maturityAmount !== null && (
        <div className="mt-6 border border-gray-300 rounded-lg shadow-md p-4 bg-white">
          <h2 className="text-xl font-semibold text-gray-700 text-center">Investment Breakdown</h2>
          <div className="mt-4 flex justify-center">
            <ResponsiveContainer width={300} height={300}>
              <PieChart>
                <Pie data={data} dataKey="amount" cx="50%" cy="50%" outerRadius={100} label>
                  {data.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
      <Footer />  {/* ✅ Footer Added Here */}
    </div>
  );
};

export default Home;
