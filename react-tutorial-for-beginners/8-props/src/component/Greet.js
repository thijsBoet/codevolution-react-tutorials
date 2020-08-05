import React from 'react';

const Greet = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.name}!</h1>
      <h2>A.K.A. {props.heroName}</h2>
      <h3>{props.children}</h3>
      <br/>
      <hr />
      <br/>
    </div>
  );
}

export default Greet;
