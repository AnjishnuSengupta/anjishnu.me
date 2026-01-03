import React, { Suspense, useState, useEffect, memo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = memo((props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
});

Ball.displayName = 'Ball';

// Static fallback for mobile - shows the icon with a gradient background
const StaticBall = memo(({ icon }) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#915EFF] via-[#804dee] to-[#4a2c7a] p-1 shadow-lg hover:scale-110 transition-transform duration-300">
        <div className="w-full h-full rounded-full bg-tertiary flex items-center justify-center p-3">
          <img 
            src={icon} 
            alt="technology" 
            className="w-full h-full object-contain filter drop-shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
});

StaticBall.displayName = 'StaticBall';

const BallCanvas = ({ icon }) => {
  const [shouldRender3D, setShouldRender3D] = useState(true);

  useEffect(() => {
    // Check if we should render 3D
    const checkDevice = () => {
      const width = window.innerWidth;
      const isMobile = width <= 768;
      const isTouchDevice = 'ontouchstart' in window;
      const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      // Skip 3D on mobile/touch devices for performance
      setShouldRender3D(!(isMobile || (isTouchDevice && isMobileUA)));
    };

    // Check WebGL support
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (!gl) {
          setShouldRender3D(false);
        }
      } catch (e) {
        setShouldRender3D(false);
      }
    };

    checkDevice();
    checkWebGL();

    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Use static fallback on mobile
  if (!shouldRender3D) {
    return <StaticBall icon={icon} />;
  }

  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 1.5]}
      gl={{ 
        preserveDrawingBuffer: true,
        powerPreference: "low-power",
        antialias: false,
        alpha: true,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          enableDamping={true}
          dampingFactor={0.05}
        />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
