import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PageLoader from "./components/PageLoader";

// Lazy load heavy components for better initial load
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Contact = lazy(() => import("./components/Contact"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

// Section loading fallback
const SectionLoader = () => (
  <div className="w-full h-64 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load and check when fonts are ready
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // Also wait for document to be fully ready
    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', () => setIsLoading(false));
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', () => setIsLoading(false));
    };
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Tech />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Works />
        </Suspense>
        
        <div className='relative z-0'>
          <Suspense fallback={<SectionLoader />}>
            <Contact />
          </Suspense>
          <Suspense fallback={null}>
            <StarsCanvas />
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
