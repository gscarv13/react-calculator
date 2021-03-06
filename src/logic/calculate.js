import Operate from './operate';

export default function calculate(dataObj, btnName) {
  let { total, next, operation } = dataObj;
  const operations = ['+', '-', '*', '÷'];
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  switch (true) {
    case numbers.includes(btnName):
      if (total === null || total === 'Error') {
        total = btnName;
      } else if (operation && next === null) {
        next = btnName;
      } else if (operation && next) {
        next += btnName;
      } else if (total && operation === null) {
        total += btnName;
      }
      break;
    case operations.includes(btnName):
      if (operation && next) {
        total = Operate(total, next, operation);
        next = null;
        operation = btnName;
      } else if (total) {
        operation = btnName;
      }
      break;
    case btnName === '=':
      if (operation) {
        total = Operate(total, next, operation);
        [next, operation] = [null, null];
      }
      break;
    case btnName === '+/-':
      if (next === null) {
        total *= -1;
      } else {
        next *= -1;
      }
      break;
    case btnName === '%':
      if (total && next === null) {
        total = Operate(total, next, btnName);
      } else if (next) {
        next = Operate(total, next, btnName);
      }
      break;
    case btnName === 'AC':
      [total, next, operation] = [null, null, null];
      break;
    case btnName === '.':
      if (next === null) {
        total = total === '0' ? '0.' : total += '.';
      } else {
        next += '.';
      }
      break;
    default:
      throw new Error('invalid operation');
  }
  return { total, next, operation };
}
