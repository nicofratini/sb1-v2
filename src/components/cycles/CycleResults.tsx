```typescript
import React from 'react';
import { motion } from 'framer-motion';
import { CycleCard } from './CycleCard';
import { CycleMetrics } from './CycleMetrics';
import { useTranslation } from 'react-i18next';
import type { CycleResult } from '../../utils/types/investment';

interface CycleResultsProps {
  cycles: CycleResult[];
  hasLeverage: boolean;
}

const CycleResults: React.FC<CycleResultsProps> = ({ cycles, hasLeverage }) => {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="space-y-6"
    >
      <h2 className="text-xl font-semibold text-gray-900">
        {t('cycles.details.title')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cycles.map((cycle, index) => (
          <CycleCard
            key={cycle.cycleNumber}
            cycle={cycle}
            index={index}
            hasLeverage={hasLeverage}
          />
        ))}
      </div>

      <CycleMetrics cycles={cycles} />
    </motion.section>
  );
};

export default CycleResults;
```