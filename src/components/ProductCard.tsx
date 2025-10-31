import React from "react";
import { useNavigate } from "react-router-dom";
import type { Product } from "../types";
import { useCart } from "../context/CartContext";

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div style={styles.card}>
      <div
        style={styles.imageContainer}
        onClick={() => navigate(`/products/${product.slug}`)}
      >
        {product.image ? (
          <img src={product.image} alt={product.name} style={styles.image} />
        ) : (
          <div style={styles.placeholder}>No Image</div>
        )}
      </div>
      <div style={styles.cardBody}>
        <h3 style={styles.productName}>{product.name}</h3>
        <p style={styles.category}>{product.category_name}</p>
        <p style={styles.price}>{product.price}</p>
        <p style={styles.stock}>
          {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
        </p>
        <button
          onClick={() => addToCart(product)}
          disabled={product.stock === 0}
          style={product.stock > 0 ? styles.button : styles.buttonDisabled}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
const styles: { [key: string]: React.CSSProperties } = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    transition: "transform 0.2s",
  },
  imageContainer: { height: "200px", background: "#f5f5f5", cursor: "pointer" },
  image: { width: "100%", height: "100%", objectFit: "cover" },
  placeholder: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#eee",
  },
  cardBody: { padding: "1rem" },
  productName: { margin: "0 0 0.5rem 0", fontSize: "1.1rem" },
  category: { color: "#666", fontSize: "0.9rem", margin: "0 0 0.5rem 0" },
  price: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#007bff",
    margin: "0.5rem 0",
  },
  stock: { fontSize: "0.9rem", color: "#666", margin: "0.5rem 0" },
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
  buttonDisabled: {
    width: "100%",
    padding: "0.75rem",
    background: "#ccc",
    color: "#666",
    border: "none",
    borderRadius: "4px",
    cursor: "not-allowed",
    fontSize: "1rem",
  },
};
