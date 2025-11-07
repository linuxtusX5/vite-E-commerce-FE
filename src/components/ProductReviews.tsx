import React from "react";
import Slider from "react-slick";
import reviewsData from "../data/reviewsData";

const ReviewCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div style={styles.container}>
      <div style={styles.container2}>
        <h2 style={styles.title}>Customer Reviews</h2>
        <Slider {...settings}>
          {reviewsData.map((review) => (
            <div key={review.id}>
              <div
                style={styles.cardStyle}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(-5px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 8px 20px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "none";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 4px 12px rgba(0, 0, 0, 0.1)";
                }}
              >
                <p style={styles.commentStyle}>“{review.comment}”</p>
                <p style={styles.nameStyle}>— {review.name}</p>
                <p style={styles.ratingStyle}>⭐⭐⭐⭐⭐ {review.rating}/5</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ReviewCarousel;

const styles: { [key: string]: React.CSSProperties } = {
  title: {
    color: "#007bff",
    fontSize: "45px",
    textAlign: "center",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
    marginBottom: "10px",
  },
  container: {
    maxWidth: "100%",
    background: "#1a1a1a",
    padding: "1rem 2rem",
  },
  container2: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "1rem 2rem",
  },
  ratingStyle: {
    color: "#f5a623",
    fontWeight: "500",
  },
  commentStyle: {
    fontStyle: "italic",
    color: "#ddd",
    marginBottom: "10px",
  },
  nameStyle: {
    fontWeight: "600",
    fontSize: "1.1rem",
    marginTop: "10px",
    color: "#fff",
  },
  cardStyle: {
    background: "#111",
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    padding: "30px 20px",
    maxWidth: "520px",
    margin: "30px auto",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
};
