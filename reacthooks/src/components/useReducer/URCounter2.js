import React, { useState, useContext, useEffect, useCallback, useMemo, useReducer } from 'react';

const initialState = {
    firstCounter:0
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return {firstCounter: state.firstCounter + action.value}
        case 'subtract':
            if ((state.firstCounter - action.value) <= 1) {
                return {firstCounter: 0}
            }
            return {firstCounter: state.firstCounter - action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}


function URCounter2() {

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>
                Counter: {count.firstCounter}
            </div>

            <button onClick={() => dispatch({type: 'add', value: 1})}>Add</button>

            <button onClick={() => dispatch({type: 'subtract', value: 1})}>Subtract</button>

            <button onClick={() => dispatch({type: 'add', value: 5})}>Add 5</button>

            <button onClick={() => dispatch({type: 'subtract', value: 5})}>Subtract 5</button>

            <button onClick={() => dispatch({type:'reset'})}

            >Reset</button>
        </div>
    )
}

export default URCounter2
