import { TYPES } from "../actions/crudActions";

export const crudInitialState = {
  db: null,
};

export function crudReducer(state, action) {
  switch (action.type) {
    case TYPES.READ_ALL_DATA: {
      //console.log(action.payload);
      return {
        ...state,// Haga una copia del estado
        db: action.payload.map((data) => data), //Mapeamos todos los elementos que vienen en el action.payload y los pasamos al nuevo arreglo db y este los muestra en pantalla.
      };
    }
    case TYPES.CREATE_DATA: {
      //console.log(action.payload);
      return { //Retorna un objeto donde
        ...state, // Haga una copia del estado
        db: [...state.db, action.payload], // y le sumas db que esta a su vez tiene una copia del estado y el action.payload que trae el nuevo registro.
      };
    }
    case TYPES.UPDATE_DATA: {
      //console.log(action.payload);
      let newData = state.db.map((el) => // Declaramos newData que va a corresponder al registro que queremos actualizar.
        el.id === action.payload.id ? action.payload : el // Al usar el ternario remplazamos toda la data donde el id coincidio y se almacena en newData.
      );                                                // Caso contrario el elemento que ya teniamos.

      return { 
        ...state,// Retornamos una copia del estado anterior y adicionalmente y remplazamos db por esta newData.
        db: newData, 
      };
    }
    case TYPES.DELETE_DATA: {
      //console.log(action.payload);
      let newData = state.db.filter((el) => el.id !== action.payload); // Devuelve un nuevo array sin el elemento que quiero eliminar.

      return {
        ...state, // Retornamos una copia del estado anterior y adicionalmente y remplazamos db por esta newData.
        db: newData,
      };
    }
    case TYPES.NO_DATA:
      return crudInitialState;
    default:
      return state;
  }
}
