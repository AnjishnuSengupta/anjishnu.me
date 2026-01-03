import React, { Suspense, useState, useEffect, memo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = memo(() => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
});

Earth.displayName = 'Earth';

// Mobile fallback - animated globe emoji with gradient
const MobileEarth = memo(() => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 blur-xl opacity-50 animate-pulse" 
          style={{ 
            width: '200px', 
            height: '200px',
            left: '-25px',
            top: '-25px'
          }} 
        />
        {/* Main Earth container */}
        <div 
          className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-blue-600 via-blue-500 to-teal-400 shadow-2xl flex items-center justify-center animate-spin"
          style={{ animationDuration: '20s' }}
        >
          {/* Land masses simulation */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-green-600 via-green-500 to-emerald-400 opacity-60" 
            style={{
              clipPath: 'polygon(20% 10%, 40% 15%, 60% 10%, 80% 20%, 85% 40%, 75% 60%, 50% 70%, 30% 65%, 15% 50%, 10% 30%)'
            }}
          />
          <div className="absolute inset-2 rounded-full bg-gradient-to-bl from-green-700 via-emerald-600 to-green-500 opacity-50"
            style={{
              clipPath: 'polygon(50% 40%, 70% 50%, 80% 70%, 70% 85%, 50% 90%, 35% 80%, 30% 60%)'
            }}
          />
          {/* Clouds overlay */}
          <div className="absolute inset-0 rounded-full bg-white opacity-20 animate-pulse" />
          {/* Shine effect */}
          <div className="absolute top-2 left-4 w-6 h-6 rounded-full bg-white opacity-40 blur-sm" />
        </div>
        {/* Rotating ring */}
        <div 
          className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-56 sm:h-56 -translate-x-1/2 -translate-y-1/2 border-2 border-purple-500/30 rounded-full animate-spin"
          style={{ animationDuration: '10s', animationDirection: 'reverse' }}
        />
      </div>
    </div>
  );
});

MobileEarth.displayName = 'MobileEarth';

const EarthCanvas = () => {
  const [shouldRender3D, setShouldRender3D] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const isMobileDevice = width <= 768;
      const isTouchDevice = 'ontouchstart' in window;
      const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      setIsMobile(isMobileDevice || isMobileUA);
      
      // Skip 3D on mobile/touch devices for performance
      const shouldSkip3D = (isMobileDevice && isTouchDevice) || isMobileUA;
      setShouldRender3D(!shouldSkip3D);
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

  if (!shouldRender3D) {
    return <MobileEarth />;
  }

  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={isMobile ? [1, 1.5] : [1, 2]}
      gl={{ 
        preserveDrawingBuffer: true,
        powerPreference: isMobile ? "low-power" : "default",
        antialias: !isMobile,
        alpha: true,
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={isMobile ? 3 : 5}
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping={true}
          dampingFactor={0.05}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
