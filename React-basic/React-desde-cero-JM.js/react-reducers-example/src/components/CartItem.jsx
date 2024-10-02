const CartItem = ({ data, delFromCart }) => { // Este componente muestra el div con el producto en el carrito.
  let { id, name, price, quantity } = data; // Data tiene la info del producto.

  return (
    <div style={{ borderBottom: "thin solid gray" }}>
      <h4>{name}</h4>
      <h5>
        ${price}.00 x {quantity} = ${price * quantity}.00
      </h5>
      <button onClick={() => delFromCart(id)}>Eliminar Uno</button>
      <br />
      <button onClick={() => delFromCart(id, true)}>Eliminar Todos</button>
      <br />
      <br />
    </div>
  );
};

export default CartItem;
