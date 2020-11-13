import React, { useState, useMemo } from 'react'

function CounterUM() {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(1);

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0;

        while (i < 2000000000) {
            i++;
        }
        return counterOne % 2 === 0
    }, [counterOne]);




    return (
        <div>
            <div>{counterOne} -  <span>{isEven ? 'Even' : 'Odd'}</span></div>
            <button onClick={incrementOne}> Increment One - {counterOne}</button>

            <div>{counterTwo}</div>
            <button onClick={incrementTwo}>Increment Two - {counterTwo}</button>
        </div>
    )
}

export default CounterUM
