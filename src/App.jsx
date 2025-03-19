import { useState } from "react";

function App() {
  // Quando você muda o State, a sua interface é atualizada
  const [message, setMessage] = useState("Olá, mundo!");
  return (
    <div>
      <h1>{message}</h1>
      <button
        onClick={() => {
          setMessage("Olá, fui clicado!");
        }}
      >
        Mudar mensagem
      </button>
    </div>
  );
}

export default App;
