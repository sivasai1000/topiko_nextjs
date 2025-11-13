// src/components/LottieWithImages.jsx
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "../public/assets/json/comp2.json";

const LottieWithImages = ({
  size = 500,
  loop = true,
  autoplay = true,
}) => {
  const containerRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    if (animRef.current) {
      animRef.current.destroy();
      animRef.current = null;
    }

    animRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "canvas", // "canvas" supports matte effects, but we’ll clip with CSS
      loop,
      autoplay,
      animationData,
      assetsPath: "/images/",
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet",
        clearCanvas: true,
      },
    });

    return () => {
      if (animRef.current) {
        animRef.current.destroy();
        animRef.current = null;
      }
    };
  }, [loop, autoplay]);

  return (
    <div
     
    >
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default LottieWithImages;
