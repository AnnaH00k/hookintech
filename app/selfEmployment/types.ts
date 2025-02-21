export interface BusinessIdea {
  id: string;
  title: string;
  description: string;
  potentialRevenue: number;
  timeToMarket: string;
  priority: "high" | "medium" | "low";
  links?: string[];
  documents?: {
    name: string;
    url: string;
  }[];
  metadata?: {
    marketSize: string;
    pricing: {
      free: string;
      premium: {
        individual: number;
        schools: number;
      };
    };
    features: string[];
    competition: string[];
    revenueProjection: {
      year1: number;
      year5: number;
      year10: number;
      total10Years: number;
    };
  };
}

export interface FinancialEntry {
  date: string;
  amount: number;
  description: string;
  type: "income" | "expense";
}

export interface TodoItem {
  id: string;
  task: string;
  priority: "high" | "medium" | "low";
  completed: boolean;
  deadline?: string;
}

export interface ChartDataPoint {
  date: string;
  balance: number;
  income?: number;
  expense?: number;
}
