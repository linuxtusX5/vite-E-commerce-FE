import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { orderAPI } from "../services/api";
import type { OrderData } from "../types";

export const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { cart, clearCart, getCartTotal } = useCart();
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    address: "",
    city: "",
    postal_code: "",
    country: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const orderData: OrderData = {
      ...formData,
      items: cart.map((item) => ({
        product_id: item.product.id,
        quantity: item.quantity,
      })),
    };
    try {
      await orderAPI.create(orderData);
      clearCart();
      alert("Order placed successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error placing order: ", error);
      alert("Error placing order. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  if (cart.length === 0) {
    return (
      <div style={styles.container}>
        <p>Your cart is empty</p>
        <button onClick={() => navigate("/")} style={styles.button}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Checkout</h1>
      <div style={styles.checkoutContainer}>
        <div style={styles.checkoutForm}>
          <h2 style={styles.name}>Shipping Information</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              required
              value={formData.first_name}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              required
              value={formData.last_name}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              required
              value={formData.address}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              required
              value={formData.city}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="text"
              name="postal_code"
              placeholder="Postal Code"
              required
              value={formData.postal_code}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              required
              value={formData.country}
              onChange={handleChange}
              style={styles.input}
            />
            <button type="submit" disabled={submitting} style={styles.button}>
              {submitting ? "Placing Order..." : "Place Order"}
            </button>
          </form>
        </div>
        <div style={styles.orderSummary}>
          <h2>Order Summary</h2>
          {cart.map((item) => (
            <div key={item.product.id} style={styles.summaryItem}>
              <span>
                {item.product.name} x {item.quantity}
              </span>
              <span>
                &#8369;
                {Number(item.product.price).toLocaleString("en-PH", {
                  minimumFractionDigits: 2,
                })}
              </span>
            </div>
          ))}
          <div style={styles.summaryTotal}>
            <strong>
              Total: &#8369;
              {Number(getCartTotal()).toLocaleString("en-PH", {
                minimumFractionDigits: 2,
              })}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};
const styles: { [key: string]: React.CSSProperties } = {
  name: {
    color: "#fff",
  },
  title: {
    color: "#007bff",
    fontSize: "45px",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "1rem 2rem",
    // background: "#fff",
  },
  button: {
    width: "80%",
    padding: "0.75rem",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  checkoutContainer: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "2rem",
    marginTop: "2rem",
  },
  checkoutForm: {},
  input: {
    width: "80%",
    padding: "0.75rem",
    marginBottom: "1rem",
    borderRadius: "4px",
    border: "1px solid #ddd",
    fontSize: "1rem",
  },
  orderSummary: {
    border: "1px solid #ddd",
    color: "#fff",
    borderRadius: "8px",
    padding: "1.5rem",
    height: "fit-content",
  },
  summaryItem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "0.5rem",
  },
  summaryTotal: {
    marginTop: "1rem",
    paddingTop: "1rem",
    borderTop: "2px solid #333",
  },
};
