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
      operation: null,
    };
  }

  handleClick(btnName) {
    const obj = { ...this.state };
    this.setState({ total: Calculate(obj, btnName) });
  }

  render() {
    const { total, next } = this.state;
    const current = next || total;
    return (
      <div>
        <>
          <Display result={current} />
          <ButtonPanel onClick={this.handleClick} />
        </>
      </div>
    );
  }
}

export default App;
