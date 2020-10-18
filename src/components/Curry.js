import React from 'react';
import _ from 'lodash';
 
function Curry () {
  var sum = function(a, b) {
    return a + b;
  }
      
  const foo = _.curry(sum);

  return (
    <div>
      <h1>Salida de foo(2, 8): {foo(2,8)}!</h1>
      <h1>Salida de foo(2)(8): {foo(2)(8)}!</h1>
    </div>
  );
}
 
export default Curry; 
