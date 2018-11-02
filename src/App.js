import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Counter from './components/Counter';
import Pure from './components/PureComponent';
import ErrorBoundaryExample from './components/ErrorBoundary';
import Lazy from './components/LazyLoading';
import Memo from './components/Memo';
import Fragments from './components/Fragments';
import Hooks from './components/Hooks';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/counter" component={Counter} />
          <Route exact path="/pure-component" component={Pure} />
          <Route exact path="/error-boundary" component={ErrorBoundaryExample} />
          <Route exact path="/lazy-loading" component={Lazy} />
          <Route exact path="/memo" component={Memo} />
          <Route exact path="/fragments-strings" component={Fragments} />
          <Route exact path="/hooks" component={Hooks} />
        </Switch>
      </Router>
    );
  }
}
function MainPage(props) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Main Page</h1>
      <ul style={{ listStyleType: 'none' }}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/counter">Counter Example</Link>
        </li>
        <li>
          <Link to="/pure-component">Pure Component Example</Link>
        </li>
        <li>
          <Link to="/error-boundary">Error Boundary</Link>
        </li>
        <li>
          <Link to="/lazy-loading">React.lazy()</Link>
        </li>
        <li>
          <Link to="/memo">React.memo()</Link>
        </li>
        <li>
          <Link to="/fragments-strings">Fragments and Strings as return type.</Link>
        </li>
        <li>
          <Link to="/hooks">Hooks Examples.</Link>
        </li>
      </ul>
    </div>
  );
}
export default App;
