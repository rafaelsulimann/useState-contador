import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  function handleClick(){
    setCount(count + 1);
  }
  return (
    <main className="contador">
      <section className="contador-title-and-button">
        <h1>Contador = {count}</h1>
        <input type="button" value="Incrementar" onClick={handleClick}/>
      </section>
    </main>
  )
}

