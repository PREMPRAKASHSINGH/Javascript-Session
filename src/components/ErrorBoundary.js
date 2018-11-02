import React, { Component } from 'react';
import BackButton from './BackButton';

class ErrorBoundaryExample extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  handleCounter = () => {
    const { counter } = this.state;
    if (counter === 5) {
      this.setState({ counter: null });
    } else {
      this.setState({ counter: counter + 1 });
    }
  };
  render() {
    const { counter } = this.state;
    return (
      <ErrorBoundary>
        <div style={{ textAlign: 'center' }}>
          <BackButton />
          <h1>Error Boundary Example</h1>
          <br />
          <input type="button" name="counter" value="+" onClick={this.handleCounter} />
          {counter.toString()}
        </div>
      </ErrorBoundary>
    );
  }
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: '', error: '' };
  }
  static getDerivedStateFromError(error) {
    console.log('in derived error ', error);
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  // componentDidCatch(error, info) {
  //   // You can also log the error to an error reporting service
  //   console.log('catch ', error, info);
  //   this.setState({ hasError: true, errorInfo: info, error: error });
  // }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h1>Something went wrong.</h1>
          {this.state.error.toString()}
          <br />
          {/* {this.state.errorInfo.componentStack} */}
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundaryExample;
