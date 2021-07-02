export default function calculate(dataObj, btnName) {
  let { total, next, operation } = dataObj;
  const operations = ['+', '-', '*', '='];

  switch (btnName || true) {
    case operations.includes(btnName):
      operation = btnName;
      break;
    case '+/-':
      total *= -1;
      next *= -1;
      break;
    case '%':
      next = (next / 100) * total;
      break;
    case '÷':
      operation = '/';
      break;
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '.':
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
