```typescript
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, LineChart, Percent } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { formatCurrency, formatPercentage } from '../../../utils/formatting';

interface ResultsDisplayProps {
  totalReturn: number;
  netGain: number;
  unusedFundsInterest: number;
  annualizedRate: number;
  totalRate: number;
  totalDuration: number;
  globalReturnRate: number;
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({
  totalReturn,
  netGain,
  unusedFundsInterest,
  annualizedRate,
  totalRate,
  totalDuration,
  globalReturnRate
}) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <ResultCard
        icon={<TrendingUp className="w-8 h-8 text-green-500" />}
        title={t('results.totalReturn.title')}
        value={formatCurrency(totalReturn)}
        description={t('results.totalReturn.description', {
          rate: globalReturnRate,
          duration: totalDuration,
          interest: formatCurrency(unusedFundsInterest)
        })}
      />

      <ResultCard
        icon={<LineChart className="w-8 h-8 text-blue-500" />}
        title={t('results.netGain.title')}
        value={formatCurrency(netGain)}
        description={t('results.netGain.description')}
      />

      <ResultCard
        icon={<Percent className="w-8 h-8 text-purple-500" />}
        title={t('results.globalRate.title')}
        value={formatPercentage(totalRate)}
        description={t('results.globalRate.description', { duration: totalDuration })}
      />

      <ResultCard
        icon={<TrendingUp className="w-8 h-8 text-amber-500" />}
        title={t('results.annualRate.title')}
        value={formatPercentage(annualizedRate)}
        description={t('results.annualRate.description')}
      />
    </motion.div>
  );
};

interface ResultCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
}

const ResultCard: React.FC<ResultCardProps> = ({ icon, title, value, description }) => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <div className="flex items-center space-x-3">
      {icon}
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-xl font-bold text-gray-900">{value}</p>
        <p className="text-xs text-gray-500 mt-1">{description}</p>
      </div>
    </div>
  </div>
);
```