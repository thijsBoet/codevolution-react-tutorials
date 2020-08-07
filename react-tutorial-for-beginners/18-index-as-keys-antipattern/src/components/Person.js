import React from 'react'

function Person({ person }) {
  return (
    <div>
      <h2 key={person.key}>
        Hi, I'm {person.name}, my age is {person.age} and I know {person.skill}.
      </h2>
    </div>
  );
}

export default Person
