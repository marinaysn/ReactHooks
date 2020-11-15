import React, { useState, useContext, useEffect, useReducer } from 'react';
import './App.css';
import DataFetching2 from './components/DataStream/DataFetching2';
import ClassTimer from './components/useRef/ClassTimer'
import HookTimer from './components/useRef/HookTimer';
import DocTitleOne from './components/CustomHooks/DocTitleOne';

import DocTitleTwo from './components/CustomHooks/DocTitleTwo';

function App() {

  return (
    <div className="App">
      <div>
        <DocTitleOne />
      </div>
      <div>
        <DocTitleTwo />
      </div>
    </div>
  );
}

export default App;
