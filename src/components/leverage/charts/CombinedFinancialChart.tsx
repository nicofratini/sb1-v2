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
import { useTranslation } from 'react-i18next';
import { formatCurrency } from '../../../utils/formatting';
import type { LeverageMetrics } from '../../../utils/types/leverage';

interface CombinedFinancialChartProps {
  metrics: LeverageMetrics;
}

export const CombinedFinancialChart: React.FC<CombinedFinancialChartProps> = ({ metrics }) => {
  const { t } = useTranslation();

  // Ensure metrics exists before using it
  if (!metrics) {
    return null;
  }

  const chartData = [
    {
      period: t('leverage.chart.phases.initial'),
      amount: metrics.initialAmount,
      credit: 0,
      totalAvailable: metrics.initialAmount
    },
    {
      period: t('leverage.chart.phases.leverageApplied'),
      amount: metrics.initialAmount,
      credit: metrics.creditAmount,
      totalAvailable: metrics.initialAmount + metrics.creditAmount
    },
    {
      period: t('leverage.chart.phases.returnPhase'),
      amount: metrics.initialAmount + metrics.grossReturn,
      credit: metrics.creditAmount - metrics.creditCost,
      totalAvailable: metrics.initialAmount + metrics.grossReturn + metrics.creditAmount - metrics.creditCost
    }
  ];

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.5} />
          <XAxis 
            dataKey="period" 
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={(value) => formatCurrency(value)}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            formatter={(value: number) => formatCurrency(value)}
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="amount"
            name={t('leverage.chart.legend.investmentAmount')}
            stroke="#2196F3"
            strokeWidth={2}
            dot={{ strokeWidth: 2 }}
          />
          <Line
            type="monotone"
            dataKey="credit"
            name={t('leverage.chart.legend.creditAmount')}
            stroke="#FF9800"
            strokeWidth={2}
            dot={{ strokeWidth: 2 }}
          />
          <Line
            type="monotone"
            dataKey="totalAvailable"
            name={t('leverage.chart.legend.totalAvailable')}
            stroke="#4CAF50"
            strokeWidth={2}
            dot={{ strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};