import React, {useState} from 'react';


function HookCounter() {

     const [ count, setCount ] = useState( 0 )
    return (

        <div>
            <button onClick={() =>setCount(count +1)}> Add Count: {count}</button>

            <button onClick={() =>setCount(count -1)}> Subtract Count: {count}</button>
       
        </div>
    )
}

export default HookCounter
