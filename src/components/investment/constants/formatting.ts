```typescript
export const CURRENCY_FORMAT_OPTIONS = {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
} as const;

export const PERCENTAGE_FORMAT_OPTIONS = {
  style: 'percent',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
} as const;
```