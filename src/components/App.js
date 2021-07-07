import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      total: null,
      next: null,
      // eslint-disable-next-line react/no-unused-state
      operation: null,
    };
  }

  handleClick(btnName) {
    const obj = this.state;
    const result = Calculate(obj, btnName);
    this.setState(result);
  }

  render() {
    const { total, next } = this.state;
    const current = next || total || '0';
    return (
      <div>
        <>
          <Display result={current} />
          <ButtonPanel clickHandler={this.handleClick} />
        </>
      </div>
    );
  }
}

export default App;
