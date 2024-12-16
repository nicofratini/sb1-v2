import React from 'react';
import { CombinedFinancialChart } from './charts/CombinedFinancialChart';
import { processChartData } from '../utils/chartDataProcessing';
import type { InterestPeriod, InvestmentPeriod } from '../utils/types/investment';
import type { LeverageMetrics } from '../utils/types/leverage';

interface InterestChartProps {
  interestPeriods: InterestPeriod[];
  periods: InvestmentPeriod[];
  totalInvestment: number;
  totalReturn: number;
  unusedFundsRate: number;
  cycleDuration: number;
  selectedCycle: string;
  leverageMetrics?: LeverageMetrics;
}

export const InterestChart: React.FC<InterestChartProps> = ({
  interestPeriods,
  periods,
  totalInvestment,
  totalReturn,
  unusedFundsRate,
  cycleDuration,
  selectedCycle,
  leverageMetrics
}) => {
  const chartData = React.useMemo(() => {
    return processChartData(
      interestPeriods,
      periods,
      totalInvestment,
      totalReturn,
      cycleDuration,
      parseInt(selectedCycle)
    );
  }, [interestPeriods, periods, totalInvestment, totalReturn, cycleDuration, selectedCycle]);

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 h-[600px]">
      <CombinedFinancialChart
        data={chartData}
        finalReturn={totalReturn}
        totalInvestment={totalInvestment}
        unusedFundsRate={unusedFundsRate}
        cycleDuration={cycleDuration}
        selectedCycle={parseInt(selectedCycle)}
        leverageMetrics={leverageMetrics}
      />
    </div>
  );
};