import React, {useContext} from 'react'
import {CountContext} from '../../App'


function ComponentAuR() {

     const {countState, countDispatch} = useContext(CountContext)

    return (
        <div>
            Component A - {countState}

            <button onClick={() => countDispatch('add')}>Add</button>
            <button onClick={() => countDispatch('subtract')}>Subtract</button>
            <button onClick={() => countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentAuR
