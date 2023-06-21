import { useCallback, useState } from "react";
import ContadorHijo from "./ContadorHijo";

const Contador = () => {
  const [contador, setContador] = useState(0);
  const [input, setInput] = useState("");
  // Cuando se renderiza un componente padre tambien se renderizan los hijos, la memorizacion almacena en cache los componentes hijos
  // La memorizacion de componentes los almacena en cache para que no se vuelvan a renderizar a menos que sus props cambien
  /* Cuando se memoriza un componente, este ya no se vuelve a renderizar a menos que las props que recibe se vean modificadas
  En ese caso se renderiza todo el componente hijo nuevamente */
  // const sumar = () => setContador(contador + 1);
  //El use callback permite memorizar la funcion que le pasamos por parametro al componente hijo, esto es necesario hacerlo para evitar que las funciones se re renderizen.
  const sumar = useCallback(() => setContador(contador + 1), [contador]); // Las funciones se deben de memorizar con useCallback cuando memorizamos un componente para evitar que al escribir en el input el componente se rerenderize nuevamente.

  // const restar = () => setContador(contador - 1);
  const restar = useCallback(() => setContador(contador - 1), [contador]);

  const handleInput = (e) => setInput(e.target.value);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contador</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{contador}</h3>
      <input type="text" onChange={handleInput} value={input} />
      <ContadorHijo contador={contador} sumar={sumar} restar={restar} />
    </div>
  );
};

export default Contador;
