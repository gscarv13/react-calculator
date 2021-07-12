import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';
import Header from './Header';
import '../styles/stylesheet.css';

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
    <>
      <Header />
      <div className="right">
        <div className="d-flex w-700 flex-column">
          <>
            <Display result={current} />
            <ButtonPanel className="d-flex" clickHandler={handleClick} />
          </>
        </div>
      </div>
    </>
  );
};

export default App;
