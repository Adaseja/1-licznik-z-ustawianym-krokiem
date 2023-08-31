// Counter.js
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increaseCount = () => {
    setCount(count + step);
  };

  return (
    <div>
      <h1>Wartość licznika: {count}</h1>
      <button onClick={increaseCount}>Zwiększ o {step}</button>
    </div>
  );
};

export default Counter;
