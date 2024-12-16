```typescript
import { useState, useCallback } from 'react';
import { formatCurrency, parseCurrency } from '../../../utils/formatting';

export function useInvestmentForm(initialValue: string = '1000000') {
  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback((newValue: string) => {
    const cleanValue = newValue.replace(/[^\d,]/g, '');
    setValue(cleanValue);
  }, []);

  const handleCalculate = useCallback(() => {
    const numericValue = parseCurrency(value);
    if (numericValue) {
      setValue(formatCurrency(numericValue));
    }
  }, [value]);

  return {
    value,
    handleChange,
    handleCalculate
  };
}
```