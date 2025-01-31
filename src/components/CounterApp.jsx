import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        count = count+1;
        setCount(count);
    }

    const handleDecrement = () => {
        count = count-1;
        setCount(count);
    }
    return (
        <>
        <h1>Counter App</h1>
        <p>Count:{count}</p>
        <button type="button" onClick={handleIncrement}>Increment</button>
        <button type="button" onClick={handleDecrement}>Decrement</button>
        </>
    )
}

export default Counter;