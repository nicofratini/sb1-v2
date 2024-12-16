```typescript
import type { LeverageInput, LeverageResults } from '../../types';

/**
 * Calculate leveraged investment results
 */
export const calculateLeveragedResults = (input: LeverageInput): LeverageResults => {
  const { initialAmount, ltv, interestRate, creditRate, isLeveraged } = input;
  
  if (!isLeveraged) {
    return {
      initialAmount,
      creditAmount: 0,
      totalAvailable: initialAmount,
      grossReturn: initialAmount * (interestRate / 100),
      creditCost: 0,
      netReturn: initialAmount * (interestRate / 100),
      returnRate: interestRate
    };
  }
  
  // Calculate credit amount based on LTV ratio
  const creditAmount = Math.round((initialAmount * ltv) / 100);
  
  // Use credit amount as base for calculations when leverage is enabled
  const grossReturn = creditAmount * (interestRate / 100);
  const creditCost = creditAmount * (creditRate / 100);
  const netReturn = grossReturn - creditCost;

  return {
    initialAmount,
    creditAmount,
    totalAvailable: initialAmount + creditAmount,
    grossReturn,
    creditCost,
    netReturn,
    returnRate: (netReturn / initialAmount) * 100
  };
};
```