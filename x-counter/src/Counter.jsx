import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  const handleIncrement = () => {
    setValue((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setValue((prev) => prev - 1);
  };
  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {value}</p>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
