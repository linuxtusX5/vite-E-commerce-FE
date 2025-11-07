import React from "react";
import facebookIcon from "../assets/facebook (1).png";
import instagramIcon from "../assets/instagram.png";
import twitterIcon from "../assets/twitter.png";
import ytIcon from "../assets/youtube.png";

export const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
          <h2 style={styles.brand}>TechShop</h2>
          <p style={styles.text}>
            Your premier destination for cutting-edge technology and lifestyle
            products.
          </p>
        </div>

        <div style={styles.column}>
          <h4 style={styles.heading}>Quick Links</h4>
          <ul style={styles.list}>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
            <li>Support</li>
          </ul>
        </div>

        <div style={styles.column}>
          <h4 style={styles.heading}>Categories</h4>
          <ul style={styles.list}>
            <li>Gadgets</li>
            <li>Home</li>
            <li>Accessories</li>
          </ul>
        </div>

        <div style={styles.column}>
          <h4 style={styles.heading}>Follow Us</h4>
          <div style={styles.socials}>
            <img style={styles.icon} src={facebookIcon} alt="Facebook" />
            <img style={styles.icon} src={instagramIcon} alt="Instagram" />
            <img style={styles.icon} src={twitterIcon} alt="Twitter" />
            <img style={styles.icon} src={ytIcon} alt="Youtube" />
          </div>
        </div>
      </div>

      <hr style={styles.divider} />
      <p style={styles.copy}>© 2025 TechShop. All rights reserved.</p>
    </footer>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    backgroundColor: "#1a1a1a",
    color: "#ccc",
    padding: "40px 150px",
    fontFamily: "'Poppins', sans-serif",
  },
  icon: {
    width: "35px",
    height: "35px",
    objectFit: "contain",
    cursor: "pointer",
  },
  container: {
    // maxWidth: "100%",
    display: "flex",
    margin: "0 auto",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: "20px",
  },
  column: {
    flex: "1",
    minWidth: "200px",
    // border: "1px solid red",
    margin: "10px 20px",
  },
  brand: {
    color: "#007bff",
    fontSize: "45px",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
    marginBottom: "10px",
  },
  heading: {
    color: "#fff",
    fontSize: "1.5rem",
    marginBottom: "10px",
  },
  text: {
    lineHeight: 1.6,
    color: "#fff",
    fontSize: "1.1rem",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    lineHeight: 1.8,
    color: "#ccc",
    fontSize: "1.1rem",
  },
  socials: {
    display: "flex",
    gap: "12px",
    color: "#aaa",
    fontSize: "1.2rem",
  },
  divider: {
    border: "0.5px solid #2a2a2a",
    margin: "20px 0",
  },
  copy: {
    textAlign: "center",
    fontSize: "1.1rem",
    color: "#fff",
    paddingTop: "20px",
  },
};
