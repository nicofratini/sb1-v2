```typescript
export interface InvestmentFormProps {
  value: string;
  onChange: (value: string) => void;
}

export interface ResultsDisplayProps {
  totalReturn: number;
  netGain: number;
  unusedFundsInterest: number;
  annualizedRate: number;
  totalRate: number;
  totalDuration: number;
  globalReturnRate: number;
}

export interface TimelineProps {
  periods: import('../../../utils/types').InvestmentPeriod[];
  cycleDuration: number;
}

export interface InterestChartProps {
  interestPeriods: import('../../../utils/types').InterestPeriod[];
  periods: import('../../../utils/types').InvestmentPeriod[];
  totalInvestment: number;
  totalReturn: number;
  unusedFundsRate: number;
  cycleDuration: number;
  selectedCycle: string;
}
```