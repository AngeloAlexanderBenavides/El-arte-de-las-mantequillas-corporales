import { product } from '../config/product.js';

export default function BonusSection() {
  const { bonuses } = product;
  return (
    <section className="bg-brand-pink py-20 px-4 text-white" id="bonuses">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 mb-6 rounded-full bg-white/20 backdrop-blur-md font-bold tracking-widest uppercase text-sm border border-white/30 shadow-lg">
            {bonuses.sectionLabel}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-md">
            {bonuses.headline}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {bonuses.bonusList.map((bonus, i) => (
            <div 
              key={i} 
              className={`flex flex-col sm:flex-row items-center sm:items-start gap-6 p-8 rounded-3xl transition-transform hover:-translate-y-1 ${
                bonus.highlight 
                  ? 'bg-gradient-to-br from-brand-purple to-brand-lightpurple border-2 border-white/50 shadow-2xl' 
                  : 'bg-white text-gray-800 shadow-xl'
              }`}
            >
              <div className="text-6xl drop-shadow-sm">{bonus.icon}</div>
              <div className="text-center sm:text-left flex-1">
                <h3 className={`text-2xl font-black mb-2 ${bonus.highlight ? 'text-white' : 'text-brand-purple'}`}>
                  {bonus.name}
                </h3>
                <p className={`font-medium leading-relaxed mb-4 ${bonus.highlight ? 'text-white/90' : 'text-gray-600'}`}>
                  {bonus.description}
                </p>
                <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold ${bonus.highlight ? 'bg-white/20 text-white' : 'bg-brand-pink/10 text-brand-pink'}`}>
                  Valorado en: <span className="line-through opacity-70 ml-1">{bonus.value}</span> <span className="ml-1 uppercase">¡Hoy Gratis!</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
