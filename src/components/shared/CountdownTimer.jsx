import { useCountdown } from '../../hooks/useCountdown.js';

export default function CountdownTimer({ hours }) {
  const { hours: h, minutes: m, seconds: s, expired } = useCountdown(hours);
  const pad = (n) => String(n).padStart(2, '0');

  if (expired) {
    return <div className="countdown-expired">⏰ ¡La oferta ha expirado!</div>;
  }

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4 my-2">
      {/* Horas */}
      <div className="flex flex-col items-center bg-white/50 backdrop-blur-sm p-2 sm:p-3 rounded-xl border border-red-200/50 min-w-[70px] sm:min-w-[80px] shadow-sm">
        <span className="text-3xl sm:text-4xl font-black text-brand-red leading-none drop-shadow-sm">{pad(h)}</span>
        <span className="text-[10px] sm:text-xs font-bold text-red-800/70 uppercase tracking-wider mt-1">Horas</span>
      </div>
      
      <span className="text-2xl sm:text-4xl font-black text-red-300 animate-pulse pb-4">:</span>
      
      {/* Minutos */}
      <div className="flex flex-col items-center bg-white/50 backdrop-blur-sm p-2 sm:p-3 rounded-xl border border-red-200/50 min-w-[70px] sm:min-w-[80px] shadow-sm">
        <span className="text-3xl sm:text-4xl font-black text-brand-red leading-none drop-shadow-sm">{pad(m)}</span>
        <span className="text-[10px] sm:text-xs font-bold text-red-800/70 uppercase tracking-wider mt-1">Minutos</span>
      </div>
      
      <span className="text-2xl sm:text-4xl font-black text-red-300 animate-pulse pb-4">:</span>
      
      {/* Segundos */}
      <div className="flex flex-col items-center bg-white/50 backdrop-blur-sm p-2 sm:p-3 rounded-xl border border-red-200/50 min-w-[70px] sm:min-w-[80px] shadow-sm">
        <span className="text-3xl sm:text-4xl font-black text-brand-red leading-none drop-shadow-sm">{pad(s)}</span>
        <span className="text-[10px] sm:text-xs font-bold text-red-800/70 uppercase tracking-wider mt-1">Segundos</span>
      </div>
    </div>
  );
}
