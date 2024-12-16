```typescript
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { formatCurrency } from '../../utils/formatting';
import { useTranslation } from 'react-i18next';
import type { CycleResult } from '../../utils/types/investment';

interface CycleCardProps {
  cycle: CycleResult;
  index: number;
  hasLeverage: boolean;
}

const CycleCard: React.FC<CycleCardProps> = ({ cycle, index, hasLeverage }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        {t('cycles.details.cycleNumber', { number: cycle.cycleNumber })}
      </h3>

      <div className="flex items-center justify-between mb-6">
        <div className="text-sm text-gray-600">
          {t('cycles.details.initialAmount')}
          <div className="font-semibold text-gray-900">
            {formatCurrency(cycle.initialAmount)}
          </div>
        </div>
        <ArrowRight className="w-5 h-5 text-gray-400" />
        <div className="text-sm text-gray-600 text-right">
          {t('cycles.details.finalAmount')}
          <div className="font-semibold text-gray-900">
            {formatCurrency(cycle.finalAmount)}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {hasLeverage && (
          <>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">{t('cycles.details.grossReturn')}</span>
              <span className="font-semibold text-green-600">
                {formatCurrency(cycle.grossReturn)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">{t('cycles.details.creditCost')}</span>
              <span className="font-semibold text-red-600">
                {formatCurrency(cycle.creditCost)}
              </span>
            </div>
          </>
        )}
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">{t('cycles.details.netGain')}</span>
          <span className="font-semibold text-green-600">
            {formatCurrency(cycle.netGain)}
          </span>
        </div>
        {cycle.creditUsed > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">{t('cycles.details.creditUsed')}</span>
            <span className="font-semibold text-blue-600">
              {formatCurrency(cycle.creditUsed)}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CycleCard;
```