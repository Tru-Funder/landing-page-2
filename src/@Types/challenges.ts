interface TradingChallenge {
  profitTarget: string;
  dailyDrawdown: string;
  totalDrawdown: string;
  timeLimit: string;
  payout?: string;
  salaryPerMonth?: string;
}

interface Verification {
  profitTarget: string;
  dailyDrawdown: string;
  totalDrawdown: string;
  timeLimit: string;
  payout?: string;
  salaryPerMonth?: string;
}

interface LiveSimulation {
  profitTarget: string;
  dailyDrawdown: string;
  totalDrawdown: string;
  timeLimit: string;
  payout: string;
  salaryPerMonth: string;
}

interface AccountSize {
  size: string;
  registrationFee: string;
  tradingChallenge?: TradingChallenge;
  verification?: Verification;
  liveSimulation?: LiveSimulation;
}

export interface AccountType {
  accountType: string;
  accountSizes: AccountSize[];
}
