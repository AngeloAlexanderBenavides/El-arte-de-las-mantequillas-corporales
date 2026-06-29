import { useState, useEffect, useCallback } from 'react';

export function useExitIntent() {
  const [hasTriggered, setHasTriggered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  
  const triggerPopup = useCallback(() => {
    if (!hasTriggered) {
      setHasTriggered(true);
      setShowPopup(true);
    }
  }, [hasTriggered]);

  const closePopup = useCallback(() => {
    setShowPopup(false);
  }, []);

  useEffect(() => {
    // 1. Desktop: Mouse leaves top of the window
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 || e.clientX <= 0 || (e.clientX >= window.innerWidth || e.clientY >= window.innerHeight)) {
        triggerPopup();
      }
    };

    // 2. Mobile: Fast scroll upward
    let lastScrollY = window.scrollY;
    let lastScrollTime = Date.now();
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      
      const distance = lastScrollY - currentScrollY;
      const timeDiff = currentTime - lastScrollTime;
      
      // If scrolled upward rapidly (velocity > threshold)
      if (distance > 50 && timeDiff < 100) {
        triggerPopup();
      }
      
      lastScrollY = currentScrollY;
      lastScrollTime = currentTime;
    };

    // 3. Fallback: Idle timer (60 seconds)
    const idleTimer = setTimeout(() => {
      triggerPopup();
    }, 60000);

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(idleTimer);
    };
  }, [triggerPopup]);

  return { showPopup, closePopup };
}
