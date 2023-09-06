
import React, { useState } from 'react';
import './App.css';
import Counter from './Counter';
import Step from './Step';

const App = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="App">
      <h1>Licznik z krokiem</h1>
      <Counter />
      
    </div>
  );
};

export default App;
