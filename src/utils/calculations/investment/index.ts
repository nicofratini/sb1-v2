```typescript
import { calculateCycleResults } from './cycle';
import { calculateRates } from './rates';
import type { CycleType, InvestmentSettings } from '../../types';

export function calculateMultiCycleResults(
  initialInvestment: number,
  selectedCycle: CycleType,
  settings: InvestmentSettings
) {
  const numberOfCycles = parseInt(selectedCycle);
  const totalDuration = numberOfCycles * settings.cycleDuration;
  
  const { totalReturn, netGain } = calculateCycleResults({
    initialInvestment,
    numberOfCycles,
    settings
  });

  const { totalRate, annualizedRate } = calculateRates({
    totalReturn,
    initialInvestment,
    totalDuration
  });

  const totalUnusedFundsInterest = initialInvestment * (settings.unusedFundsRate / 100);

  return {
    totalReturn,
    netGain,
    totalUnusedFundsInterest,
    totalRate,
    annualizedRate,
    totalDuration,
  };
}

export { calculateCycleResults } from './cycle';
export { calculateRates } from './rates';
```