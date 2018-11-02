import React, { Component } from 'react';
import BackButton from './BackButton';

class Counter extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <BackButton history={this.props.history} />
        <h1>Counter</h1>
      </div>
    );
  }
}
export default Counter;
