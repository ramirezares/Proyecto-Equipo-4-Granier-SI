import { useContext, useEffect, useRef } from "react";
import { CartContext } from "../hooks/CartContext";
import { UserContext } from "../hooks/UserContext";
import ProductOnCart from "../components/ProductOnCart";
import { Link, useNavigate } from "react-router-dom";
import { createOrder } from "../controllers/order";
import { updateCartState } from "../controllers/cart";
import "./ShoppingCart.style.css";

const ShoppingCart = () => {
  const { cartItems, cartId, loading, error } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const paypalRef = useRef();

  useEffect(() => {
    if (window.paypal) {
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: cartItems
                      .reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0
                      )
                      .toFixed(2),
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            console.log(order);

            try {
              const newOrder = {
                uidUsuario: user.uid,
                productos: cartItems,
                subtotal: cartItems.reduce(
                  (sum, item) => sum + item.price * item.quantity,
                  0
                ),
                estado: "pendiente",
              };
              await createOrder(newOrder);
              await updateCartState(cartId, "inactivo");
              navigate("/granier/shoppingCart/details");
            } catch (error) {
              console.error("Error al procesar el pedido:", error);
            }
          },
          onError: (err) => {
            console.error("PayPal Checkout onError", err);
          },
        })
        .render(paypalRef.current);
    }
  }, [cartItems, user, cartId, navigate]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!user || !user.uid) {
    return <p>Error: Usuario no autenticado</p>;
  }

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="shopping-cart">
      <h1>Tu Carrito de Productos</h1>
      <div className="cart-header">
        <div>Producto</div>
        <div>Precio</div>
        <div>Cantidad</div>
        <div>Total</div>
      </div>
      <div className="cart-products">
        {cartItems.map((product, index) => (
          <ProductOnCart key={index} product={product} />
        ))}
      </div>
      <div className="cart-summary">
        <p>Sub-total: ${subtotal.toFixed(2)}</p>
        <div ref={paypalRef}></div>
      </div>
    </div>
  );
};

export default ShoppingCart;
