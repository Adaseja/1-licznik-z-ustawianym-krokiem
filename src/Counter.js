// Counter.js
import React, { useState } from 'react';
import Step from './Step';


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
      <Step onStepChange={setStep} />
    </div>
  );
};

export default Counter;
