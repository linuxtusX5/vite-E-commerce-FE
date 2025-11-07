import React from "react";
import Marquee from "react-fast-marquee";
import { ProductList } from "./ProductList";
import ProductReviews from "../components/ProductReviews";
import { useNavigate } from "react-router-dom";
import { StayUpdated } from "../components/StayUpdated";
import { Footer } from "../components/Footer";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div style={styles.hero}>
        <img
          src="/img/pexels-sorjigrey-9956769.jpg"
          alt="Banner Tech"
          style={styles.banner}
        />
        <div style={styles.overlay}>
          <h1 style={styles.title}>
            Future <span style={{ color: "#007bff" }}>TechShop</span> LifeStyle
          </h1>
          <p style={styles.subtitle}>
            Discover the best deals on your favorite tech
          </p>
          <button onClick={() => navigate("/products/")} style={styles.button}>
            Shop Now
          </button>
        </div>
      </div>
      <div style={styles.marqueeContainer}>
        <Marquee speed={50} gradient={false} pauseOnHover>
          <span style={styles.marqueeText}>
            | &nbsp; 🎉 Free shipping on orders over $50! &nbsp; | &nbsp; 🔥 New
            arrivals every week! &nbsp; | &nbsp; 💻 Exclusive deals on laptops &
            accessories! | &nbsp; 🎉 Free shipping on orders over $50! &nbsp; |
            &nbsp; 🔥 New arrivals every week! &nbsp; | &nbsp; 💻 Exclusive
            deals on laptops & accessories!
          </span>
        </Marquee>
      </div>
      <ProductList />
      <ProductReviews />
      <StayUpdated />
      <Footer />
    </>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  hero: {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    marginTop: "-100px",
  },
  banner: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  title: {
    fontSize: "4rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
  },
  button: {
    background: "#007bff",
    color: "#fff",
    border: "none",
    padding: "0.75rem 1.5rem",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  marqueeContainer: {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    padding: "1rem 0",
    fontSize: "1.1rem",
    fontWeight: 500,
    letterSpacing: "0.5px",
  },
  marqueeText: {
    whiteSpace: "nowrap",
  },
};
