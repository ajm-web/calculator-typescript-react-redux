

export interface UnaryOperation {
  name: string;
  operator: string;
  operation: (n: number) => number;
}

export const operations = {
  PERCENTAGE: {
    name: "percentage",
    operator: "%",
    operation: (n: number) => n / 100
  },
  FLIP: {
    name: "flip",
    operator: "+/-",
    operation: (n: number) => n * -1
  }
};
