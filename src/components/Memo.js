import React, { Component } from 'react';
import BackButton from './BackButton';

class Memo extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <BackButton history={this.props.history} />
        <h1>React memo - A HOC</h1>
      </div>
    );
  }
}
export default Memo;
