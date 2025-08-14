import React from "react";

const About = () => {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#f8fafc", color: "#1a202c", lineHeight: 1.6 }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}>
        {/* Page Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h1 style={{
            fontSize: "3rem",
            fontWeight: 800,
            marginBottom: "1rem",
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "#2d3748"
          }}>
            About Us
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#718096", fontWeight: 300 }}>
            Get to know our team and connect with us
          </p>
        </div>

        {/* Top Cards Section */}
        <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginBottom: "80px", flexWrap: "wrap" }}>
          {/* Director Card */}
          <div style={{
            background: "white",
            borderRadius: "20px",
            padding: "40px 30px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            textAlign: "center",
            minWidth: "300px",
            flex: 1,
            maxWidth: "400px"
          }}>
            <div style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
              fontSize: "2rem",
              color: "white",
              background: "linear-gradient(135deg, #667eea, #764ba2)"
            }}>
              <svg fill="currentColor" viewBox="0 0 24 24" width="40" height="40">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "15px", color: "#2d3748" }}>Director</h3>
            <div style={{ color: "#4a5568", marginBottom: "25px", fontSize: "1rem" }}>
              <div style={{ marginBottom: "10px" }}>John Smith</div>
              <div style={{ marginBottom: "10px" }}>director@company.com</div>
              <div>+1 (555) 123-4567</div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
              {/* Social Links */}
              <a href="#" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "45px",
                height: "45px",
                background: "#f7fafc",
                borderRadius: "50%",
                color: "#4a5568",
                textDecoration: "none",
                border: "2px solid transparent"
              }} title="LinkedIn">
                <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                </svg>
              </a>
              <a href="#" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "45px",
                height: "45px",
                background: "#f7fafc",
                borderRadius: "50%",
                color: "#4a5568",
                textDecoration: "none",
                border: "2px solid transparent"
              }} title="Twitter">
                <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Developer Section */}
        <div style={{
          background: "white",
          borderRadius: "25px",
          padding: "50px 40px",
          textAlign: "center",
          boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
          marginTop: "40px"
        }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "30px", color: "#2d3748" }}>Our Developer</h2>
          <div style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            color: "white",
            padding: "30px 40px",
            borderRadius: "20px",
            boxShadow: "0 10px 25px rgba(102,126,234,0.3)"
          }}>
            <div style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "10px" }}>Jane Doe</div>
            <div style={{ fontSize: "1rem", opacity: 0.9, marginBottom: "20px" }}>Frontend Developer</div>
            <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
              <a href="#" style={{ width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.2)", color: "white", textDecoration: "none" }}>LI</a>
              <a href="#" style={{ width: "40px", height: "40px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.2)", color: "white", textDecoration: "none" }}>GH</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
