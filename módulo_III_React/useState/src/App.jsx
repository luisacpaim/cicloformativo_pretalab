import { useState } from 'react';
import './App.css';


function App() {
  const [contador, setContador] = useState(0);
  const [texto, setTexto] = useState("Um contador muito legal!");

  const adicionarUm = () => {
    setContador((contador) => contador + 1);
  };
  const subtrairUm = () => {
    setContador((contador) => contador - 1);
  };

  const traduzirTexto = () => {
      // if (texto === "Um contador muito legal!"){
    	//   setTexto("A very cool counter!");
      // } else {
      //   setTexto("Um contador muito legal!");
      // }

    const pt = "Um contador muito legal!";
    const en = "A very cool counter!";

    texto === en ? setTexto(pt) : setTexto(en);
  };
  
  return (
    <div className="App">
      <h1>{texto}</h1>
      <button onClick={traduzirTexto}>Traduzir</button><br/>
      <button onClick={subtrairUm}>-</button>
      <h1> {contador} </h1>
      <button onClick={adicionarUm}>+</button>
    </div>
  );
};

export default App;
