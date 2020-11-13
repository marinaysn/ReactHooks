import React, { useState, useContext, useEffect, useReducer } from 'react';
import './App.css';
import DataFetching2 from './components/DataStream/DataFetching2';
import FocusInput from './components/useRef/FocusInput'

function App() {

  return (
    <div className="App">

      <FocusInput />

    </div>
  );
}

export default App;
