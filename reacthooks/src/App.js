import './App.css';
import ClassCounter from './components/useStateHooks/ClassCounter'
import HookCounter from './components/useStateHooks/HookCounter';
import HookCounter2 from './components/useStateHooks/HookCounter2';
import HookCounter3 from './components/useStateHooks/HookCounter3';
import HookCounter4 from './components/useStateHooks/HookCounter4';
import ClassCounterOne from './components/useEffect/ClassCounterOne';
import UseEffectCounter from './components/useEffect/UseEffectCounter';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter />
      <HookCounter />
      <HookCounter2 />
      <HookCounter3 />
      <HookCounter4 /> */}
      
      {/* <ClassCounterOne /> */}

      <UseEffectCounter />
    </div>
  );
}

export default App;
