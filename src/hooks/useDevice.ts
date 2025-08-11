import { useState, useEffect } from 'react';

export function useDevice() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set client flag to true after mount
    setIsClient(true);
    
    const checkDevice = () => {
      const width = window.innerWidth;
      const mobile = width < 768;
      const tablet = width >= 768 && width < 1024;
      
      setIsMobile(mobile);
      setIsTablet(tablet);
      setScreenSize(mobile ? 'mobile' : tablet ? 'tablet' : 'desktop');
    };

    // Check on mount
    checkDevice();

    // Listen for resize
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Get initial device type from CSS media query
  const getInitialDeviceType = () => {
    if (typeof window === 'undefined') return { isMobile: false, isTablet: false };
    
    const mobileQuery = window.matchMedia('(max-width: 767px)');
    const tabletQuery = window.matchMedia('(min-width: 768px) and (max-width: 1023px)');
    
    return {
      isMobile: mobileQuery.matches,
      isTablet: tabletQuery.matches
    };
  };

  return {
    isMobile: isClient ? isMobile : false,
    isTablet: isClient ? isTablet : false,
    isDesktop: isClient ? (!isMobile && !isTablet) : true,
    screenSize: isClient ? screenSize : 'desktop',
    isClient,
    getInitialDeviceType
  };
}
