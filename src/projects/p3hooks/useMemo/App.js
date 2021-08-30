import React, { useState, useMemo } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

// useState + useMemo

function App() {
  const [countA, setCountA] = useState(0);
  const incrementA = () => {
    setCountA(countA + 1);
  };
  const [countB, setCountB] = useState(0);
  const incrementB = () => {
    setCountB(countB + 1);
  };
  const memoComponentA = useMemo(() => {
      return <ComponentA count={countA}/>
  },[countA])

  return (
    <div className="App">
      App js countA: {countA}
      <p>
        <button onClick={incrementA}>Increment A</button>
        <button onClick={incrementB}>Increment B</button>
      </p>
      {memoComponentA}
      <ComponentB count={countB}/>
    </div>
  );
}

export default App;
