import React, { Suspense, useEffect, useState, memo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = memo(({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={isMobile ? 512 : 1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -2.5, -1.5] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
});

Computers.displayName = 'Computers';

// Mobile fallback component - shows a static gradient when 3D isn't suitable
const MobileFallback = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-64 h-64 sm:w-80 sm:h-80">
        {/* Animated gradient orb */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-violet-600 to-indigo-700 opacity-80 animate-pulse" />
        <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-purple-400 via-pink-500 to-violet-600 opacity-60 animate-spin" style={{ animationDuration: '8s' }} />
        <div className="absolute inset-8 rounded-full bg-primary opacity-90" />
        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl">💻</span>
        </div>
      </div>
    </div>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [shouldRender3D, setShouldRender3D] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Check for mobile and low-power devices
    const checkDevice = () => {
      const width = window.innerWidth;
      const isMobileDevice = width <= 768;
      const isTouchDevice = 'ontouchstart' in window;
      const isLowPower = navigator.hardwareConcurrency <= 4;
      const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      setIsMobile(isMobileDevice || isMobileUA);
      
      // Don't render 3D on very small screens or low-power mobile devices
      const shouldSkip3D = (isMobileDevice && isTouchDevice) || (isMobileUA && isLowPower) || width < 500;
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

  // Error boundary fallback
  if (hasError || !shouldRender3D) {
    return <MobileFallback />;
  }

  return (
    <Canvas
      frameloop='demand'
      shadows={!isMobile}
      dpr={isMobile ? [1, 1.5] : [1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ 
        preserveDrawingBuffer: true,
        powerPreference: isMobile ? "low-power" : "high-performance",
        antialias: !isMobile,
        alpha: true,
        failIfMajorPerformanceCaveat: true,
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
      onError={() => setHasError(true)}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping={true}
          dampingFactor={0.05}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
