```typescript
export type CycleType = '1' | '2' | '3';

export interface InvestmentSettings {
  globalReturnRate: number;
  unusedFundsRate: number;
  cycleDuration: number;
  paymentSchedule: Array<{
    month: number;
    percentage: number;
  }>;
}

export interface CalculationResults {
  totalReturn: number;
  netGain: number;
  totalUnusedFundsInterest: number;
  annualizedRate: number;
  totalRate: number;
  totalDuration: number;
}

export * from './investment';
export * from './leverage';
export * from './chart';
```