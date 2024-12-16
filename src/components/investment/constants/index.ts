```typescript
export * from './settings';
export * from './formatting';

export const DEFAULT_INVESTMENT_AMOUNT = '1000000';

export const INVESTMENT_RATES = {
  GLOBAL_RATE: 28,
  UNUSED_FUNDS_RATE: 1,
  CYCLE_DURATION: 24,
} as const;
```