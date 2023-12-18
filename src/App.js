import HookUseState from "./components/HookUseState";
import HookUseEffect from "./components/HookUseEffect";
import { MyContextProvider } from "./components/contextHook/MyContext";
import Component1 from "./components/contextHook/Component1";
import Component2 from "./components/contextHook/Components2";
//import ClearableInput from "./components/HookUseRef";
import Counter from "./components/HookUseReducer";
import HookUseCallBack from "./components/HookUseCallBack";
import HookUseMemo from "./components/HookUseMemo";

function App() {
  return (
    <div>
      <h1>useState Hook...........</h1>
      <HookUseState />
      <h1>Starting useEffect............</h1>
      <HookUseEffect />
      <h1>Starting useContext............</h1>
      <MyContextProvider>
        <Component1 />
        <Component2 />
      </MyContextProvider>
      <h1>Starting useRef........</h1>
      {/* <ClearableInput /> */}
      <h1>Starting useReducer.............</h1>
      <Counter />
      <h1>Starting useCallBack.........</h1>
      <HookUseCallBack />
      <h1>Starting useMemo.............</h1>
      <HookUseMemo/>
    </div>
  );
}

export default App;
