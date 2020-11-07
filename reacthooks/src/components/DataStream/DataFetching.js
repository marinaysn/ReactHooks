import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        
        axios.get('https://jsonplaceholder.cypress.io/posts')
        .then(res =>{
            console.log(res.data)
            setPosts(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    
        return  () => {
            console.log('Bye!');
        }
    }, []);


    return (
        <div>
            <ul>
                {
                  posts.map( p=>(
                      <li key={p.id}>{p.title}</li>
                  ))  
                }
            </ul>
        </div>
    )
}

export default DataFetching
