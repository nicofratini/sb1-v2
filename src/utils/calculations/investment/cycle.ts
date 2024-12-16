```typescript
import type { InvestmentSettings } from '../../types';

interface CycleCalculationParams {
  initialInvestment: number;
  numberOfCycles: number;
  settings: InvestmentSettings;
}

export function calculateCycleResults({
  initialInvestment,
  numberOfCycles,
  settings
}: CycleCalculationParams) {
  const totalReturn = initialInvestment * Math.pow(1 + settings.globalReturnRate / 100, numberOfCycles);
  const netGain = totalReturn - initialInvestment;

  return {
    totalReturn,
    netGain
  };
}
```