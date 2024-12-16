```typescript
import { useState, useMemo } from 'react';
import { calculateMultiCycleResults } from '../../../utils/calculations';
import { parseCurrency } from '../../../utils/formatting';
import { DEFAULT_SETTINGS } from '../constants';
import type { CycleType, InvestmentSettings } from '../../../utils/types';

export function useInvestmentCalculator() {
  const [investmentInput, setInvestmentInput] = useState('1000000');
  const [selectedCycle, setSelectedCycle] = useState<CycleType>('1');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [settings, setSettings] = useState<InvestmentSettings>(DEFAULT_SETTINGS);

  const amount = useMemo(() => 
    parseCurrency(investmentInput),
    [investmentInput]
  );

  const results = useMemo(() => 
    calculateMultiCycleResults(amount, selectedCycle, settings),
    [amount, selectedCycle, settings]
  );

  return {
    investmentInput,
    setInvestmentInput,
    selectedCycle,
    setSelectedCycle,
    isSettingsOpen,
    setIsSettingsOpen,
    settings,
    setSettings,
    amount,
    results,
  };
}
```