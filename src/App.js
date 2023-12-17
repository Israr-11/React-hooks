import HookUseState from "./components/HookUseState";
import HookUseEffect from "./components/HookUseEffect";
import { MyContextProvider } from "./components/contextHook/MyContext";
import Component1 from "./components/contextHook/Component1";
import Component2 from "./components/contextHook/Components2";
//import HookUseRef from "./components/HookUseRef";

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
    </div>
  );
}

export default App;
