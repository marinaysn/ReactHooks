import React, { useState, useContext, useEffect, useReducer } from 'react';
import './App.css';
import DataFetching2 from './components/DataStream/DataFetching2';
import ParentComponent from './components/useCallback/ParentComponent';

function App() {

  return (
    <div className="App">

      <ParentComponent />

    </div>
  );
}

export default App;
