import React, { useState } from 'react';
 
function Counter () {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount =>  prevCount + 1)
  };
 
  return (
    <div>
      <h1>Salida del contador: {count}!</h1>
      <button onClick={increment}> Incrementar</button>
    </div>
  );
}
 
export default Counter; 
