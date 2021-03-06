import React from 'react';
import useCounter from './useCounter'

function CounterOne() {

    const [count, increment, decrement, reset] = useCounter(10, 10) 
    console.log(process.env.REACT_APP_URL_MAIN)
    return (

        <div>
            <h2>{count}</h2>
            <button onClick={increment}> Add</button>

            <button onClick={decrement}> Subtract </button>

            <button onClick={reset}> Reset Count</button>
       
        </div>
    )
}

export default CounterOne
