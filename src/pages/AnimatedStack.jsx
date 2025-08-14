import { useState, useEffect } from "react";
import "../style/animate.css";

export function AnimatedStack() {
  const [frontIndex, setFrontIndex] = useState(0);
  const rects = [0, 1, 2, 3];

  useEffect(() => {
    const interval = setInterval(() => {
      setFrontIndex((prev) => (prev + 1) % rects.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="stack-container">
      {rects.map((_, i) => {
        const offset = (i - frontIndex + rects.length) % rects.length;
        const isFront = offset === 0;

        // Only width increases as you go further back, height remains the same
        const baseWidth = 300;
        const baseHeight = 180;
        const width = baseWidth + offset * 40;   // Increase this multiplier to exaggerate the effect
        const height = baseHeight;

        // Opacity logic (bottommost is invisible)
        const opacity = offset === rects.length - 1 ? 0 : 1 - offset * 0.25;

        return (
  <div
    key={i}
    className={`rect ${isFront ? "front" : ""}`}
    style={{
      width: `${width}px`,
      height: `${height}px`,
      zIndex: rects.length - offset,
      left: "50%",
      top: "50%",
      position: "absolute",
      // Centered + your offset animation:
      transform: `translate(-50%, -50%) translateX(-${offset * 5}px) translateY(${offset * 5}px)`,
      opacity,
    }}
  ></div>
        );
      })}
    </div>
  );
}
