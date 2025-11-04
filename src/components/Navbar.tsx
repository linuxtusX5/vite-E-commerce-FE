import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import type React from "react";
import { ShoppingCart } from "lucide-react";

export const Navbar: React.FC = () => {
  const { getCartCount } = useCart();

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          TechShop
        </Link>
        <div style={styles.links}>
          <Link to="/" style={styles.link}>
            Products
          </Link>
          <Link to="#" style={styles.link}>
            About
          </Link>
          <Link to="/" style={styles.link}>
            Contact Us
          </Link>
          <Link to="/cart" style={styles.link}>
            <ShoppingCart />{" "}
            <span style={styles.cartBadge}>{getCartCount()}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
const styles: { [key: string]: React.CSSProperties } = {
  nav: {
    background: "#000",
    color: "#fff",
    padding: "1rem 0",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "white",
    textDecoration: "none",
  },
  links: {
    display: "flex",
    gap: "2rem",
  },
  link: { color: "white", textDecoration: "none", position: "relative" },
  cartBadge: {
    marginTop: "0",
    position: "absolute",
    top: "-8px",
    right: "-10px",
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "50%",
    fontSize: "0.75rem",
    width: "18px",
    height: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
