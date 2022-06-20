import React from 'react';

function Destructuring(props) {
  const { name, age, love } = props.bio;
  return (
    <div>
      <h2>Hey, I'm {name} !!!</h2>
      <h2>I'm {age} years old</h2>
      <h2>{love}, she is love</h2>
    </div>
  );
}

export default Destructuring;
