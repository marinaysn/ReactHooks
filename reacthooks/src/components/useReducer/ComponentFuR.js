import React, {useContext} from 'react'
import {CountContext} from '../../App'

function ComponentFuR() {

    const countContext = useContext(CountContext);

    return (
        <div>
            Component F - {countContext.countState}

            <button onClick={() => countContext.countDispatch('add')}>Add</button>
            <button onClick={() => countContext.countDispatch('subtract')}>Subtract</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentFuR
