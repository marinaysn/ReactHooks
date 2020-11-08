import React, { useState, useContext, useEffect, useReducer } from 'react';
import './App.css';
import DataFetching2 from './components/DataStream/DataFetching2';
import DataFetchingwUseReducer from './components/DataStream/DataFetchingwUseReducer'
function App() {

  return (
      <div className="App">
       
<DataFetching2 />

< hr />

<DataFetchingwUseReducer />

      </div>
  );
}

export default App;
