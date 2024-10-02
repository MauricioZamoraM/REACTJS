const ProductItem = ({ data, addToCart }) => {
  let { id, name, price } = data; // Esta data es la de los productos
  return (
    <div style={{ border: "thin solid gray", padding: "1rem" }}> {/*Mostramos los productos del carrito */}
      <h4>{name}</h4>
      <h5>${price}.00</h5>
      {/* El arrow function se utiliza para agregar al carrito */}
      <button onClick={() => addToCart(id)}>Agregar</button> {/* Le pasamos el id a addToCart para indicar cual producto va a agregar */}
    </div>
  );
};

export default ProductItem;
