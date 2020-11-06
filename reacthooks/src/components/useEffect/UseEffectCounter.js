import React, { useState, useEffect } from 'react'

function UseEffectCounter() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log("Update title")
        document.title = `You Clicked ${count} times`

    },[count]);


    return (
        <div>
            <div>

                <input type='text' value={name}
                    onChange={ e => setName(e.target.value)
                    } />

                <p>{name}</p>
            </div>

            <button
                onClick={() => { setCount(count + 1) }}>
                Click {count} times
            </button>

            <div>
                <h3>
                    Clicked {count} times
             </h3>
            </div>
        </div>
    )
}

export default UseEffectCounter
