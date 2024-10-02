import React from 'react'

//La data es la informacion del shoppingInitialState
const ProductItem = ({ data, addToCart }) => {
    let { id, name, price } = data;
    return (
        // Esta es la lista de productos para agregar
        <div style={{ border: "thin solid gray", padding: "1rem" }}>
            <h4>{name}</h4>
            <h5>${price}.00</h5>
        {/*Agregamos la funcion addToCart para que agrege productos al carrito y le pasamos el id para indicarle cual producto debe agregar */}
            <button onClick={() => addToCart(id)}>Agregar</button>
        </div>
    )
}

export default ProductItem