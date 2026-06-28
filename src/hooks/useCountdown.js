import { useState, useEffect } from 'react';

/**
 * Hook de cuenta regresiva.
 * @param {number} hours - Horas desde que se cargó la página.
 */
export function useCountdown(hours) {
  const getEndTime = () => {
    const key = 'lp_countdown_end';
    const saved = sessionStorage.getItem(key);
    if (saved) return parseInt(saved, 10);
    const end = Date.now() + hours * 60 * 60 * 1000;
    sessionStorage.setItem(key, end.toString());
    return end;
  };

  const [endTime] = useState(getEndTime);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const calc = () => Math.max(0, endTime - Date.now());
    setTimeLeft(calc());
    const id = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(id);
  }, [endTime]);

  const hours_ = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  const expired = timeLeft === 0;

  return { hours: hours_, minutes, seconds, expired };
}
