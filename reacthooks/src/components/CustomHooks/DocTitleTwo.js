import React, { useState } from 'react'
import useDocTitle from './useDocTitle';

function DocTitleTwo() {

    const [count, setCount] = useState(0);

    useDocTitle(count)


    return (
        <div>
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

export default DocTitleTwo
