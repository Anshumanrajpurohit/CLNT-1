import { useState, useEffect } from "react";
import '../style/animate.css';
import poster1 from '../assets/poster-1.jpeg';
import poster2 from '../assets/poster-2.jpeg';
import poster3 from '../assets/poster-3.jpeg';
import poster4 from '../assets/poster-4.jpeg';

export function AnimatedStack() {
  const [frontIndex, setFrontIndex] = useState(0);

  const images = [poster1, poster2, poster3, poster4];
  
  const rects = images.map((_, i) => i);

  const getResponsiveSettings = () => {
    const screenWidth = window.innerWidth;
    
    if (screenWidth < 480) {
      return {
        baseWidth: 280,
        baseHeight: 200,
        offsetIncrement: 15,
        translateOffset: 3,
        gapReduction: 0.6
      };
    } else if (screenWidth < 768) {
      return {
        baseWidth: 400,
        baseHeight: 280,
        offsetIncrement: 20,
        translateOffset: 4,
        gapReduction: 0.7
      };
    } else if (screenWidth < 1024) {
      return {
        baseWidth: 500,
        baseHeight: 350,
        offsetIncrement: 25,
        translateOffset: 4,
        gapReduction: 0.8
      };
    } else if (screenWidth < 1366) {
      return {
        baseWidth: 600,
        baseHeight: 400,
        offsetIncrement: 30,
        translateOffset: 5,
        gapReduction: 0.9
      };
    } else {
      return {
        baseWidth: 700,
        baseHeight: 450,
        offsetIncrement: 35,
        translateOffset: 5,
        gapReduction: 1
      };
    }
  };

  const [settings, setSettings] = useState(getResponsiveSettings());

  useEffect(() => {
    const handleResize = () => {
      setSettings(getResponsiveSettings());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrontIndex((prev) => (prev + 1) % rects.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [rects.length]);

  const containerWidth = settings.baseWidth + (rects.length - 1) * settings.offsetIncrement * settings.gapReduction + 60;
  const containerHeight = settings.baseHeight + 60;

  return (
    <div className="animated-stack-wrapper">
      <section className="stack-section">
        <div
          className="stack-container"
          style={{
            width: `${Math.min(containerWidth, window.innerWidth - 40)}px`,
            height: `${containerHeight}px`,
          }}
        >
          {rects.map((_, i) => {
            const offset = (i - frontIndex + rects.length) % rects.length;
            const isFront = offset === 0;

            const width = settings.baseWidth + offset * settings.offsetIncrement * settings.gapReduction;
            const height = settings.baseHeight;
            const opacity = Math.max(0.3, 1 - offset * 0.2);

            return (
              <div
                key={i}
                className={`stack-rect ${isFront ? "stack-rect--front" : ""}`}
                style={{
                  width: `${Math.min(width, window.innerWidth - 60)}px`,
                  height: `${height}px`,
                  zIndex: rects.length - offset,
                  transform: `translate(-50%, -50%) 
                             translateX(-${offset * settings.translateOffset * settings.gapReduction}px) 
                             translateY(${offset * settings.translateOffset * settings.gapReduction}px)`,
                  opacity,
                }}
              >
                <img
                  src={images[i]}
                  alt={`part-${i + 1}`}
                  className="stack-image"
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}