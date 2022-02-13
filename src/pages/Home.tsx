import React from 'react';

const Home = (props: { name: string }) => {
  console.log(props.name);
  return <div>{props.name ? 'Hi ' + props.name : 'You are not logged in'}</div>;
};

export default Home;
