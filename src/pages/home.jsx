import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'; // Redux
import '../style/home.css';
import { AnimatedStack } from "./AnimatedStack";

function Home() {
  // Hero images
  const heroImages = [
    '/images/hero1.jpg',
    '/images/hero2.jpg',
    '/images/hero3.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto switch images every 2.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Card data (static)
  const cardData = [
    { id: 1, img: '/images/card1.jpg', title: 'Category One' },
    { id: 2, img: '/images/card2.jpg', title: 'Category Two' },
    { id: 3, img: '/images/card3.jpg', title: 'Category Three' },
    { id: 4, img: '/images/card4.jpg', title: 'Category Four' },
  ];

  // Recommended items from Redux
  const recommendedItems = useSelector((state) => state.recommended.items);

  return (
    <AnimatedStack />
//     <div className="home-page">
//       {/* Hero Section */}
//  <div className="stack-container">
//       <div className="rect rect1"></div>
//       <div className="rect rect2"></div>
//       <div className="rect rect3"></div>
//       <div className="rect rect4"></div>
//     </div>

//       {/* Card Section */}
//       <div className="card-section">
//         {cardData.map((card) => (
//           <div key={card.id} className="card">
//             <img src={card.img} alt={card.title} className="card-img" />
//             <h3>{card.title}</h3>
//           </div>
//         ))}
//       </div>

//       {/* Recommended Section */}
//       <h2 className="section-title">Most Recommended</h2>
//       <div className="recommended-section">
//         {recommendedItems.map((item) => (
//           <div key={item.id} className="recommended-card">
//             <img src={item.img} alt={item.name} className="recommended-img" />
//             <h3>{item.category}</h3>
//             <p className="old-price">₹{item.oldPrice}</p>
//             <p className="new-price">₹{item.newPrice}</p>
//           </div>
//         ))}
//       </div>
//     </div>
  );
}

export default Home;
