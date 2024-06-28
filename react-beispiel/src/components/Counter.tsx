import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>Anzahl Klicks: {count}</button>
  );
}

export default Counter;
