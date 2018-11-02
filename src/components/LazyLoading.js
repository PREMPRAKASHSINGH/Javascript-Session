import React, { Component } from 'react';
import BackButton from './BackButton';

class Lazy extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <BackButton history={this.props.history} />
        <h1>Lazy loading</h1>
      </div>
    );
  }
}
export default Lazy;
