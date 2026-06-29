import { product } from '../config/product.js';
import { SfIconStar } from '@storefront-ui/react';

export default function BonusSection() {
  const { bonuses } = product;
  return (
    <section className="bg-brand-pink py-16 md:py-24 px-4 text-white overflow-hidden w-full" id="bonuses">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-white/20 backdrop-blur-md font-bold tracking-widest uppercase text-xs md:text-sm border border-white/30 shadow-lg break-words">
            {bonuses.sectionLabel}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight drop-shadow-md break-words">
            {bonuses.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {bonuses.bonusList.map((bonus, i) => (
            <div 
              key={i} 
              className={`flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 p-6 md:p-8 rounded-3xl transition-transform hover:-translate-y-1 w-full overflow-hidden ${
                bonus.highlight 
                  ? 'bg-gradient-to-br from-brand-purple to-brand-lightpurple border-2 border-white/50 shadow-2xl' 
                  : 'bg-white text-gray-800 shadow-xl'
              }`}
            >
              {bonus.image ? (
                <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-2xl overflow-hidden border-2 border-gray-100 shadow-sm">
                  <img src={bonus.image} alt={bonus.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ) : (
                <div className="flex-shrink-0 text-brand-pink">
                  <SfIconStar size="xl" />
                </div>
              )}
              
              <div className="text-center sm:text-left flex-1 min-w-0 w-full">
                <h3 className={`text-xl md:text-2xl font-black mb-2 break-words ${bonus.highlight ? 'text-white' : 'text-brand-purple'}`}>
                  {bonus.name}
                </h3>
                <p className={`text-sm md:text-base font-medium leading-relaxed mb-4 break-words ${bonus.highlight ? 'text-white/90' : 'text-gray-600'}`}>
                  {bonus.description}
                </p>
                <div className={`inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold break-words w-full sm:w-auto ${bonus.highlight ? 'bg-white/20 text-white' : 'bg-brand-pink/10 text-brand-pink'}`}>
                  Valorado en: <span className="line-through opacity-70 mx-1">{bonus.value}</span> <span className="uppercase">¡Hoy Gratis!</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
