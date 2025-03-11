//----------------------------------Updated with ad-------------------------------------

// import { useState } from "react";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
// import { calculateSIP } from "../utils/calculateSIP";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const Home = () => {
//   const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
//   const [annualReturn, setAnnualReturn] = useState(12);
//   const [investmentPeriod, setInvestmentPeriod] = useState(10);
//   const [maturityAmount, setMaturityAmount] = useState(null);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [formData, setFormData] = useState({ name: "", mobile: "" });
//   const [adjustForInflation, setAdjustForInflation] = useState(false);
//   const [inflationRate, setInflationRate] = useState(0);
//   const [name, setName] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [showForm, setShowForm] = useState(true);
  

//   const handleCalculate = () => {
//     const adjustedInflation = adjustForInflation ? parseFloat(inflationRate) : 0;
//     const result = calculateSIP(monthlyInvestment, annualReturn, investmentPeriod, adjustedInflation);
//     setMaturityAmount(result);
//   };

//   const handleOptionClick = (option) => {
//     if (option === "Still Confused") {
//       setShowForm(true);
//     } else {
//       window.open(option, "_blank");
//     }
//   };
  
//   const handleSubmitForm = async () => {
//     if (!name || !mobile) {
//       alert("Please enter your name and mobile number.");
//       return;
//     }

//     console.log("Sending data:", { name, mobile }); // ✅ Debugging ke liye

//     try {
//       const response = await fetch("http://127.0.0.1:8000/api/save-contact/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, mobile }),
//       });

//       const data = await response.json(); // ✅ API Response check karne ke liye

//       console.log("Response:", data); // ✅ Debugging

//       if (response.ok) {
//         alert("Thank you! Our executive will contact you soon.");
//         setName("");
//         setMobile("");
//         setShowForm(false);
//       } else {
//           alert("Something went wrong. Please try again.");
//       }
//     } catch (error) {
//         console.error("Error submitting form:", error);
//         alert("Network error. Please check your connection.");
//     }
//   };


  
//   const totalInvested = monthlyInvestment * investmentPeriod * 12;
//   const wealthGain = maturityAmount ? maturityAmount - totalInvested : 0;
  
//   const data = [
//     { name: "Invested", amount: totalInvested },
//     { name: "Wealth Gain", amount: wealthGain },
//   ];
  
//   const COLORS = ["#FF0000", "#2ECC71"];
  
//   const durations = [1, 2, 3, 4, 5, 8, 10, 12, 15, 18, 20, 22, 25, 30, 35];
  
//   return (
//     <div className="pt-16 p-6 max-w-4xl mx-auto">
//       <Navbar />

//       <div className="flex flex-col md:flex-row md:justify-between items-start">
//         <div className="md:w-1/2">
//           <h1 className="text-3xl font-bold text-blue-600">SIP Calculator</h1>
//           <p className="text-gray-700">Plan your investments smartly!</p>
//           <input type="number" className="border p-2 w-full mt-4" value={monthlyInvestment} onChange={(e) => setMonthlyInvestment(Number(e.target.value))} placeholder="Monthly Investment (₹)" />
//           <input type="number" className="border p-2 w-full mt-4" value={annualReturn} onChange={(e) => setAnnualReturn(Number(e.target.value))} placeholder="Expected Annual Return (%)" />
//           <input type="number" className="border p-2 w-full mt-4" value={investmentPeriod} onChange={(e) => setInvestmentPeriod(Number(e.target.value))} placeholder="Investment Period (Years)" />
//           <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded w-full" onClick={handleCalculate}>Calculate</button>
//         </div>
//       </div>
      
//       {maturityAmount !== null && (
//         <div className="md:absolute md:top-[100px] md:right-[400px] md:z-10 text-lg font-bold text-green-600 text-right">
//           Maturity Amount: ₹{maturityAmount?.toLocaleString()}
//         </div>
//       )}
      
      
//       <div className="md:relative md:top-[0px] md:right-[60px] text-right">

