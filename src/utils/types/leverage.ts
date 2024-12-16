export interface LeverageSettings {
  enabled: boolean;
  ratio: number;
  interestRate: number;
  investmentReturnRate: number;
  duration: number;
}

export interface LeverageMetrics {
  initialAmount: number;
  creditAmount: number;
  totalAvailable: number;
  grossReturn: number;
  creditCost: number;
  netReturn: number;
  returnRate: number;
}

export interface RepaymentScheduleItem {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  remainingBalance: number;
  cumulativeInterest: number;
  investmentReturn: number;
  cumulativeInvestmentReturn: number;
  netCashFlow: number;
  usedCredit: number;
  totalPrincipalRepaid: number;
}