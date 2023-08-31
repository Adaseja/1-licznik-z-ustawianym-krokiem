
import React, { useState } from 'react';

const Step = ({ onStepChange }) => {
  const [stepValue, setStepValue] = useState(1);

  const handleStepChange = (event) => {
    const newStepValue = parseInt(event.target.value);
    setStepValue(newStepValue);
    onStepChange(newStepValue);
  };

  return (
    <div>
      <label>
        Krok zwiększania licznika:
        <input
          type="number"
          value={stepValue}
          onChange={handleStepChange}
          min={1}
        />
      </label>
    </div>
  );
};

export default Step;
