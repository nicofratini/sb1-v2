export interface ChartDataPoint {
  month: number;
  unusedFunds: number;
  cumulativeInterest: number;
  monthlyInterest: number;
  fundCall?: number;
  cycleEnd?: number;
  cycleNumber: number;
  creditAmount?: number;
}