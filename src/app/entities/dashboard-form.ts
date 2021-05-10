export interface DashboardForm {
  paymentPlan: {
    mortgageAmount: number;
    interestRate: number;
    amortizationPeriod: number;
    paymentFrequency: number;
    term: number;
  };
  prepaymentPlan: {
    prepaymentAmount: number;
    prepaymentFrequency: string;
    startWithPayment: number;
  };
}
