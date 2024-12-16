```typescript
import { useMemo } from 'react';
import { calculateMultiCycleResults } from '../../../utils/calculations';
import type { InvestmentSettings } from '../../settings/types';
import type { CycleType } from '../../../utils/types';

interface UseInvestmentResultsProps {
  amount: number;
  selectedCycle: CycleType;
  settings: InvestmentSettings;
}

export function useInvestmentResults({ amount, selectedCycle, settings }: UseInvestmentResultsProps) {
  const results = useMemo(() => 
    calculateMultiCycleResults(amount, selectedCycle, settings),
    [amount, selectedCycle, settings]
  );

  return results;
}
```