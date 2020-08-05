import React from 'react'

const FunctionalComponent = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.children}</p>
    </div>
  );
}

export default FunctionalComponent
