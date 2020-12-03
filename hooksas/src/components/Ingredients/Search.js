import React , {useState, useEffect} from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {

  const {onFilterIngredients} = props;

  const [enteredFilter, setEnteredFilter] = useState('');

 useEffect(() => {

  const query = 
    enteredFilter.length === 
    0 ? '' 
    : `?orderBy="title"&equalTo="${enteredFilter}"`
   
  fetch('https://mshooks-72096.firebaseio.com/ingredients.json' + query).then(responce => responce.json())
    .then(responceData =>{
       const loadedIngredients = [];
       for ( const key in responceData) {
         loadedIngredients.push({
           id: key,
           title: responceData[key].title,
           amount: responceData[key].amount
         })
       }
       onFilterIngredients(loadedIngredients)
    })

 
  //  return cleanUp = () => {
     
  //  }
 }, [enteredFilter, onFilterIngredients]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" value={enteredFilter} onChange={event => setEnteredFilter(event.target.value)} />
        </div>
      </Card>
    </section>
  );
});

export default Search;
