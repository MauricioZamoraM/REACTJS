import { memo, useMemo } from "react";

const ContadorHijo = ({ contador, sumar, restar }) => {
    // Cuando se renderiza un componente padre tambien se renderizan los hijos
    // Si los hijos obtienen mucha informacion de una api lo correcto seria memorizarlos(almacenarlos en cache) y asi evitamos que cada vez que el componente padre se renderize, el componente hijo tambien lo haga.
    // El componente hijo se renderizaria hasta que sus props cambien
  /* let superNumero = 0;

  for (let i = 0; i < 1000000000; i++) {
    superNumero++;
  } */
  //
  //Proceso pesado
  //Use memo memoriza el resultado de una funcion.
  const superNumero = useMemo(() => {
    let numero = 0;

    for (let i = 0; i < 1000000000; i++) { // Hemos memorizado el proceso pesado del ciclo for para que sea muy rapido el renderizado del componente
      numero++;
    }

    return numero; // Importante retornar el resultado de la funcion
  }, []);

  console.log("Hijo Contador se renderiza");

  return (
    <div style={{ border: "thin solid #000", margin: "1rem", padding: "1rem" }}>
      <h2>Hijo del Contador</h2>
      <h3>{contador}</h3>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{superNumero}</h3>
    </div>
  );
};

export default memo(ContadorHijo); // Se memoriza el componente (deja en cache) y cuando se renderiza el componente padre ya no se vuelve a renderizar el componente hijo porque fue memorizado.
