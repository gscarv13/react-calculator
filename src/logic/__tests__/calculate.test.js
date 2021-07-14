import Calculate from '../calculate';

describe('Calculate module', () => {
  test('Set total if null', () => {
    const inputs = { total: null, next: null, operation: null };
    const btn = '9';
    const result = Calculate(inputs, btn);
    expect(result.total).toBe('9');
  });

  test('Append number to total if btn is not an operation', () => {
    const inputs = { total: '9', next: null, operation: null };
    const btn = '1';
    const result = Calculate(inputs, btn);
    expect(result.total).toBe('91');
  });

  test('Set operation if total is not null and btn is an operation', () => {
    const inputs = { total: '100', next: null, operation: null };
    const btn = '-';
    const result = Calculate(inputs, btn);
    expect(result.total).toBe('100');
    expect(result.operation).toBe('-');
  });

  test('Set next if total and operation is not null and btn is a number', () => {
    const inputs = { total: '100', next: null, operation: '-' };
    const btn = '5';
    const result = Calculate(inputs, btn);
    expect(result.total).toBe('100');
    expect(result.operation).toBe('-');
    expect(result.next).toBe('5');
  });

  test('Append number to next if btn is a number', () => {
    const inputs = { total: '100', next: '5', operation: '-' };
    const btn = '5';
    const result = Calculate(inputs, btn);
    expect(result.total).toBe('100');
    expect(result.operation).toBe('-');
    expect(result.next).toBe('55');
  });

  test('Apply current operation if all values present and btn value is another operation', () => {
    const inputs = { total: '100', next: '55', operation: '-' };
    const btn = '+';
    const result = Calculate(inputs, btn);
    expect(result.total).toBe('45');
    expect(result.operation).toBe('+');
    expect(result.next).toBe(null);
  });

  test('Apply operation if all values present and btn value is equal', () => {
    const inputs = { total: '100', next: '55', operation: '-' };
    const btn = '=';
    const result = Calculate(inputs, btn);
    expect(result.total).toBe('45');
    expect(result.operation).toBe(null);
    expect(result.next).toBe(null);
  });

  test('Division by zero should return display Error', () => {
    const inputs = { total: '100', next: '0', operation: '÷' };
    const btn = '=';
    const result = Calculate(inputs, btn);
    expect(result.total).toBe('Error');
    expect(result.operation).toBe(null);
    expect(result.next).toBe(null);
  });

  test('% should divide by 100 if next is null', () => {
    const inputs = { total: '20', next: null, operation: null };
    const btn = '%';
    const result = Calculate(inputs, btn);
    expect(result.total).toBe('0.2');
  });

  test('% should get the percentage based on total\'s value', () => {
    const inputs = { total: '20', next: '50', operation: null };
    const btn = '%';
    const result = Calculate(inputs, btn);
    expect(result.next).toBe('10');
  });

  test('Should change total value to negative if next is null', () => {
    const inputs = { total: '20', next: null, operation: null };
    const btn = '+/-';
    const result = Calculate(inputs, btn);
    expect(result.total).toBe(-20);
  });

  test('Should change the next value to negative', () => {
    const inputs = { total: '20', next: '50', operation: null };
    const btn = '+/-';
    const result = Calculate(inputs, btn);
    expect(result.next).toBe(-50);
  });

  test('. should add a decimal place to the total if next is null', () => {
    const inputs = { total: '20', next: null, operation: null };
    const btn = '.';
    const result = Calculate(inputs, btn);
    expect(result.total).toBe('20.');
  });

  test('. should add a decimal place to the next if next is not null', () => {
    const inputs = { total: '20', next: '0', operation: null };
    const btn = '.';
    const result = Calculate(inputs, btn);
    expect(result.next).toBe('0.');
  });

  test('Should work with large numbers', () => {
    const inputs = { total: '999999999', next: '999999999', operation: '+' };
    const btn = '=';
    const result = Calculate(inputs, btn);
    expect(result.total).toBe('1999999998');
  });

  test('Should work with multiplication', () => {
    const inputs = { total: '200', next: '800', operation: '*' };
    const btn = '=';
    const result = Calculate(inputs, btn);
    expect(result.total).toBe('160000');
  });

  test('Should work with division', () => {
    const inputs = { total: '50000', next: '2', operation: '÷' };
    const btn = '=';
    const result = Calculate(inputs, btn);
    expect(result.total).toBe('25000');
  });

  test('AC should set all values to null', () => {
    const inputs = { total: '20', next: '0', operation: '*' };
    const btn = 'AC';
    const result = Calculate(inputs, btn);
    expect(result.total).toBeNull();
    expect(result.next).toBeNull();
    expect(result.operation).toBeNull();
  });

  test('Throw error if button value is invalid', () => {
    const inputs = { total: '20', next: '0', operation: '*' };
    const btn = 'Invalid-Input';
    expect(() => Calculate(inputs, btn)).toThrow(new Error('invalid operation'));
  });
});
