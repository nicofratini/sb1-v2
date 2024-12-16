import type { InvestmentSettings } from '../components/SettingsDialog';
import type { CycleType } from './types';
import type { LeverageSettings } from './types/leverage';
import type { CycleResult, InvestmentPeriod, InterestPeriod } from './types/investment';

export const calculateMultiCycleResults = (
  initialInvestment: number,
  selectedCycle: CycleType,
  settings: InvestmentSettings,
  leverageSettings?: LeverageSettings
) => {
  const numberOfCycles = parseInt(selectedCycle);
  const cycles: CycleResult[] = [];
  const allPeriods: InvestmentPeriod[] = [];
  const allInterestPeriods: InterestPeriod[] = [];
  
  // Calculate credit amount if leverage is enabled
  const hasLeverage = leverageSettings?.enabled || false;
  const creditAmount = hasLeverage 
    ? Math.round((initialInvestment * leverageSettings!.ratio) / 100)
    : 0;

  // Use credit amount as base for calculations when leverage is enabled
  let currentAmount = hasLeverage ? creditAmount : initialInvestment;
  let totalUnusedFundsInterest = 0;

  for (let i = 0; i < numberOfCycles; i++) {
    const startMonth = i * settings.cycleDuration;
    const { periods, interestPeriods } = calculateSingleCycleResults(
      currentAmount,
      startMonth,
      i + 1,
      settings,
      creditAmount
    );

    // Calculate cycle interest
    const cycleInterest = interestPeriods.reduce(
      (sum, period) => sum + period.monthlyInterest * (period.endMonth - period.startMonth),
      0
    );

    totalUnusedFundsInterest += cycleInterest;
    
    // Calculate returns based on global rate
    const grossReturn = currentAmount * (settings.globalReturnRate / 100);
    const creditCost = hasLeverage 
      ? creditAmount * (leverageSettings!.interestRate / 100) * (settings.cycleDuration / 12)
      : 0;
    
    const cycleFinalAmount = currentAmount + grossReturn - creditCost + cycleInterest;

    cycles.push({
      cycleNumber: i + 1,
      initialAmount: currentAmount,
      finalAmount: cycleFinalAmount,
      netGain: cycleFinalAmount - (hasLeverage ? initialInvestment : currentAmount),
      unusedFundsInterest: cycleInterest,
      creditUsed: creditAmount,
      grossReturn,
      creditCost
    });

    currentAmount = cycleFinalAmount;
    allPeriods.push(...periods);
    allInterestPeriods.push(...interestPeriods);
  }

  const totalReturn = currentAmount;
  const totalDuration = numberOfCycles * settings.cycleDuration;
  const netGain = totalReturn - initialInvestment;
  const totalRate = (netGain / initialInvestment) * 100;
  const annualizedRate = (Math.pow(totalReturn / initialInvestment, 12 / totalDuration) - 1) * 100;

  return {
    cycles,
    periods: allPeriods,
    interestPeriods: allInterestPeriods,
    totalReturn,
    netGain,
    totalUnusedFundsInterest,
    totalRate,
    annualizedRate,
    totalDuration,
  };
};

const calculateSingleCycleResults = (
  investmentAmount: number,
  startMonth: number,
  cycleNumber: number,
  settings: InvestmentSettings,
  creditAmount: number = 0
): { periods: InvestmentPeriod[]; interestPeriods: InterestPeriod[] } => {
  let remainingAmount = investmentAmount;
  let totalFundCalls = 0;

  const periods = settings.paymentSchedule.map(period => {
    const amount = (investmentAmount * period.percentage) / 100;
    totalFundCalls += amount;
    remainingAmount = Math.max(0, remainingAmount - amount);

    return {
      month: startMonth + period.month,
      percentage: period.percentage,
      amount,
      remainingAfterCall: remainingAmount,
      creditUsed: creditAmount,
      cycle: cycleNumber,
      totalFundCalls
    };
  });

  // Sort periods by month
  periods.sort((a, b) => a.month - b.month);

  // Calculate interest periods
  const interestPeriods: InterestPeriod[] = [];
  let currentMonth = startMonth;
  let lastPeriod = periods[0];

  periods.forEach((period, index) => {
    if (period.month > currentMonth) {
      interestPeriods.push({
        startMonth: currentMonth,
        endMonth: period.month,
        monthlyInterest: (lastPeriod.remainingAfterCall * (settings.unusedFundsRate / 100)) / 12,
        unusedAmount: lastPeriod.remainingAfterCall,
      });
    }
    currentMonth = period.month;
    lastPeriod = period;
  });

  return { periods, interestPeriods };
};