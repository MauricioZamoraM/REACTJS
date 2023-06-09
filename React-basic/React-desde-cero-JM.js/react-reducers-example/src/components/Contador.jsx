import { useReducer } from "react";

const initialState = { contador: 0 }; // Debe ser objeto como el this.state en componentes de clase.

const init = (initialState) => { // El tercer parametro init permite cambiar el valor inicial del estado retornando en nuevo valor.
  return {
    contador: initialState.contador + 100,
  };
};

const TYPES = {
  INCREMENT: "INCREMENT",
  INCREMENT_5: "INCREMENT_5",
  DECREMENT: "DECREMENT",
  DECREMENT_5: "DECREMENT_5",
  RESET: "RESET",
};

function reducer(state, action) { // Esta es la funcion reductora, va a recibir el estado anterior y la accion.
  switch (action.type) { // Va a recibir un tipo de accion y un payload el comcepto de payload es como el valor que le estamos mandando para que modifique el estado.
    case TYPES.INCREMENT:
      return { contador: state.contador + 1 };
    case TYPES.INCREMENT_5:
      return { contador: state.contador + action.payload };
    case TYPES.DECREMENT:
      return { contador: state.contador - 1 };
    case TYPES.DECREMENT_5:
      return { contador: state.contador - action.payload };
    case TYPES.RESET:
      return initialState;
    default:
      return state;  // Siempre debemos retornar el nuevo estado.
  }
}

const Contador = () => {
  //const [contador, setContador] = useState(0);
  //Hook useReducer, esta compuesto por un estado y recibe 3 parametros: la funcion reductora, el estado inicial
  const [state, dispatch] = useReducer(reducer, initialState, init); //El tercer parametro init es opcional, permite modificar el estado inicial.

  //const sumar = () => setContador(contador + 1);
  const sumar = () => dispatch({ type: TYPES.INCREMENT }); // El dispatch es el que actualiza el estado, se le debe pasar la accion que va a ejecutar de la funcion reductora.

  const sumar5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 }); // El payload indica el valor que se va a utilizar para cambiar el estado.

  //const restar = () => setContador(contador - 1);
  const restar = () => dispatch({ type: TYPES.DECREMENT });

  const restar5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });

  const reset = () => dispatch({ type: TYPES.RESET });

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contador Reducer</h2>
      <nav>
        <button onClick={sumar5}>+5</button>
        <button onClick={sumar}>+</button>
        <button onClick={reset}>0</button>
        <button onClick={restar}>-</button>
        <button onClick={restar5}>-5</button>
      </nav>
      <h3>{state.contador}</h3>
    </div>
  );
};

export default Contador;
