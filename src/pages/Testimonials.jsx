import { useEffect } from "react";
import '../style/testimonials.css';
import cst1 from '../assets/cst1.jpg';
import cst2 from '../assets/cst2.jpg';
import cst3 from '../assets/cst3.jpg';
import cst4 from '../assets/cst4.jpg';

export function Testimonials() {
  const images = [
    cst1 ,
    cst2 ,
    cst3 ,
    cst4 
  ];

  const reviews = [
    { text: "Absolutely loved the design and detail!", stars: 5, author: "Priya S." },
    { text: "Perfect for my wedding, highly recommend!", stars: 4, author: "Ayesha K." },
    { text: "Beautiful artistry and friendly service.", stars: 5, author: "Neha G." },
    { text: "Great experience, will book again!", stars: 4, author: "Simran P." }
  ];

  const renderStars = (count) => "⭐".repeat(count);

  const MarqueeRow = ({ children, direction = "left" }) => (
    <div className={`marquee-row ${direction}`}>
      <div className="marquee-content">
        {children}
        {children /* duplicate for seamless loop */}
      </div>
    </div>
  );

  return (
    <section style={{ padding: "40px 0"}}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>What Our Clients Say</h2>

      {/* Row 1 - Images */}
      <MarqueeRow direction="left">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`testimonial-${i}`}
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "8px",
              objectFit: "cover",
              margin: "0 12px"
            }}
          />
        ))}
      </MarqueeRow>

      {/* Row 2 - Reviews */}
      <MarqueeRow direction="right">
        {reviews.map((rev, i) => (
          <div
            key={i}
            style={{
              background: "#fff",
              padding: "18px",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              margin: "0 12px",
              minWidth: "250px"
            }}
          >
            <p style={{ fontSize: "0.9rem", marginBottom: "6px" }}>{rev.text}</p>
            <div style={{ fontSize: "1rem", color: "#ff9800" }}>
              {renderStars(rev.stars)}
            </div>
            <small style={{ color: "#555" }}>- {rev.author}</small>
          </div>
        ))}
      </MarqueeRow>

      {/* Row 3 - Images */}
      <MarqueeRow direction="left">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`testimonial-${i}`}
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "8px",
              objectFit: "cover",
              margin: "0 10px"
            }}
          />
        ))}
      </MarqueeRow>

      {/* Row 4 - Reviews */}
      <MarqueeRow direction="right">
        {reviews.map((rev, i) => (
          <div
            key={i}
            style={{
              background: "#fff",
              padding: "15px",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              margin: "0 10px",
              minWidth: "250px"
            }}
          >
            <p style={{ fontSize: "0.9rem", marginBottom: "6px" }}>{rev.text}</p>
            <div style={{ fontSize: "1rem", color: "#ff9800" }}>
              {renderStars(rev.stars)}
            </div>
            <small style={{ color: "#555" }}>- {rev.author}</small>
          </div>
        ))}
      </MarqueeRow>
    </section>
  );
}
