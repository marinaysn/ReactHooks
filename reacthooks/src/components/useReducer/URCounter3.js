import React, { useState, useContext, useEffect, useCallback, useMemo, useReducer } from 'react';

const initialState = 0
const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return state + action.value
        case 'subtract':
            if (state <= 1) {
                return initialState
            }
            return state - action.value

        case 'reset':
            return initialState
        default:
            return state
    }
}


function URCounter3() {

    const [count, dispatch] = useReducer(reducer, initialState);
    const [count2, dispatch2] = useReducer(reducer, initialState);

    return (
        <div>
            <div>
                First Counter: {count}
            </div>

            <div>
                Second Counter: {count2}
            </div>

            <div>
                <button onClick={() => dispatch({ type: 'add', value: 1 })}>Add</button>

                <button onClick={() => dispatch({ type: 'subtract', value: 1 })}>Subtract</button>

                <button onClick={() => dispatch({ type: 'reset' })}
                >Reset</button>
            </div>


            <div>

                <button onClick={() => dispatch2({ type: 'add', value: 5 })}>Add</button>

                <button onClick={() => dispatch2({ type: 'subtract', value: 5 })}>Subtract</button>

                <button onClick={() => dispatch2({ type: 'reset' })}
                >Reset</button>
            </div>
        </div>
    )
}

export default URCounter3
