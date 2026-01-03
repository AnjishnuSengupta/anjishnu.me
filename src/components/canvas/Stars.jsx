import { useState, useRef, Suspense, useEffect, memo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = memo((props) => {
  const ref = useRef();
  const { isMobile = false } = props;
  
  // Reduce star count on mobile for better performance
  const starCount = isMobile ? 2000 : 5000;
  const [sphere] = useState(() => 
    random.inSphere(new Float32Array(starCount * 3), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / (isMobile ? 15 : 10);
      ref.current.rotation.y -= delta / (isMobile ? 20 : 15);
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={isMobile ? 0.003 : 0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
});

Stars.displayName = 'Stars';

// CSS-based star fallback for very low-end devices
const CSSStars = memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden z-[-1]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
            opacity: 0.3 + Math.random() * 0.5,
          }}
        />
      ))}
    </div>
  );
});

CSSStars.displayName = 'CSSStars';

const StarsCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [shouldRender3D, setShouldRender3D] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const isMobileDevice = width <= 768;
      const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      setIsMobile(isMobileDevice || isMobileUA);
      
      // Use CSS stars on very small/low-power devices
      const isVerySmall = width < 400;
      const isLowPower = navigator.hardwareConcurrency <= 2;
      setShouldRender3D(!(isVerySmall && isLowPower));
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
    return <CSSStars />;
  }

  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        dpr={isMobile ? 1 : [1, 1.5]}
        gl={{
          powerPreference: isMobile ? "low-power" : "default",
          antialias: false,
          alpha: true,
        }}
      >
        <Suspense fallback={null}>
          <Stars isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
