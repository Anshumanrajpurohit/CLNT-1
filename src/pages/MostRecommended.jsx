import mnd1 from '../assets/mnd(1).jpg';
import mnd2 from '../assets/mnd(2).jpg';
import mnd3 from '../assets/mnd(3).jpg';
import mnd4 from '../assets/mnd(4).jpg';
import mnd5 from '../assets/mnd(5).jpg';
import mnd6 from '../assets/mnd(6).jpg';
import mnd7 from '../assets/mnd(7).jpg';
import mnd8 from '../assets/mnd(8).jpg';
import mnd9 from '../assets/mnd(9).jpg';
import mnd10 from '../assets/mnd(10).jpg';
import mnd11 from '../assets/mnd(11).jpg';
import mnd12 from '../assets/mnd(12).jpg';
import mnd13 from '../assets/mnd(13).jpg';
import mnd14 from '../assets/mnd(14).jpg';

export function MostRecommended() {
  const recommendations = [
    { name: "Deluxe Bridal Package", image: mnd1 , oldPrice: 1500, newPrice: 1200 },
    { name: "Festive Design", image: mnd2 , oldPrice: 800, newPrice: 650 },
    { name: "Elegant Arabic Style", image: mnd3 , oldPrice: 900, newPrice: 750 },
    { name: "Custom Party Design", image: mnd4 , oldPrice: 700, newPrice: 550 },
    { name: "Deluxe Bridal Package", image: mnd5 , oldPrice: 1500, newPrice: 1200 },
    { name: "Festive Design", image: mnd6 , oldPrice: 800, newPrice: 650 },
    { name: "Elegant Arabic Style", image: mnd7 , oldPrice: 900, newPrice: 750 },
    { name: "Custom Party Design", image: mnd8 , oldPrice: 700, newPrice: 550 },
    { name: "Deluxe Bridal Package", image: mnd9 , oldPrice: 1500, newPrice: 1200 },
    { name: "Festive Design", image: mnd10 , oldPrice: 800, newPrice: 650 },
    { name: "Elegant Arabic Style", image: mnd11 , oldPrice: 900, newPrice: 750 },
    { name: "Custom Party Design", image: mnd12 , oldPrice: 700, newPrice: 550 },
    { name: "Elegant Arabic Style", image: mnd13 , oldPrice: 900, newPrice: 750 },
    { name: "Custom Party Design", image: mnd14 , oldPrice: 700, newPrice: 550 }
  ];

  return (
    <section style={{ padding: "40px 0" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Most Recommended</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {recommendations.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
              background: "#fff",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              textAlign: "center",
              paddingBottom: "12px",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100%", height: "160px", objectFit: "cover" }}
            />
            <div style={{ padding: "10px" }}>
              <h3 style={{ margin: "8px 0", fontSize: "1.1rem" }}>{item.name}</h3>
              <p style={{ margin: "4px 0", fontSize: "0.9rem", color: "#888", textDecoration: "line-through" }}>
                ₹{item.oldPrice}
              </p>
              <p style={{ margin: "4px 0", fontSize: "1rem", fontWeight: "bold", color: "#d32f2f" }}>
                ₹{item.newPrice}
              </p>
              <button
                style={{
                  background: "#d32f2f",
                  color: "#fff",
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  marginTop: "6px",
                }}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