//         <div className="border p-4 bg-gray-100 inline-block rounded-md cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
//           Open a Demat Account With Us
//           <div className="text-center text-xl font-bold">....</div>
//         </div>
//         {menuOpen && (
//           <div className="absolute right-0 mt-2 bg-white border shadow-lg rounded-md p-2">
//             <button className="block w-full text-left px-4 py-2 hover:bg-gray-200" onClick={() => handleOptionClick("https://signup.fyers.in/?utm-source=AP-Leads&utm-medium=AP0179")}>Fyers</button>
//             <button className="block w-full text-left px-4 py-2 hover:bg-gray-200" onClick={() => handleOptionClick("https://zerodha.com/open-account?c=ZMPASV")}>Zerodha</button>
//             <button className="block w-full text-left px-4 py-2 hover:bg-gray-200" onClick={() => handleOptionClick("https://upstox.com")}>Upstox</button>
//             <button className="block w-full text-left px-4 py-2 hover:bg-gray-200" onClick={() => handleOptionClick("Still Confused")}>Still Confused</button>
//           </div>
//         )}
//       </div>

//       {showForm && (
//         <form className="mt-4 border p-4 bg-gray-50 rounded-md" onSubmit={handleSubmitForm}>
//           <h2 className="text-lg font-semibold">Please fill the form:</h2>
//           <input type="text" className="border p-2 w-full mt-2" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
//           <input type="text" className="border p-2 w-full mt-2" placeholder="Mobile Number" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} required />
//           <button className="mt-2 bg-green-600 text-white py-2 px-4 rounded w-full" type="submit">Submit</button>
//         </form>
//       )}

//       <div className="mt-6">
//         <h2 className="text-xl font-semibold text-gray-700 text-center">Projected SIP Returns</h2>
//         <table className="w-full mt-2 border-collapse">
//           <thead>
//             <tr className="bg-blue-500 text-white">
//               <th className="p-2 text-left">Duration</th>
//               <th className="p-2 text-left">SIP Amount (₹)</th>
//               <th className="p-2 text-left">Future Value (₹)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {durations.map((years) => {
//               const futureValue = calculateSIP(monthlyInvestment, annualReturn, years, 0);
//               return (
//                 <tr key={years} className="border-b">
//                   <td className="p-2">{years} years</td>
//                   <td className="p-2">₹{monthlyInvestment}</td>
//                   <td className="p-2 font-bold text-green-600">₹{(futureValue / 100000).toFixed(1)} Lakhs</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>

//       {maturityAmount !== null && (
//         <div className="mt-6 flex flex-col md:flex-row gap-4">
//           <div className="md:w-1/2 border border-gray-300 rounded-lg shadow-md p-4 bg-white">
//             <h2 className="text-xl font-semibold text-gray-700 text-center">Wealth Gain vs. Investment</h2>
//             <ResponsiveContainer width="100%" height={250}>
//               <BarChart data={data}>
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="amount" radius={[8, 8, 0, 0]}>
//                   {data.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index]} />
//                   ))}
//                 </Bar>
//               </BarChart>
//             </ResponsiveContainer>
//           </div>

//           <div className="md:w-1/2 border border-gray-300 rounded-lg shadow-md p-4 bg-white">
//             <h2 className="text-xl font-semibold text-gray-700 text-center">Investment Breakdown</h2>
//             <ResponsiveContainer width={300} height={300} className="mx-auto">
//               <PieChart>
//                 <Pie data={data} dataKey="amount" cx="50%" cy="50%" outerRadius={100} label>
//                   {data.map((_, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//                 <Legend />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       )}

      
//       <Footer />
//     </div>
//   );
// };

// export default Home;
// //----------------------------------------------------------------------------------------------//

//----------------------------------Updated with ad-------------------------------------

