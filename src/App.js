import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Service from './pages/service.jsx';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ marginTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </div>
      <Footer /> 
    </Router>
  );
}

export default App;