```typescript
import React from 'react';
import { MetricCard } from './MetricCard';
import { useTranslation } from 'react-i18next';
import { formatCurrency, formatPercentage } from '../../../utils/formatting';
import type { LeverageMetrics } from '../../../utils/types/leverage';

interface LeverageMetricsGridProps {
  metrics: LeverageMetrics;
}

const LeverageMetricsGrid: React.FC<LeverageMetricsGridProps> = ({ metrics }) => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-2 gap-4">
      <MetricCard
        title={t('leverage.metrics.initialAmount')}
        value={formatCurrency(metrics.initialAmount)}
        description={t('leverage.metrics.initialAmountDesc')}
      />
      
      <MetricCard
        title={t('leverage.metrics.creditAmount')}
        value={formatCurrency(metrics.creditAmount)}
        description={t('leverage.metrics.creditAmountDesc')}
      />

      <MetricCard
        title={t('leverage.metrics.grossReturn')}
        value={formatCurrency(metrics.grossReturn)}
        trend={metrics.grossReturn > 0 ? 'positive' : 'negative'}
        description={t('leverage.metrics.grossReturnDesc')}
      />

      <MetricCard
        title={t('leverage.metrics.creditCost')}
        value={formatCurrency(metrics.creditCost)}
        trend="negative"
        description={t('leverage.metrics.creditCostDesc')}
      />

      <MetricCard
        title={t('leverage.metrics.netReturn')}
        value={formatCurrency(metrics.netReturn)}
        trend={metrics.netReturn > 0 ? 'positive' : 'negative'}
        description={t('leverage.metrics.netReturnDesc')}
      />

      <MetricCard
        title={t('leverage.metrics.returnRate')}
        value={formatPercentage(metrics.returnRate)}
        trend={metrics.returnRate > 0 ? 'positive' : 'negative'}
        description={t('leverage.metrics.returnRateDesc')}
      />
    </div>
  );
};

export default LeverageMetricsGrid;
```