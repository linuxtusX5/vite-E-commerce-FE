import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import type React from "react";

export const Navbar: React.FC = () => {
  const { getCartCount } = useCart();

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          E-Shop
        </Link>
        <div style={styles.links}>
          <Link to="/" style={styles.link}>
            Products
          </Link>
          <Link to="/cart" style={styles.link}>
            Cart ({getCartCount()})
          </Link>
        </div>
      </div>
    </nav>
  );
};
const styles: { [key: string]: React.CSSProperties } = {
  nav: { background: "#333", color: "#fff", padding: "1rem 0" },
  container: { maxWidth: "1200px", margin: "0 auto", padding: "1rem 2rem" },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "white",
    textDecoration: "none",
  },
  links: { display: "flex", gap: "2rem" },
  link: { color: "white", textDecoration: "none" },
};
