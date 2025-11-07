import React from "react";

export const StayUpdated: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Stay Updated!</h1>

      <p style={styles.subtitle}>
        Get the latest tech news and exclusive deals delivered to your box.
      </p>
      <div style={styles.form}>
        <input
          style={styles.email}
          type="email"
          placeholder="Enter your eamail"
        />
        <button style={styles.button}>Subscribe</button>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem 2rem 4rem 2rem",
  },
  title: {
    color: "#007bff",
    fontSize: "45px",
    textAlign: "center",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
    color: "#fff",
    textAlign: "center",
  },
  button: {
    width: "10%",
    height: "50px",
    padding: "0.75rem",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  email: {
    width: "25%",
    padding: "0.75rem",
    height: "25px",
    background: "#1a1a1a",
    color: "white",
    border: "none",
    borderRadius: "10px",
  },
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  },
};
