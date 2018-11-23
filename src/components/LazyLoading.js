import React, { Component, lazy, Suspense } from 'react';
import Axios from 'axios';

import BackButton from './BackButton';
import LoadData from './LoadData';
// const LoadData = lazy(() => import('./LoadData'));

class Lazy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadQuote: false
    };
  }
  loadQuote = () => {
    this.setState({ loadQuote: !this.state.loadQuote });
  };
  render() {
    const { loadQuote } = this.state;
    return (
      <div style={{ textAlign: 'center' }}>
        <BackButton history={this.props.history} />
        <h1>Code Splitting and Lazy loading example</h1>
        <input
          type="button"
          name="load"
          value="LoadQuote"
          onClick={this.loadQuote}
        />
        {loadQuote && <LoadData />}
        {/* {loadQuote && (
          <Suspense fallback={<div>Loading.........</div>}>
            <LoadData />
          </Suspense>
        )} */}
      </div>
    );
  }
}
export default Lazy;
