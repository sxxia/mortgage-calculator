export interface Results {
  amortization: {
    numberOfPayment: number;
    monthlyAmount: number;
    prepayment: number;
    principalPayment: number;
    interestPayment: number;
    totalAmount: number;
  };
  term: {
    numberOfPayment: number;
    monthlyAmount: number;
    prepayment: number;
    principalPayment: number;
    interestPayment: number;
    totalAmount: number;
  };
}
