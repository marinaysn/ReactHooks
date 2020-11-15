import React, { useState, useContext, useEffect, useReducer } from 'react';
import './App.css';
import DataFetching2 from './components/DataStream/DataFetching2';
import ClassTimer from './components/useRef/ClassTimer'
import HookTimer from './components/useRef/HookTimer';
import DocTitleOne from './components/CustomHooks/DocTitleOne';

import CounterOne from './components/CustomHooks/CounterOne';
import CounterTwo from './components/CustomHooks/CounterTwo';
function App() {

  return (
    <div className="App">
      
      <div>
        <CounterOne />
      </div>

      <div>
        <CounterTwo />
      </div>
    </div>
  );
}

export default App;
