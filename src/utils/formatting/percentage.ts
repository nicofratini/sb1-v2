```typescript
import { FORMATTING } from '../../components/investment/constants';

export const formatPercentage = (value: number): string => {
  return new Intl.NumberFormat(
    FORMATTING.percentage.locale, 
    FORMATTING.percentage.options
  ).format(value / 100);
};

export const parsePercentage = (value: string): number => {
  const cleanValue = value.replace(/[^\d.,]/g, '');
  const numberValue = cleanValue.replace(',', '.');
  return Number(numberValue) || 0;
};
```