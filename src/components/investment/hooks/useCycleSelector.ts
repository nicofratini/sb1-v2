```typescript
import { useState, useCallback } from 'react';
import type { CycleType } from '../../../utils/types';

export function useCycleSelector(initialCycle: CycleType = '1') {
  const [selectedCycle, setSelectedCycle] = useState<CycleType>(initialCycle);

  const handleCycleChange = useCallback((cycle: CycleType) => {
    setSelectedCycle(cycle);
  }, []);

  return {
    selectedCycle,
    handleCycleChange
  };
}
```