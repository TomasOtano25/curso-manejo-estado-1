import { UseState } from "./UseState.js";
import { ClassState } from "./ClassState.js";
import { UseReducer } from "./UseReducer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <UseState name="Use State" />
      <hr />
      <ClassState name="Class State" />
      <hr />
      <UseReducer name="Use Reducer" />
    </div>
  );
}

export default App;
