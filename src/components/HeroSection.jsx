import BuyButton from './shared/BuyButton.jsx';
import { product } from '../config/product.js';

export default function HeroSection() {
  const { hero } = product;
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-pink px-4 py-24" id="hero">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-purple/40 to-transparent"></div>
        {/* Decorative blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-lightpink rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-brand-lightpurple rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
        {/* Badge de urgencia */}
        <div className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold text-sm tracking-wide px-6 py-2 rounded-full animate-fade-in-up">
          {hero.badge}
        </div>

        {/* Headline principal */}
        <h1 className="font-extrabold text-4xl md:text-6xl text-white leading-tight tracking-tight drop-shadow-md animate-fade-in-up animation-delay-100">
          {hero.headline}
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-2xl text-white/90 max-w-2xl font-medium leading-relaxed drop-shadow-sm animate-fade-in-up animation-delay-200">
          {hero.subheadline}
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center gap-6 w-full animate-fade-in-up animation-delay-300">
          <BuyButton id="btn-hero" size="lg" label={hero.ctaButton} variant="primary" />
          
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            {hero.trustBadges.map((badge, i) => (
              <span key={i} className="text-sm font-semibold text-white/90 bg-black/20 backdrop-blur-sm border border-black/10 px-4 py-1.5 rounded-full">
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Flecha hacia abajo */}
        <div className="text-4xl text-white/80 animate-bounce mt-12">
          ↓
        </div>
      </div>
    </section>
  );
}
