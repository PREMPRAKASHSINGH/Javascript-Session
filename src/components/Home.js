import React from 'react';
import BackButton from './BackButton';

function Home(props) {
  console.log('in home');
  return (
    <div style={{ textAlign: 'center' }}>
      <BackButton history={props.history} />
      <h1>Home</h1>
    </div>
  );
}
export default Home;
