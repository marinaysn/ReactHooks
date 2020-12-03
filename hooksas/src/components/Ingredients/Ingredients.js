import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList'
import Search from './Search';

const Ingredients = () => {

  const [userIngredients, setUserIngredients] = useState([]);

  const addIngredientHandler = newItem => {

    // newItem = {id: Math.random().toString(), ...newItem}

    fetch('https://mshooks-72096.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(newItem),
      headers: { 'Content-Type': 'application/json' }
    }).then(responce => {
      return responce.json();
    }).then(responceData => {
      console.log('marina');
      console.log(responceData)
      setUserIngredients(prev => [...prev, { id: responceData.name, ...newItem }])
    });

  }
  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList ingredients={userIngredients} onRemoveItem={() => { }} />
      </section>
    </div>
  );
}

export default Ingredients;
