export type CalculationResult = {
  result: number;
  error?: string;
};

export type Func = (a: number, b: number) => CalculationResult;

export const sumNumbers: Func = (addend1, addend2) => {
  return { result: addend1 + addend2 };
};
export const subtractNumbers: Func = (minuend, subtrahend) => {
  return { result: minuend - subtrahend };
};
export const multiplyNumbers: Func = (factor1, factor2) => {
  return { result: factor1 * factor2 };
};

export const divideNumbers: Func = (dividend, divisor) => {
  return {
    result: dividend / divisor,
    error: divisor === 0 ? 'Cannot divide by zero' : undefined,
  };
};
