import React, { Component } from 'react';
import Axios from 'axios';

export default class LoadData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  load = () => {
    const that = this;
    Axios.get('https://talaikis.com/api/quotes/random/').then(Response => {
      that.setState({ data: Response.data });
    });
  };
  componentDidMount() {
    this.load();
  }
  render() {
    const { data } = this.state;
    if (!data) {
      return <p>Fetching Quote.</p>;
    } else {
      return (
        <div>
          <p>Quote - {data.quote}</p>
          <p>Author - {data.author}</p>
        </div>
      );
    }
  }
}
