import React, { useState } from 'react';

export interface CounterProps {}

export interface CounterState {
  value: number;
}

export function Counter() {
  const [value, setValue] = useState(0);
  const handleIncrement = () => setValue(value + 1);
  const handleDecrement = () => setValue(value - 1);
  return (
    <>
     <h1>Simple Counter</h1>
      <h3>{ value }</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}