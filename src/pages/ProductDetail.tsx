import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { productAPI } from "../services/api";
import { useCart } from "../context/CartContext";
import type { Product } from "../types";

export const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) loadProduct(slug);
  }, [slug]);

  const loadProduct = async (slug: string) => {
    try {
      const response = await productAPI.getBySlug(slug);
      setProduct(response.data);
    } catch (error) {
      console.error("Error loading product: ", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div style={styles.container}>Loading...</div>;
  if (!product) return <div style={styles.container}>Product not found</div>;

  return (
    <div style={styles.container}>
      <button onClick={() => navigate(-1)} style={styles.backButton}>
        ← Back
      </button>
      <div style={styles.detailContainer}>
        <div style={styles.detailImage}>
          {product.image ? (
            <img src={product.image} alt={product.name} style={styles.image} />
          ) : (
            <div style={styles.placeholder}>No Image</div>
          )}
        </div>
        <div style={styles.detailInfo}>
          <h1>{product.name}</h1>
          <p style={styles.category}>{product.category_name}</p>
          <p style={styles.price}>${product.price}</p>
          <p style={styles.description}>{product.description}</p>
          <p style={styles.stock}>
            {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
          </p>
          <button
            onClick={() => {
              addToCart(product);
              alert("Added to cart!");
            }}
            disabled={product.stock === 0}
            style={product.stock > 0 ? styles.button : styles.buttonDisabled}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
const styles: { [key: string]: React.CSSProperties } = {
  container: { maxWidth: "1200px", margin: "0 auto", padding: "1rem 2rem" },
  backButton: {
    padding: "0.5rem 1rem",
    background: "#666",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginBottom: "1rem",
  },
  detailContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "3rem",
    marginTop: "2rem",
  },
  detailImage: { height: "400px", background: "#f5f5f5" },
  image: { width: "100%", height: "100%", objectFit: "cover" },
  category: { color: "#666", fontSize: "0.9rem", margin: "0 0 0.5rem 0" },
  price: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#007bff",
    margin: "0.5rem 0",
  },
  description: { lineHeight: "1.6", margin: "1rem 0" },
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
