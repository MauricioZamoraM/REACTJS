
import React from 'react'
import { useReducer } from 'react'
import { TYPES } from '../actions/shoppingAction';
import { shoppingReducer, shoppingInitialState } from '../reducers/shoppingReducer'
import CartItem from './CartItem';
import ProductItem from './ProductItem';
const ShoppingCart = () => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

    // La variable state tiene el valor de shoppingInitialState, mediante la variable state se accede a products y cart
    //que son variables del objeto shoppingInitialState
    const { products, cart } = state;

    //Añade los productos al carrito
    const addToCart = (id) => {
        //Agrega el producto mediante el id que pasamos con el payload
        dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    }
// Elimina los productos del carrito
    const delFromCart = (id, all = false) => {
        if (all) {
            dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id })
        } else {
            dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id })
        }
        
    }

    const clearCart = () => {
        dispatch({ type: TYPES.CLEAR_CART })
    }
    return (
        <div>
            <h2>Carrito de compras</h2>
            <h3>Productos</h3>
            {/* Lista de productos a agregar */}
            <article className='box grid-responsive'>
                {/* Recorre la lista de productos y crea un nuevo array llamado product y mediante un componente muestra al info del nuevo array. */}
                {products.map((product) => (
                    // Le pasamos data a el componente ProductItem para que tenga acceso a las variables de product
                   // Y la funcion addToCart para que agrege los productos al carrito
                    <ProductItem key={product.id} data={product} addToCart={addToCart} />
                ))}
            </article>
            <h3>Carrito</h3>
            {/* Lista de productos agregados al carrito */}
            <article className='box'>
                <button onClick={clearCart}>Limpiar Carrito</button>
                {/* Se crea un indice para evitar duplicados de id */}
                {cart.map((item, index) => (
                    <CartItem key={index} data={item} delFromCart={delFromCart} />
                ))}

            </article>
        </div>
    )
}

export default ShoppingCart