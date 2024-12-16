```typescript
import React from 'react';
import { AppLayout } from './components/layout';
import { InvestmentCalculator } from './components/investment';

const App: React.FC = () => {
  return (
    <AppLayout>
      <InvestmentCalculator />
    </AppLayout>
  );
};

export default App;
```