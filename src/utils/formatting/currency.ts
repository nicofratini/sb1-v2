```typescript
import { FORMATTING } from '../../components/investment/constants';

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat(
    FORMATTING.currency.locale, 
    FORMATTING.currency.options
  ).format(amount);
};

export const parseCurrency = (value: string): number => {
  const cleanValue = value.replace(/[^\d.,]/g, '');
  const numberValue = cleanValue.replace(',', '.');
  return Number(numberValue) || 0;
};
```