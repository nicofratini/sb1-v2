```typescript
export interface PaymentScheduleItem {
  month: number;
  percentage: number;
}

export interface InvestmentSettings {
  globalReturnRate: number;
  unusedFundsRate: number;
  cycleDuration: number;
  paymentSchedule: PaymentScheduleItem[];
}
```