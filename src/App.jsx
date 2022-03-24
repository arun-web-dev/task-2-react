import { useState } from "react";

import "./App.css";
import ClassComponent from "./components/ClassComponent";
import { FunctionalComponent } from "./components/FunctionalComponent";

function App() {
  const [flag, setFlag] = useState(true);
  return (
    <div className={flag ? "App no-active" : "App active"}>
      <h1 class="App-heading">
        Click the button below to see the {flag ? "Functional" : "Class"}{" "}
        Component
      </h1>
      <button className="click-me-btn" onClick={() => setFlag(!flag)}>
        Click Me!
      </button>
      {flag ? <ClassComponent /> : <FunctionalComponent />}
    </div>
  );
}

export default App;
