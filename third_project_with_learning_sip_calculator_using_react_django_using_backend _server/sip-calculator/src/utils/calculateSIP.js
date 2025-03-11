export const calculateSIP = (monthlyInvestment, annualReturn, investmentPeriod, inflationRate = 0) => {
    const monthlyRate = annualReturn / 12 / 100;  // Convert to monthly return
    const inflationMonthlyRate = inflationRate / 12 / 100;  // Convert to monthly inflation
    const realMonthlyRate = ((1 + monthlyRate) / (1 + inflationMonthlyRate)) - 1; // Adjust for inflation
    const months = investmentPeriod * 12;

    const maturityAmount = monthlyInvestment * ((Math.pow(1 + realMonthlyRate, months) - 1) / realMonthlyRate) * (1 + realMonthlyRate);

    return Math.round(maturityAmount); // Round to nearest ₹
};



