import React, { Component, useState } from 'react';
import BackButton from './BackButton';

class Hooks extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { name } = this.state;
    return (
      <div style={{ textAlign: 'center' }}>
        <BackButton history={this.props.history} />
        <h1>Hooks examples</h1>
        <p>Function Component below.</p>
        <Dummy name={name} onChange={this.handleChange} />
      </div>
    );
  }
}

function Dummy(props) {
  const { name, onChange } = props;
  // const [name, setName] = useState('');
  return (
    <div>
      <input
        name="name"
        placeholder="enter your email."
        value={name}
        onChange={onChange}
        // onChange={e => {
        //   setName(e.target.value);
        // }}
      />
      {name && <p>Your name is {name}</p>}
    </div>
  );
}
export default Hooks;
