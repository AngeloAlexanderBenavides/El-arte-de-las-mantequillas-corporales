import { product } from '../config/product.js';

export default function TransformationSection() {
  const { transformation } = product;

  return (
    <section className="bg-brand-purple py-16 md:py-24 px-4 text-white relative overflow-hidden w-full" id="transformation">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl hidden md:block"></div>
        <div className="absolute bottom-10 -left-10 w-72 h-72 bg-brand-lightpink rounded-full mix-blend-overlay filter blur-3xl hidden md:block"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 w-full">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-white/20 backdrop-blur-md font-bold tracking-widest uppercase text-xs md:text-sm shadow-sm break-words">
            {transformation.sectionLabel}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight drop-shadow-md break-words">
            {transformation.headline}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          {/* Images side */}
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            {transformation.image1 && (
              <div className="flex-1 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10 transform hover:scale-105 transition-transform duration-300 w-full">
                <img src={transformation.image1} alt="Transformación 1" className="w-full h-full object-cover aspect-square" loading="lazy" />
              </div>
            )}
            {transformation.image2 && (
              <div className="flex-1 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10 transform hover:scale-105 transition-transform duration-300 sm:translate-y-8 w-full">
                <img src={transformation.image2} alt="Transformación 2" className="w-full h-full object-cover aspect-square" loading="lazy" />
              </div>
            )}
          </div>

          {/* List side */}
          <div className="w-full">
            <ul className="flex flex-col gap-4 md:gap-6 w-full">
              {transformation.afterPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-4 p-4 md:p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors w-full break-words">
                  <span 
                    className="text-base md:text-lg font-medium leading-relaxed drop-shadow-sm text-white/90"
                    dangerouslySetInnerHTML={{ __html: point }}
                  />
                </li>
              ))}
            </ul>

            <div className="mt-8 md:mt-10 p-5 md:p-6 rounded-2xl bg-gradient-to-r from-brand-pink to-brand-lightpink text-white shadow-lg border border-white/20 break-words w-full">
              <p className="font-bold text-lg md:text-xl italic drop-shadow-sm text-center md:text-left">
                "{transformation.closingQuote}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
