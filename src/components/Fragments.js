import React, { Component } from 'react';
import BackButton from './BackButton';

class Fragments extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <BackButton history={this.props.history} />
        <h1>Fragments and Strings as Return Type can be used.</h1>
      </div>
    );
  }
}
export default Fragments;
