import React, { useState, useEffect } from 'react';

function IntervalHookCounter() {

    const [counter, setCounter] = useState(0);

    const tick =() =>{
        setCounter(prevCount => prevCount +1)
    }

    function doCountLog(counting){
        console.log("Count keeps log");
        console.log(counting)
    }

    useEffect(() => {
        console.log("Update title")
        document.title = `You Clicked ${counter} times`

    },[counter]);

    useEffect(() => {
        
        doCountLog(counter)
        const inverval = setInterval(tick, 1000);

        return  () => {
            clearInterval(inverval);
        }
    }, [counter]);

    return (
        <div>
            {counter}
        </div>
    )
}

export default IntervalHookCounter