import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { calculateSIP } from "../utils/calculateSIP";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [annualReturn, setAnnualReturn] = useState(12);
  const [investmentPeriod, setInvestmentPeriod] = useState(10);
  const [maturityAmount, setMaturityAmount] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "" });
  const [adjustForInflation, setAdjustForInflation] = useState(false);
  const [inflationRate, setInflationRate] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const handleCalculate = () => {
    const adjustedInflation = adjustForInflation ? parseFloat(inflationRate) : 0;
    const result = calculateSIP(monthlyInvestment, annualReturn, investmentPeriod, adjustedInflation);
    setMaturityAmount(result);
  };

  const handleOptionClick = (option) => {
    if (option === "Still Confused") {
      setShowForm(true);
    } else {
      window.open(option, "_blank");
    }
    setMenuOpen(false);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile) {
      alert("Please enter your name and mobile number.");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/save-contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Thank you! Our executive will contact you soon.");
        setFormData({ name: "", mobile: "" });
        setShowForm(false);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Network error. Please check your connection.");
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuOpen && !event.target.closest(".menu-container")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [menuOpen]);

  const totalInvested = monthlyInvestment * investmentPeriod * 12;
  const wealthGain = maturityAmount ? maturityAmount - totalInvested : 0;
  const data = [
    { name: "Invested", amount: totalInvested },
    { name: "Wealth Gain", amount: wealthGain },
  ];
  const COLORS = ["#FF0000", "#2ECC71"];
  const durations = [1, 2, 3, 4, 5, 8, 10, 12, 15, 18, 20, 22, 25, 30, 35];

  return (
    <div className="pt-16 p-6 max-w-4xl mx-auto">
      <Navbar />

      <div className="flex flex-col md:flex-row md:justify-between items-start">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-blue-600">SIP Calculator</h1>
          <p className="text-gray-700">Plan your investments smartly!</p>
          <input type="number" className="border p-2 w-full mt-4" value={monthlyInvestment} onChange={(e) => setMonthlyInvestment(Number(e.target.value))} placeholder="Monthly Investment (₹)" />
          <input type="number" className="border p-2 w-full mt-4" value={annualReturn} onChange={(e) => setAnnualReturn(Number(e.target.value))} placeholder="Expected Annual Return (%)" />
          <input type="number" className="border p-2 w-full mt-4" value={investmentPeriod} onChange={(e) => setInvestmentPeriod(Number(e.target.value))} placeholder="Investment Period (Years)" />
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded w-full" onClick={handleCalculate}>Calculate</button>
        </div>
      </div>


      {maturityAmount !== null && (
        <div className="absolute top-20 right-12  text-2xl font-bold text-green-600">
          Maturity Amount: ₹{maturityAmount?.toLocaleString()}
        </div>
      )}

      <div className="relative">
        <div className="menu-container absolute bottom-40 right-10 mt-1">
          <button className="border p-4 bg-green-600 inline-block rounded-md cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            Open a Demat Account With Us
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 bg-white border shadow-lg rounded-md p-2">
              {["Fyers", "Zerodha", "Upstox", "Still Confused"].map((option) => (
                <button key={option} className="block w-full text-left px-4 py-2 hover:bg-gray-200" onClick={() => handleOptionClick(option)}>{option}</button>
              ))}
            </div>
          )}
        </div>
      </div>

      {showForm && (
        <form className="mt-4 border p-4 bg-gray-50 rounded-md" onSubmit={handleSubmitForm}>
          <h2 className="text-lg font-semibold">Please fill the form:</h2>
          <input type="text" className="border p-2 w-full mt-2" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
          <input type="text" className="border p-2 w-full mt-2" placeholder="Mobile Number" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} required />
          <button className="mt-2 bg-green-600 text-white py-2 px-4 rounded w-full" type="submit">Submit</button>
        </form>
      )}


      <div className="mt-6">
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
              const futureValue = calculateSIP(monthlyInvestment, annualReturn, years, 0);
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

      {maturityAmount !== null && (
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <div className="md:w-1/2 border border-gray-300 rounded-lg shadow-md p-4 bg-white">
            <h2 className="text-xl font-semibold text-gray-700 text-center">Wealth Gain vs. Investment</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" radius={[8, 8, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="md:w-1/2 border border-gray-300 rounded-lg shadow-md p-4 bg-white">
            <h2 className="text-xl font-semibold text-gray-700 text-center">Investment Breakdown</h2>
            <ResponsiveContainer width={300} height={300} className="mx-auto">
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

      <Footer />
    </div>
  );
};

export default Home;

