import { useCountdown } from '../../hooks/useCountdown.js';
import './CountdownTimer.css';

export default function CountdownTimer({ hours }) {
  const { hours: h, minutes: m, seconds: s, expired } = useCountdown(hours);
  const pad = (n) => String(n).padStart(2, '0');

  if (expired) {
    return <div className="countdown-expired">⏰ ¡La oferta ha expirado!</div>;
  }

  return (
    <div className="countdown">
      <div className="countdown__block">
        <span className="countdown__number">{pad(h)}</span>
        <span className="countdown__label">Horas</span>
      </div>
      <span className="countdown__sep">:</span>
      <div className="countdown__block">
        <span className="countdown__number">{pad(m)}</span>
        <span className="countdown__label">Minutos</span>
      </div>
      <span className="countdown__sep">:</span>
      <div className="countdown__block">
        <span className="countdown__number">{pad(s)}</span>
        <span className="countdown__label">Segundos</span>
      </div>
    </div>
  );
}
