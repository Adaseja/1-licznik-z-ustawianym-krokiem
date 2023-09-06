
import React, { useState } from 'react';

const Step = ( props ) => {
  /* const [stepValue, setStepValue] = useState(1);

  const handleStepChange = (event) => {
    const newStepValue = parseInt(event.target.value);
    setStepValue(newStepValue);
    onStepChange(newStepValue);
  };
 */
  return (
    <div>
      <label>
        Krok zwiększania licznika:
        <input
          type="number"
         /*  value={stepValue} */
          onChange={( event ) => {
            console.log(event)
            props.onStepChange(+event.target.value)}
          }
          min={1}
        />
      </label>
    </div>
  );
};

export default Step;
