```typescript
import React from 'react';
import { motion } from 'framer-motion';
import { useInvestmentCalculator } from './hooks';
import { InvestmentForm, ResultsDisplay, CycleSelector } from './components';
import { SettingsDialog } from '../settings/SettingsDialog';

export const InvestmentCalculator: React.FC = () => {
  const {
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
  } = useInvestmentCalculator();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <InvestmentForm 
        value={investmentInput}
        onChange={setInvestmentInput}
      />
      
      <CycleSelector
        selectedCycle={selectedCycle}
        onChange={setSelectedCycle}
        cycleDuration={settings.cycleDuration}
      />

      <ResultsDisplay
        totalReturn={results.totalReturn}
        netGain={results.netGain}
        unusedFundsInterest={results.totalUnusedFundsInterest}
        annualizedRate={results.annualizedRate}
        totalRate={results.totalRate}
        totalDuration={results.totalDuration}
        globalReturnRate={settings.globalReturnRate}
      />

      <SettingsDialog
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={settings}
        onSave={setSettings}
      />
    </motion.div>
  );
};
```