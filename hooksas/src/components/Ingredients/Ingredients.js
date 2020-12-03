import React, { useState, useEffect, useCallback } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList'
import Search from './Search';

const Ingredients = () => {

  const [userIngredients, setUserIngredients] = useState([]);

  // useEffect(() => {
    
  //   fetch('https://mshooks-72096.firebaseio.com/ingredients.json').then(responce => responce.json())
  //   .then(responceData =>{
  //      const loadedIngredients = [];
  //      for ( const key in responceData) {
  //        loadedIngredients.push({
  //          id: key,
  //          title: responceData[key].title,
  //          amount: responceData[key].amount
  //        })
  //      }

  //      setUserIngredients(loadedIngredients)
  //   })
  // }, []);

  const addIngredientHandler = newItem => {

    console.log('marka')
    console.log(userIngredients)

    fetch('https://mshooks-72096.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(newItem),
      headers: { 'Content-Type': 'application/json' }
    }).then(responce => {
      return responce.json();
    }).then(responceData => {
      
      setUserIngredients(prev => [...prev, { id: responceData.name, ...newItem }])
    });

  }

  const onFilterIngredientsHandler = useCallback(filter =>{
    setUserIngredients(filter)
  },[])

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search onFilterIngredients={onFilterIngredientsHandler} />
        <IngredientList ingredients={userIngredients} onRemoveItem={() => { }} />
      </section>
    </div>
  );
}

export default Ingredients;
