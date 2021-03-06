import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  let result = Big(0);
  const x = numberOne !== null ? Big(numberOne) : Big(0);
  const y = numberTwo !== null ? Big(numberTwo) : Big(0);

  switch (operation) {
    case '-':
      result = x.minus(y);
      break;
    case '+':
      result = x.plus(y);
      break;
    case '*':
      result = x.times(y);
      break;
    case '÷':
      if (y.valueOf() === '0') {
        result = 'Error';
      } else {
        result = x.div(y);
      }

      break;
    case '%':
      if (y.valueOf() === '0') {
        result = x.div(100);
      } else {
        result = (y.div(100)).times(x);
      }
      break;
    default:
      throw new Error('invalid operator');
  }
  return result.toString();
}
