import React, { useState, useContext, useEffect, useCallback, useMemo, useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'add':
            return state + 1
        case 'subtract':
            if (state <= 1) {
                return 0
            }
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}


function URCounter() {

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>
                Counter: {count}
            </div>

            <button onClick={() => dispatch('add')}>Add</button>
            <button onClick={() => dispatch('subtract')}>Subtract</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default URCounter
