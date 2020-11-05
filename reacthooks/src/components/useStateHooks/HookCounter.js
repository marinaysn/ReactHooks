import React, {useState} from 'react';


function HookCounter() {

     const [ count, setCount ] = useState( 0 )
    return (

        <div>

            <div>{count}</div>
            <button onClick={() =>setCount(count +1)}> Add</button>

            <button onClick={() =>setCount(count -1)}> Subtract </button>

            <button onClick={() =>setCount(0)}> Reset Count</button>
       
        </div>
    )
}

export default HookCounter
