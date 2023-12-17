import HookUseState from "./components/HookUseState";
import HookUseEffect from "./components/HookUseEffect";
//import HookUseRef from "./components/HookUseRef";

function App() {
  return (
    <div>
      <HookUseState/>
      <h1>Starting useEffect............</h1>
      <HookUseEffect/>
      <h1>Starting useContext............</h1>
      
    </div>
  );
}

export default App;
