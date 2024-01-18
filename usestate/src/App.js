import { useState } from "react";

function App() {

  const [count, setCount]=useState(0);
  function incrementCount(){
    setCount(count+1);
  }

  function decrementCount(){
    setCount(count-1);
  }

  return (
    <div >
      <h1>Counter App</h1>
      <p>{count}</p>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
    </div>
  );
}

export default App;
