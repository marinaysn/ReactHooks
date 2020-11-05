import React, {useState} from 'react';


function HookCounter2() {

    const initialCount = 0;

     const [ count, setCount ] = useState( initialCount )

     const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
           setCount(prevCount => prevCount + 1) 
        }
     }



    return (

        <div>

            <div>Count: {count}</div>
            <button onClick={() =>setCount(p =>p +1)}> Add</button>

            <button onClick={() =>setCount(count =>count -1)}> Subtract </button>

            <button onClick={incrementFive}> Add 5 </button>

            <button onClick={() =>setCount(initialCount)}> Reset Count</button>
       
        </div>
    )
}

export default HookCounter2
