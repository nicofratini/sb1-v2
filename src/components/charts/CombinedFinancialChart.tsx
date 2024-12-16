import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { ChartLegend } from './ChartLegend';
import { ChartTooltip } from './ChartTooltip';
import type { ChartDataPoint } from '../../utils/types/chart';
import type { LeverageMetrics } from '../../utils/types/leverage';

interface CombinedFinancialChartProps {
  data: ChartDataPoint[];
  finalReturn: number;
  totalInvestment: number;
  unusedFundsRate: number;
  cycleDuration: number;
  selectedCycle: number;
  leverageMetrics?: LeverageMetrics;
}

export const CombinedFinancialChart: React.FC<CombinedFinancialChartProps> = ({
  data,
  finalReturn,
  totalInvestment,
  unusedFundsRate,
  cycleDuration,
  selectedCycle,
  leverageMetrics
}) => {
  if (!data?.length) {
    return null;
  }

  return (
    <div className="space-y-4">
      <ChartLegend unusedFundsRate={unusedFundsRate} />
      
      <ResponsiveContainer width="100%" height={500}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.5} />
          <XAxis 
            dataKey="month"
            tickFormatter={(value) => `M${value}`}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={(value) => `${Math.round(value / 1000)}k€`}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<ChartTooltip />} />
          <Legend />
          
          <Line
            type="stepAfter"
            dataKey="unusedFunds"
            name="Fonds non utilisés"
            stroke="#10B981"
            fill="#10B981"
            strokeWidth={2}
            dot={false}
          />
          
          <Line
            type="monotone"
            dataKey="cumulativeInterest"
            name="Intérêts cumulés"
            stroke="#3B82F6"
            fill="#3B82F6"
            strokeWidth={2}
            dot={false}
          />

          {leverageMetrics && (
            <Line
              type="monotone"
              dataKey="creditAmount"
              name="Crédit utilisé"
              stroke="#F59E0B"
              fill="#F59E0B"
              strokeWidth={2}
              dot={false}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};