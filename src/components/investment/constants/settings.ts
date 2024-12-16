```typescript
import type { InvestmentSettings } from '../../settings/types';

export const DEFAULT_PAYMENT_SCHEDULE = [
  { month: 0, percentage: 5 },
  { month: 3, percentage: 30 },
  { month: 6, percentage: 20 },
  { month: 12, percentage: 15 },
  { month: 14, percentage: 20 },
  { month: 16, percentage: 5 },
  { month: 18, percentage: 5 },
] as const;

export const INVESTMENT_RATES = {
  GLOBAL_RATE: 28,
  UNUSED_FUNDS_RATE: 1,
  CYCLE_DURATION: 24,
} as const;

export const DEFAULT_SETTINGS: InvestmentSettings = {
  globalReturnRate: INVESTMENT_RATES.GLOBAL_RATE,
  unusedFundsRate: INVESTMENT_RATES.UNUSED_FUNDS_RATE,
  cycleDuration: INVESTMENT_RATES.CYCLE_DURATION,
  paymentSchedule: DEFAULT_PAYMENT_SCHEDULE,
};
```