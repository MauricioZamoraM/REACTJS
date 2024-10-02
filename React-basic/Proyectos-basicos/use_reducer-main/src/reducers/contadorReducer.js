import { TYPES } from "../actions/contadorActions"

export const contadorInitialState = { contador: 0 }

export const contadorInit = (contadorInitialState) => {
    return {
        contador: contadorInitialState.contador + 10
    }
}


export function contadorReducer(state, action) {
    switch (action.type) {
        case TYPES.INCREMENT:
            return { contador: state.contador + action.payload }
        case TYPES.DECREMENT:
            return { contador: state.contador - action.payload }
        case TYPES.RESET:
            return { contador: state.contador = action.payload }
        default:
            return state

    }
}