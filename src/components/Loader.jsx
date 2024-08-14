import { Html, useProgress } from "@react-three/drei";
import { useState, useEffect } from "react";

const CanvasLoader = () => {
  const { progress } = useProgress();
  const [displayProgress, setDisplayProgress] = useState(progress);

  useEffect(() => {
    if (progress !== 80 && progress !== 90) {
      setDisplayProgress(progress);
    }
  }, [progress]);

  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {displayProgress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
