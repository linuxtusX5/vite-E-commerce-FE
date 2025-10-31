import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div style={styles.container}>
        <h1>Shopping Cart</h1>
        <p>Your cart is empty</p>
        <button onClick={() => navigate("/")} style={styles.button}>
          Continue Shopping
        </button>
      </div>
    );
  }
  return (
    <div style={styles.container}>
      <h1>Shopping Cart</h1>
      <div style={styles.cartContainer}>
        {cart.map((item) => (
          <div key={item.product.id} style={styles.cartItem}>
            <div style={styles.cartIteminfo}>
              <h3>{item.product.name}</h3>
              <p>${item.product.price}</p>
            </div>
            <div style={styles.cartItemActions}>
              <input
                type="number"
                min="1"
                max={item.product.stock}
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.product.id, parseInt(e.target.value))
                }
                style={styles.quantityInput}
              />
              <button
                onClick={() => removeFromCart(item.product.id)}
                style={styles.removeButton}
              >
                Remove
              </button>
            </div>
            <div style={styles.cartItemTotal}>
              ${(parseFloat(item.product.price) * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
      <div style={styles.cartSummary}>
        <h2>Total: ${getCartTotal().toFixed(2)}</h2>
        <button onClick={() => navigate("/checkout")} style={styles.button}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};
const styles: { [key: string]: React.CSSProperties } = {
  container: { maxWidth: "1200px", margin: "0 auto", padding: "1rem 2rem" },
  button: {
    width: "100%",
    padding: "0.75rem",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  cartContainer: { marginTop: "2rem" },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    border: "1px solid #ddd",
    borderRadius: "4px",
    marginBottom: "1rem",
  },
  cartItemInfo: { flex: 1 },
  cartItemActions: { display: "flex", gap: "1rem", alignItems: "center" },
  quantityInput: {
    width: "60px",
    padding: "0.5rem",
    borderRadius: "4px",
    border: "1px solid #ddd",
  },
  removeButton: {
    padding: "0.5rem 1rem",
    background: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  cartItemTotal: { fontWeight: "bold", fontSize: "1.1rem" },
  cartSummary: { marginTop: "2rem", textAlign: "right" },
};
