```typescript
import React from 'react';
import { Card, CardContent } from '../../ui/card';
import { useTranslation } from 'react-i18next';
import { formatCurrency, formatPercentage } from '../../../utils/formatting';
import type { LeverageMetrics } from '../../../utils/types/leverage';

interface LeverageReturnSummaryProps {
  metrics: LeverageMetrics;
}

const LeverageReturnSummary: React.FC<LeverageReturnSummaryProps> = ({ metrics }) => {
  const { t } = useTranslation();

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">
          {t('leverage.results.summary.title')}
        </h3>
        
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">
                {t('leverage.results.summary.initialInvestment')}
              </p>
              <p className="text-lg font-semibold">
                {formatCurrency(metrics.initialAmount)}
              </p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">
                {t('leverage.results.summary.creditAmount')}
              </p>
              <p className="text-lg font-semibold">
                {formatCurrency(metrics.creditAmount)}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">
                  {t('leverage.results.summary.grossReturn')}
                </p>
                <p className="text-lg font-semibold text-green-600">
                  {formatCurrency(metrics.grossReturn)}
                </p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">
                  {t('leverage.results.summary.creditCost')}
                </p>
                <p className="text-lg font-semibold text-red-600">
                  {formatCurrency(metrics.creditCost)}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">
                  {t('leverage.results.summary.netReturn')}
                </p>
                <p className={`text-lg font-semibold ${
                  metrics.netReturn >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {formatCurrency(metrics.netReturn)}
                </p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">
                  {t('leverage.results.summary.returnRate')}
                </p>
                <p className={`text-lg font-semibold ${
                  metrics.returnRate >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {formatPercentage(metrics.returnRate)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeverageReturnSummary;
```