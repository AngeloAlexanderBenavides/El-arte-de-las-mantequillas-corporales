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

      <div className="container relative z-10 flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto w-full">
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 w-full">
          <div className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold text-xs md:text-sm tracking-wide px-4 py-2 md:px-6 rounded-full animate-fade-in-up shadow-sm">
            {hero.badge}
          </div>

          <h1 
            className="font-extrabold text-3xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight drop-shadow-md animate-fade-in-up animation-delay-100 break-words w-full"
            dangerouslySetInnerHTML={{ __html: hero.headline }}
          />

          <p 
            className="text-base md:text-xl text-white/90 max-w-2xl font-medium leading-relaxed drop-shadow-sm animate-fade-in-up animation-delay-200 break-words w-full"
            dangerouslySetInnerHTML={{ __html: hero.subheadline }}
          />

          <div className="flex flex-col items-center lg:items-start gap-4 w-full animate-fade-in-up animation-delay-300 mt-4">
            <BuyButton id="btn-hero" size="lg" label={hero.ctaButton} variant="primary" />
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-4 mt-2">
              {hero.trustBadges.map((badge, i) => (
                <span key={i} className="text-xs md:text-sm font-semibold text-white/90 bg-black/20 backdrop-blur-sm border border-black/10 px-3 py-1.5 rounded-full">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Image Content (if any) */}
        {hero.mainImage && (
          <div className="flex-1 w-full max-w-md lg:max-w-lg animate-fade-in-up animation-delay-400">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 transform hover:scale-105 transition-transform duration-300">
              <img 
                src={hero.mainImage} 
                alt="Curso de Mantequillas Corporales" 
                className="w-full h-auto object-cover aspect-[4/5] sm:aspect-square"
                loading="eager"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
