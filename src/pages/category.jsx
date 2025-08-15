import festiv from '../assets/fest.jpg';
import arbi from '../assets/arbi.jpg';
import brdl from '../assets/brdl.jpg';
import ind from '../assets/ind.jpg';


export function CategorySection() {
  const categories = [
    { title: "Bridal Mehndi", image: brdl },
    { title: "Arabic Mehndi", image: arbi },
    { title: "Indian Mehndi", image: ind },
    { title: "Festive Mehndi", image: festiv },
    { title: "Custom Designs", image: brdl }
  ];

  return (
    <section style={{ padding: "40px 0" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Our Categories</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "8px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {categories.map((cat, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
              background: "#fff",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              textAlign: "center",
              transition: "transform 0.2s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={cat.image}
              alt={cat.title}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "8px" }}>
              <h3 style={{ margin: "8px 0 0", fontSize: "1rem" }}>{cat.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
