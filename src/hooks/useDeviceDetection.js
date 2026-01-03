import { useState, useEffect } from 'react';

/**
 * Custom hook for detecting mobile devices and WebGL support
 * Returns device capabilities for adaptive rendering
 */
export const useDeviceDetection = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    isMobile: false,
    isTablet: false,
    hasWebGL: true,
    isLowPowerDevice: false,
    pixelRatio: 1,
  });

  useEffect(() => {
    const checkDevice = () => {
      // Check screen size
      const width = window.innerWidth;
      const isMobile = width <= 768;
      const isTablet = width > 768 && width <= 1024;
      
      // Check for touch capability (more reliable mobile detection)
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      // Check for mobile user agent
      const mobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      
      // Check WebGL support
      let hasWebGL = false;
      try {
        const canvas = document.createElement('canvas');
        hasWebGL = !!(
          window.WebGLRenderingContext &&
          (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
        );
      } catch (e) {
        hasWebGL = false;
      }

      // Check for low power device (limited GPU)
      const isLowPowerDevice = 
        mobileUA || 
        (hasTouch && isMobile) || 
        navigator.hardwareConcurrency <= 4 ||
        !hasWebGL;

      // Get device pixel ratio (capped for performance)
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      setDeviceInfo({
        isMobile: isMobile || mobileUA,
        isTablet,
        hasWebGL,
        isLowPowerDevice,
        pixelRatio,
      });
    };

    // Initial check
    checkDevice();

    // Add resize listener
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return deviceInfo;
};

/**
 * Simplified mobile check hook
 */
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = 
        window.innerWidth <= 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        ('ontouchstart' in window && window.innerWidth <= 1024);
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

export default useDeviceDetection;
