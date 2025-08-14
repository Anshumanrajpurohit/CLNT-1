// src/assets/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer style={{ padding: '1rem', background: '#222', color: '#fff', marginTop: '2rem', textAlign: 'center' }}>
      <p>© {new Date().getFullYear()} My Booking Website. All rights reserved.</p>
    </footer>
  );
}

export default Footer;