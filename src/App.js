import HookUseState from "./components/HookUseState";
import HookUseEffect from "./components/HookUseEffect";
import { MyContextProvider } from "./components/contextHook/MyContext";
import Component1 from "./components/contextHook/Component1";
import Component2 from "./components/contextHook/Components2";
import ClearableInput from "./components/HookUseRef";
import Counter  from "./components/HookUseReducer";

function App() {
  return (
    <div>
      <HookUseState/>
      <h1>Starting useEffect............</h1>
      <HookUseEffect/>
      <h1>Starting useContext............</h1>

      <MyContextProvider>
        <Component1/>
        <Component2/>
      </MyContextProvider>
      <h1>Starting useRef .......</h1>
      <ClearableInput/>
      <h1>Starting useReducer.............</h1>
      <Counter/>
    </div>
  );
}

export default App;
