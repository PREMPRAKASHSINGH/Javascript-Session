import React, { Component, memo } from 'react';
import BackButton from './BackButton';

class Memo extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', header: 'Functional State less Component' };
  }
  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { name, header } = this.state;
    return (
      <div style={{ textAlign: 'center' }}>
        <BackButton history={this.props.history} />
        <h1>React memo - A HOC</h1>
        <div>
          <Header title={header} />
          <input
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={this.handleInput}
          />
          <br />
          <p>{name}</p>
        </div>
      </div>
    );
  }
}

let Header = props => {
  console.log('functional component Header');
  return <h1 style={{ textAlign: 'center' }}>{props.title}</h1>;
};

// Header = memo(Header);
export default Memo;
