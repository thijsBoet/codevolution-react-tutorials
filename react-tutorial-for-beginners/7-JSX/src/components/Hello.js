import React from "react";

const Hello = () => {
  return React.createElement(
    "div",
    {id: 'hello', className: 'hello'},
    React.createElement("h1", null, "Hello omitting JSX")
  );
};

export default Hello;
