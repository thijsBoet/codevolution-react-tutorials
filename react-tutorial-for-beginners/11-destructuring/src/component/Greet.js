import React from 'react';

const Greet = (props) => {
  const { name, heroName, children } = props
  return (
    <div>
      <h1>{name}!</h1>
      <h2>A.K.A. {heroName}</h2>
      <h3>{children}</h3>
      <br />
      <hr />
      <br />
    </div>
  );
};

export default Greet;
