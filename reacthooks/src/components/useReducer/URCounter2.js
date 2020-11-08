import React, { useReducer } from 'react';

const initialState = {
    firstCounter:0,
    secondCounter: 10
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return {...state, firstCounter: state.firstCounter + action.value}
        case 'subtract':
            if ((state.firstCounter - action.value) <= 1) {
                return {...state, firstCounter: 0}
            }
            return {...state, firstCounter: state.firstCounter - action.value}

            case 'add2':
            return {...state, secondCounter: state.secondCounter + action.value}
            case 'subtract2':
            if ((state.secondCounter - action.value) <= 1) {
                return {...state, secondCounter: 0}
            }
            return {...state, secondCounter: state.secondCounter - action.value}


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
                First Counter: {count.firstCounter}
            </div>

            <div>
                Second Counter: {count.secondCounter}
            </div>

            <button onClick={() => dispatch({type: 'add', value: 1})}>Add</button>

            <button onClick={() => dispatch({type: 'subtract', value: 1})}>Subtract</button>

            <button onClick={() => dispatch({type: 'add', value: 5})}>Add 5</button>

            <button onClick={() => dispatch({type: 'subtract', value: 5})}>Subtract 5</button>

        <div>
            <button onClick={() => dispatch({type: 'add2', value: 2})}>Add (Snd) 2</button>

            <button onClick={() => dispatch({type: 'subtract2', value: 2})}>Subtract  (Snd) 2</button>
        </div>
            

            <button onClick={() => dispatch({type:'reset'})}

            >Reset</button>
        </div>
    )
}

export default URCounter2
