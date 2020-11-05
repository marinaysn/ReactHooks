import React, {useState, useEffect} from 'react'

function UseEffectCounter() {

    //const [count, setCount] = useState(0);

    const [count, setCount] = useState(0);
    
    useEffect(() => {
        
        document.title = `You Clicked ${count} times`
 
    });


    return (
        <div>
            <button
            onClick={() => {setCount(count +1)}}>
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
