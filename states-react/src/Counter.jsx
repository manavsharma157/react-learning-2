import React from 'react'
import { useState } from "react";

export default function Counter() {
    // let arr = useState(0); will print the useState Array with two values [0, f()]
    // let [stateVariable, setStateVariable] = useState(10);
    let [count, setCount] = useState(0);

    let increment = () => {
        setCount(count+1); //setCount method will update in UI automatically
        console.log(count);
    }
    let decrement = () => {
        if (count > 0) setCount(count-1);
        // console.log(count);
    }
  return (
    <div>
    <h3>Count = {count}</h3>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </div>
  )
}
