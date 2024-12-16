```typescript
import { useMemo } from 'react';
import { calculateLeveragedResults } from '../utils/calculations/leverage';
import type { LeverageInput, LeverageMetrics } from '../utils/types';

interface UseLeverageCalculationsResult {
  metrics: LeverageMetrics;
  error: string | null;
}

export const useLeverageCalculations = (input: LeverageInput): UseLeverageCalculationsResult => {
  return useMemo(() => {
    try {
      // Validate inputs
      if (input.ltv < 0 || input.ltv > 100) {
        throw new Error('leverage.validation.ratioRange');
      }
      if (input.interestRate <= 0) {
        throw new Error('leverage.validation.positiveRate');
      }
      if (input.initialAmount <= 0) {
        throw new Error('leverage.validation.positiveInvestment');
      }
      if (input.isLeveraged && input.interestRate <= input.creditRate) {
        throw new Error('leverage.validation.returnRateHigher');
      }

      // Calculate metrics
      const metrics = calculateLeveragedResults(input);

      return { metrics, error: null };
    } catch (error) {
      return {
        metrics: {
          initialAmount: input.initialAmount,
          creditAmount: 0,
          totalAvailable: input.initialAmount,
          grossReturn: 0,
          creditCost: 0,
          netReturn: 0,
          returnRate: 0
        },
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }, [input]);
};
```