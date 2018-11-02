import React, { Component } from 'react';

class BackButton extends Component {
  render() {
    return (
      <input
        type="button"
        name="back"
        value="GoBack"
        onClick={() => {
          this.props.history.goBack();
        }}
      />
    );
  }
}
export default BackButton;
