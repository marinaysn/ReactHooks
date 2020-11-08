import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';

import './App.css';
import ClassCounter from './components/useStateHooks/ClassCounter';
import HookCounter from './components/useStateHooks/HookCounter';
import HookCounter2 from './components/useStateHooks/HookCounter2';
import HookCounter3 from './components/useStateHooks/HookCounter3';
import HookCounter4 from './components/useStateHooks/HookCounter4';
import ClassCounterOne from './components/useEffect/ClassCounterOne';
import UseEffectCounter from './components/useEffect/UseEffectCounter';
import ClassMouse from './components/useEffect/ClassMouse';
import UseEffectMouse from './components/useEffect/UseEffectMouse';
import UseEffectMouseContainer from './components/useEffect/UseEffectMouseContaner';
import ClassMouseContainer from './components/useEffect/ClassMouseContainer';
import IntervalClassCounter from './components/useEffect/IntervalClassCounter';
import IntervalHookCounter from './components/useEffect/IntervalHookCounter';
import DataFetching from './components/DataStream/DataFetching'
import ComponentC from './components/useContext/ComponentC';
import URCounter from './components/useReducer/URCounter';
import URCounter2 from './components/useReducer/URCounter2'

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {


  return (
    <div className="App">
      {/* 

       //useState 
      <ClassCounter />
      <HookCounter />
      <HookCounter2 />
      <HookCounter3 />
      <HookCounter4 /> 
      <ClassCounterOne />

      //useEffect
      <UseEffectCounter />
      <ClassMouse />
      <UseEffectMouse />
      <UseEffectMouseContainer />
      <IntervalClassCounter />
      <IntervalHookCounter />
      <IntervalClassCounter />
      <IntervalHookCounter />
      <DataFetching />

      // useContext 
      <UserContext.Provider value='Marina'>
        <ChannelContext.Provider value='Youtube and Google'>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
      
      //useReducer
      <URCounter />

      */}

      <URCounter2 />
    </div>
  );
}

export default App;
