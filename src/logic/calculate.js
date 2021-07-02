export default function calculate(dataObj, btnName) {
  let { total, next, operation } = dataObj;
  const operations = ['+', '-', '*', '÷'];

  switch (btnName) {
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
    default:
      throw new Error('invalid operation');
  }
  return { total, next, operation };
}
