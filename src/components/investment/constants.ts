```typescript
import type { InvestmentSettings } from '../../utils/types';

export const DEFAULT_SETTINGS: InvestmentSettings = {
  globalReturnRate: 28,
  unusedFundsRate: 1,
  cycleDuration: 24,
  paymentSchedule: [
    { month: 0, percentage: 5 },
    { month: 3, percentage: 30 },
    { month: 6, percentage: 20 },
    { month: 12, percentage: 15 },
    { month: 14, percentage: 20 },
    { month: 16, percentage: 5 },
    { month: 18, percentage: 5 },
  ],
};

export const FORMATTING = {
  currency: {
    locale: 'fr-FR',
    options: {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    },
  },
  percentage: {
    locale: 'fr-FR',
    options: {
      style: 'percent',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
  },
};
```