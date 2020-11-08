import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching2() {

    const [id, setId] = useState(1);
    const [idFromBtn, setIdFromBtn] = useState(1);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState([]);
    const [post, setPost] = useState({});

    useEffect(() => {

        axios.get(`https://jsonplaceholder.cypress.io/posts/${id}`)
            .then(res => {
                setLoading(false)
                setPost(res.data)
                setError('')
            })
            .catch(err => {
                setLoading(false)
                setError(err)
                setPost({})
            })

        return () => {
            console.log('Bye!');
        }
    }, [idFromBtn]);

    const BtnClickHandler = () => {
        setIdFromBtn(id)
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


            <div key={post.id}>
                {post.title}
            </div>

        </div>



    return (
        <div>

            { loading ? `Loading, plase wait!..` : process}
            {error ? "Error!!!" + error : null}
        </div>
    )
}

export default DataFetching2
