```typescript
export interface CycleResult {
  cycleNumber: number;
  initialAmount: number;
  finalAmount: number;
  netGain: number;
  unusedFundsInterest: number;
  creditUsed: number;
  grossReturn: number;
  creditCost: number;
}

export interface InvestmentPeriod {
  month: number;
  percentage: number;
  amount: number;
  remainingAfterCall: number;
  cycle: number;
  creditUsed?: number;
  totalFundCalls: number;
}

export interface InterestPeriod {
  startMonth: number;
  endMonth: number;
  monthlyInterest: number;
  unusedAmount: number;
}

export interface ChartDataPoint {
  month: number;
  unusedFunds: number;
  cumulativeInterest: number;
  monthlyInterest: number;
  fundCall?: number;
  cycleEnd?: number;
  cycleNumber: number;
  creditAmount?: number;
}
```