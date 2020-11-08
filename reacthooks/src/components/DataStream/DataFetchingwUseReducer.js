import React, { useReducer, useEffect, useState } from 'react'
import axios from 'axios';

const initialArg = {
    loading: true,
    error: '',
    post: {},
    id: 1
}

const reducer = (state, action) => {

    switch (action.type) {
        case 'FETCH_SUCCESS':

            return {
                ... initialArg,
                loading: false,
                error: action.erroros,
                post: action.payload,
                id: action.payload.id
            }
        case 'FETCH_ERROR':

            return {
                ... initialArg,
                loading: false,
                error: 'Something went wrong: ' + action.erroros,
                post: {},
                id: 1
            }

        case 'Update_ID':
            console.log('marina')
             console.log(action.id)
             console.log(initialArg)
            return {
                ... initialArg,
                id: action.id

                
            }
        default:
            return state
    }
}


function DataFetchingwUseReducer() {

    const [id, setId] = useState(1);

    const [state, dispatch] = useReducer(reducer, initialArg);

    useEffect(() => {

        axios.get(`https://jsonplaceholder.cypress.io/posts/${state.id}`)
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data, errors: '' })
            })
            .catch(err => {
                dispatch({ type: 'FETCH_ERROR', payload: '', errors: err })
            })

        return () => {
            console.log('Bye!');
        }
    }, [state.id]);

    const BtnClickHandler = () => {
        dispatch({ type: 'Update_ID', id: id })
    }

    const process =
        <div>
            <input type='text' value={id}
                onChange={e => setId(e.target.value)} />

            <div>
                <button type='button'
                    onClick={BtnClickHandler}
                >
                    Fetch Post
        </button>
            </div>


            <div key={state.post.id}>
                id: {state.post.id} < br /> Post: {state.post.title}
            </div>

        </div>

    return (
        <div>
            { state.loading ? `Loading, plase wait!..` : process}
            {state.error ? "Error!!!" + state.error : null}
        </div>
    )
}

export default DataFetchingwUseReducer
