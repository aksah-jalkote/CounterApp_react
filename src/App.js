import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>Counter app using state</h1>
      </header>
      <h2>Currernt value of count is {count}</h2>
      <button onClick={() => setCount(0)}>Reset count</button>
      <button onClick={() => (count > 10 ? "" : setCount(count + 1))}>
        increse count
      </button>
      <button onClick={() => (count == 0 ? "" : setCount(count - 1))}>
        decrese count
      </button>
    </div>
  );
}

export default App;
