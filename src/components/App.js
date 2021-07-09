import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (btnName) => {
    const obj = { total, next, operation };
    const result = Calculate(obj, btnName);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  const current = next || total || '0';
  return (
    <div>
      <>
        <Display result={current} />
        <ButtonPanel clickHandler={handleClick} />
      </>
    </div>
  );
};

export default App;
