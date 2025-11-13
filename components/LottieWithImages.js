// src/components/LottieWithImages.jsx
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";


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
  renderer: "canvas",
  loop,
  autoplay,
  path: "/assets/comp2.json",  // <-- Correct for production
  assetsPath: "/assets/images/", // <-- Update this to your real image folder
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
      style={{
        width: size,
        height: size,
        marginRight:"20px",
        
        borderRadius: "50%", // circular clip
        overflow: "hidden",  // crop map to circle
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
       
      }}
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
