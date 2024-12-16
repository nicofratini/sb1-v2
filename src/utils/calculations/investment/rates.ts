```typescript
interface RateCalculationParams {
  totalReturn: number;
  initialInvestment: number;
  totalDuration: number;
}

export function calculateRates({
  totalReturn,
  initialInvestment,
  totalDuration
}: RateCalculationParams) {
  const totalRate = ((totalReturn - initialInvestment) / initialInvestment) * 100;
  const annualizedRate = (Math.pow(totalReturn / initialInvestment, 12 / totalDuration) - 1) * 100;

  return {
    totalRate,
    annualizedRate
  };
}
```