import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {

    const [posts, setPosts] = useState([]);
    const [id, setId] = useState(1);
    const [post, setPost] = useState(1);
    const [idFromBtn, setIdFromBtn] = useState(1);

    useEffect(() => {
        
        axios.get(`https://jsonplaceholder.cypress.io/posts/${id}`)
        .then(res =>{
            console.log(res.data)
            // setPosts(res.data)
            setPost(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    
        return  () => {
            console.log('Bye!');
        }
    }, [idFromBtn]);

const BtnClickHandler = ()=>{
    setIdFromBtn(id)
}
    return (
        <div>

        <input type='text' value={id} 
        onChange={ e => setId(e.target.value)} />

        <div>
            <button type='button'
            onClick={BtnClickHandler}
            >
                Fetch Post
            </button>
        </div>
            {/* <ul>
                {
                  posts.map( p=>(
                      <li key={p.id}>{p.title}</li>
                  ))  
                }
            </ul> */}

            <div key={post.id}>
                {post.title}
            </div>
        </div>
    )
}

export default DataFetching
