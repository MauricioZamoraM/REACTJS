import { TYPES } from "../actions/shoppingAction";

export const shoppingInitialState = {  //Estado inicial de los productos del carrito, estos productos pueden venir de una api si fuera un ejercicio real.
  products: [
    { id: 1, name: "Producto 1", price: 100 },
    { id: 2, name: "Producto 2", price: 200 },
    { id: 3, name: "Producto 3", price: 300 },
    { id: 4, name: "Producto 4", price: 400 },
    { id: 5, name: "Producto 5", price: 500 },
    { id: 6, name: "Producto 6", price: 600 },
  ],
  cart: [], // Carrito de compras que almacena todos los nuevos productos que se van agregando.
};

export function shoppingReducer(state, action) { // Funcion reductora que evalua todas las acciones.
  switch (action.type) {
    case TYPES.ADD_TO_CART: { // Colocamos toda la logica de la accion.
      let newItem = state.products.find( // Busca el id en la lista de los productos que ya existen y lo guarda en una variable.
        (product) => product.id === action.payload // Esto es para identificar cual producto es el que voy a agregar.
      );
      //console.log(newItem);
      //
      let itemInCart = state.cart.find((item) => item.id === newItem.id); //Recorre los item(productos) del carrito y devuelve el item que ya existia si coincide el id.

      return itemInCart // Retornamos el item que coincidio o no.
        ? { // Si coincidio el item, osea es true ejecutamos las siguientes instrucciones.
            ...state, // Hacemos una copia del estado.
            cart: state.cart.map((item) => //Generamos un nuevo arreglo.
            //Cuando coincida el item del carrito con el nuevo item del producto que queremos agregar.
              item.id === newItem.id // newItem.id es el id del producto que se quiere agregar.
               // Si coincide haga una copia del ...item y acceda al item.quantity del producto y le suma uno.
              ? { ...item, quantity: item.quantity + 1 }
                : item // Caso contrario regresa el valor del item, aqui no va a caer nunca ya que esto se valido previamente.
            ),
          }
        : { // Caso contrario agrega el nuevo item(producto), porque es un producto nuevo por agregar al carrito.
            ...state, // Hacemos una copia del estado actual.
            // En la propiedad cart, hacemos una copia de lo que tenia cart mas el nuevo elemento que es newItem,
            cart: [...state.cart, { ...newItem, quantity: 1 }], // quantity indica que es el primer item de nuestro carrito de compras.
          };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload); // Busca el id a eliminar y lo almacena el la variable itemToDelete

      return itemToDelete.quantity > 1 // Si la propiedad quantity es mayor a uno, hacemos la logica para restar el elemento.
        ? {
            ...state, // Hacemos una copia del estado actual.
            cart: state.cart.map((item) => // Generamos un nuevo arreglo com map y evaluamos si item.id === action.payload que es el id que nos manda la accion.
              item.id === action.payload // Si es verdadero
                ? { ...item, quantity: item.quantity - 1 } // Retornamos toda la info del item, pero modificando si propiedad quantity: item.quantity - 1, restandole uno.
                : item // Caso contrario devolvemos el item con la info que tenia.
            ),
          }
          //Si la propiedad quantity llega a 0 significa que ya no tenemos productos para eliminar entonces no tiene sentido seguir eliminando ya que sino vamos a tener en la propiedad valores negativos -1,-2 para eso se cre el ternario.
        : {
            ...state, // Hacemos una copia del estado actual.
            // Filter filtra y nos permite eliminar elementos.
            cart: state.cart.filter((item) => item.id !== action.payload), // Siempre que item.id !== action.payload se van a ir guardando los nuevos datos en el arreglo, de esta forma filtramos y excluimos el item que corresponde al id de payload.
          };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        ...state, // Hacemos una copia del estado actual.
        cart: state.cart.filter((item) => item.id !== action.payload), // Siempre que item.id !== action.payload se van a ir guardando los nuevos datos en el arreglo, de esta forma filtramos y excluimos el item que corresponde al id de payload.
      };
    }
    case TYPES.CLEAR_CART:
      return shoppingInitialState; // Retornamos los valores iniciales que no tiene productos para limpiar el carrito.
    default:
      return state;
  }
}
