import React from "react";

const SipVsLumpsum = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 pt-16">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-blue-600 text-center">
        SIP vs Lumpsum Investment
      </h1>
      <p className="text-gray-700 text-center mt-2">
        Simple and easy to understand - side by side comparison to help you figure out which is better!
      </p>

      {/* Introduction */}
      <div className="mt-6 text-gray-800 leading-relaxed">
        <p>
          This article is written for absolute beginners who are just starting out in the investment world when it comes to investment in securities.
          Some links to studies are mentioned if you want to know more about the difference in returns.
        </p>
        <p className="mt-2">
          In general, we recommend going via the <span className="font-bold">SIP route</span> because it’s the most practical way for most of us who have a steady monthly income. 
          Set aside an amount and invest it on the first week of every month. If you have a large amount of cash waiting to be deployed in the equity market, then it’s more likely better to invest as soon as possible instead of waiting for a dip.
        </p>
        <p className="mt-2">
          If you're going ahead with SIP route, use this <span className="text-blue-600 font-semibold">SIP Calculator</span> to help you project returns for your goals or the retirement portfolio.
        </p>
        <p className="mt-2 font-bold text-lg">
          Here is a side by side comparison to give you a rough idea - but you should know that <span className="text-red-600">"Time in the market is better than timing the market."</span>
        </p>
      </div>

      {/* SIP vs Lumpsum Table */}
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-2 px-4 border">Feature</th>
              <th className="py-2 px-4 border">SIP (Systematic Investment Plan)</th>
              <th className="py-2 px-4 border">Lumpsum Investment</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="bg-gray-100">
              <td className="py-2 px-4 border font-semibold">Beginner Friendly</td>
              <td className="py-2 px-4 border">
                Yes. Most fund houses support automatic deduction of monthly installment via bank mandate. Once setup, no extra effort is needed.
              </td>
              <td className="py-2 px-4 border">
                Not as easy as SIP. Requires careful research before investing a lump sum amount.
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border font-semibold">Flexibility</td>
              <td className="py-2 px-4 border">
                Very flexible. You can start with ₹1000/month and increase it later. Switching funds is also easier.
              </td>
              <td className="py-2 px-4 border">
                No limits or restrictions, but switching funds requires withdrawal and may have tax implications.
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="py-2 px-4 border font-semibold">Volatility & Risk</td>
              <td className="py-2 px-4 border">
                Reduces timing risk by investing at regular intervals, benefiting from cost averaging.
              </td>
              <td className="py-2 px-4 border">
                Higher risk if markets drop after investment. However, long-term investing minimizes this impact.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Conclusion */}
      <div className="mt-6 text-gray-800 leading-relaxed">
        <p>
          Investing via <span className="font-bold">SIP</span> makes it easier to stay consistent and disciplined in your investment journey. However, if you have a large sum of money, investing early in a lump sum might be beneficial instead of waiting for market dips.
        </p>
        <p className="mt-4">
          Learn more about investment strategies at:{" "}
          <a
            href="https://www.indiainvestments.wiki"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            India Investments Wiki
          </a>
        </p>
      </div>
    </div>
  );
};

export default SipVsLumpsum;

