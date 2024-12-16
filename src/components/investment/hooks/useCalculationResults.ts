```typescript
import { useMemo } from 'react';
import { calculateMultiCycleResults } from '../../../utils/calculations/investment';
import type { CycleType, InvestmentSettings } from '../../../utils/types';

interface UseCalculationResultsParams {
  amount: number;
  selectedCycle: CycleType;
  settings: InvestmentSettings;
}

export function useCalculationResults({
  amount,
  selectedCycle,
  settings
}: UseCalculationResultsParams) {
  return useMemo(() => 
    calculateMultiCycleResults(amount, selectedCycle, settings),
    [amount, selectedCycle, settings]
  );
}
```