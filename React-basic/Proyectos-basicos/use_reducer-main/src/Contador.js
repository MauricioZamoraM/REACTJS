import React from 'react'
import { useReducer } from 'react';
import { contadorInit, contadorInitialState, contadorReducer } from './reducers/contadorReducer';

const Contador = () => {

    const [state, dispatch] = useReducer(contadorReducer, contadorInitialState, contadorInit);

    const sumar = () => {
        dispatch({ type: "INCREMENT", payload: 1 })

    }

    const restar = () => {
        dispatch({ type: "DECREMENT", payload: 1 })
    }

    const reset = () => {
        dispatch({ type: "RESET", payload: 0 })
    }
  return (
      <div className="App" style={{ textAling: "center" }}>
          <h2>Contador Reducer</h2>
          <hr />
          <h1>{state.contador}</h1>
          <button onClick={sumar}>Sumar</button>
          <button onClick={restar}>Restar</button>
          <button onClick={reset}>Borrar</button>
      </div>
  )
}

export default Contador