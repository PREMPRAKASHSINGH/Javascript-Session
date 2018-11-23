import React, { Component, Fragment } from 'react';
import BackButton from './BackButton';

class Fragments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [1, 2, 3, 4]
    };
  }
  render() {
    console.log('fragments and strings');
    const { data } = this.state;
    return (
      <div style={{ textAlign: 'center' }}>
        <BackButton history={this.props.history} />
        <h1>Fragments and Strings as Return Type can be used.</h1>
        <p>
          <u>Fragments</u>
        </p>
        <ReturnFragment data={data} />
        <p>
          <u>Strings</u>
        </p>
        <ReturnString value="String" />
      </div>
    );
  }
}

function ReturnFragment(props) {
  return (
    <Fragment>
      {props.data.map((item, key) => {
        return <p key={key}>paragraph {item}</p>;
      })}
    </Fragment>
  );
}

function ReturnString(props) {
  return `return ${props.value}`;
}

export default Fragments;
