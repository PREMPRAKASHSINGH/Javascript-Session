import React, { Component } from 'react';
import BackButton from './BackButton';

class Hooks extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <BackButton history={this.props.history} />
        <h1>Hooks examples</h1>
      </div>
    );
  }
}
export default Hooks;
