import React, { Component, PureComponent } from 'react';
import BackButton from './BackButton';

class Pure extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', header: 'Pure Component' };
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
        <Header title={header} />
        <input name="name" placeholder="Enter your name" value={name} onChange={this.handleInput} />
        <br />
        <p>{name}</p>
      </div>
    );
  }
}

class Header extends PureComponent {
  render() {
    console.log('PrintInput render');
    return <h1 style={{ textAlign: 'center' }}>{this.props.title}</h1>;
  }
}
export default Pure;
