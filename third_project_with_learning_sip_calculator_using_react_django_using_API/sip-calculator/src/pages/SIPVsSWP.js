import React from "react";

const SIPVsSWP = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-32 pt-20 pb-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">SIP vs SWP: Understanding the Difference</h1>
      <p className="mb-4">
        Let's try to understand what SIP and SWP are, how they work, and how they're different.
      </p>
      <p className="mb-4">
        In India, you must have seen the TV Advertisement about Mutual Funds that goes with the tagline - 
        “Mutual Funds Sahi Hai” which means “Mutual Funds is right”. When it comes to investment and attracting 
        retail investors, Mutual Funds have come a long way. Retail investors consisting of small investors like government 
        employees, salaried professionals, self-employed individuals, and businessmen have found a convenient way of 
        investing through Mutual Funds instead of fixed deposits (FDs).
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">What is SIP & How it Works</h2>
      <p className="mb-4">
        SIP (Systematic Investment Plan) is an investment scheme where you predetermine the amount of money to be 
        debited from your bank account every month at a fixed date. Each month, the money buys units of a mutual fund, 
        averaging the cost and reducing volatility risk.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">What is SWP & How it Works</h2>
      <p className="mb-4">
        SWP (Systematic Withdrawal Plan) allows investors to withdraw a fixed amount monthly from their mutual fund. 
        This is useful for those seeking regular income while keeping their investment active.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">SIP Vs SWP - Key Differences</h2>
      <ul className="list-disc ml-6 space-y-3">
        <li><strong>Purpose:</strong> SIP is for systematic investment, while SWP is for systematic withdrawals.</li>
        <li><strong>Holding:</strong> SIP increases units over time, whereas SWP decreases them.</li>
        <li><strong>Cash Flow:</strong> SIP involves negative cash flow (investment), while SWP results in positive cash flow (withdrawal).</li>
        <li><strong>Target Investors:</strong> SIP suits long-term investors, while SWP is best for those needing regular income.</li>
      </ul>
      <p className="mt-6">
        In conclusion, SIP is ideal for building wealth systematically over time, while SWP is suitable for those who want 
        a steady stream of income after accumulating enough wealth.
      </p>
      <p className="mt-4 text-sm text-gray-600">
        Author: Ambuj Kumar. Visit <a href="https://cagrcalculator.net" className="text-blue-600 underline">CAGR Calculator</a> 
        to calculate compound annual growth rate for any assets or investments.
      </p>
    </div>
  );
};

export default SIPVsSWP;
