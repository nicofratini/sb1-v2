```typescript
interface CalculateLeverageReturnsParams {
  baseAmount: number;
  creditAmount: number;
  investmentReturnRate: number;
  creditInterestRate: number;
  duration: number;
}

export const calculateLeverageReturns = ({
  baseAmount,
  creditAmount,
  investmentReturnRate,
  creditInterestRate,
  duration
}: CalculateLeverageReturnsParams) => {
  // Calculate gross return on credit amount
  const periodGrossReturn = creditAmount * (investmentReturnRate / 100) * (duration / 12);
  
  // Calculate credit cost for the period
  const periodCreditCost = creditAmount * (creditInterestRate / 100) * (duration / 12);
  
  // Calculate net return after credit cost
  const netReturn = periodGrossReturn - periodCreditCost;

  // Calculate effective rate based on initial investment
  const effectiveRate = (netReturn / baseAmount) * 100;

  return {
    grossReturn: Math.round(periodGrossReturn),
    creditCost: Math.round(periodCreditCost),
    netReturn: Math.round(netReturn),
    effectiveRate: Math.round(effectiveRate * 100) / 100
  };
};
```