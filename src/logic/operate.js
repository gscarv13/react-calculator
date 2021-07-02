import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  let result = Big(0);
  const x = Big(numberOne);
  const y = Big(numberTwo);

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
    case '/':
      result = x.div(y);
      break;
    default:
      throw new Error('invalid operator');
  }
  return result.toString();
}
