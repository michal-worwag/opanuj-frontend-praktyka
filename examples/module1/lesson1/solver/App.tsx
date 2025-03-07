import { useState } from 'react';
import {
  sumNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers,
  type Func,
} from './functions';
import { Button } from './Button';
const App = () => {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);
  const [error, setError] = useState<string | undefined>(undefined);

  const calculate = (func: Func) => {
    const calcResult = func(firstNumber, secondNumber);
    setResult(calcResult.error ? 0 : calcResult.result);
    setError(calcResult.error || '');
  };

  const parseInputValue = (value: string): number => {
    return value === '' ? 0 : parseFloat(value);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={firstNumber || ''}
          onChange={(e) => setFirstNumber(parseInputValue(e.target.value))}
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={secondNumber || ''}
          onChange={(e) => setSecondNumber(parseInputValue(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <Button onClick={() => calculate(sumNumbers)}>+</Button>
        <Button onClick={() => calculate(subtractNumbers)}>-</Button>
        <Button onClick={() => calculate(multiplyNumbers)}>*</Button>
        <Button onClick={() => calculate(divideNumbers)}>/</Button>
      </div>
      {error ? <p>{error}</p> : <div>Result: {result}</div>}
    </div>
  );
};

export default App;
