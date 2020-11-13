import React, { useState, useContext, useEffect, useReducer } from 'react';
import './App.css';
import DataFetching2 from './components/DataStream/DataFetching2';
import ParentComponent from './components/useCallback/ParentComponent';

import CounterUM from './components/useMemo/CounterUM'

function App() {

  return (
    <div className="App">

      <CounterUM />

    </div>
  );
}

export default App;
