import React, {useState} from 'react';
import classes from './Counter.module.scss'
export const Counter = () => {
    const [count, setCount] = useState(10);
    const increase = () => {
        setCount(count => count +1)
    }

    const decrease = () => {
        setCount(count => count -1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button className={classes.btn} onClick={increase}> Increment</button>
            <button onClick={decrease}> Decrement</button>
        </div>
    );
};