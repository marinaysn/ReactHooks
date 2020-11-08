import React, {useContext} from 'react'
import {CountContext} from '../../App'

function ComponentDuR() {

    const countContext = useContext(CountContext);

    return (
        <div>
            Component D - {countContext.countState}

            <button onClick={() => countContext.countDispatch('add')}>Add</button>
            <button onClick={() => countContext.countDispatch('subtract')}>Subtract</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentDuR
