import { product } from '../config/product.js';
import { SfIconCheck } from '@storefront-ui/react';

export default function PainSection() {
  const { pain } = product;
  return (
    <section className="bg-white py-20 px-4 relative overflow-hidden" id="pain">
      <div className="container mx-auto max-w-6xl flex flex-col-reverse lg:flex-row items-center gap-12 w-full">
        {/* Left Side: Content */}
        <div className="flex-1 w-full max-w-2xl mx-auto lg:mx-0">
          <div className="text-center lg:text-left mb-10">
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-brand-purple/10 text-brand-purple font-bold tracking-widest uppercase text-xs md:text-sm border border-brand-purple/20 break-words">
              {pain.sectionLabel}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight break-words">
              {pain.headline}
            </h2>
            <p 
              className="text-base md:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 break-words leading-relaxed"
              dangerouslySetInnerHTML={{ __html: pain.subheadline }}
            />
          </div>

          <ul className="flex flex-col gap-4 mb-10">
            {pain.painPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-4 bg-gray-50 p-5 md:p-6 rounded-2xl border border-gray-100 hover:border-brand-purple/30 hover:shadow-md transition-all group overflow-hidden">
                <span className="mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0 text-brand-pink">
                  <SfIconCheck size="sm" />
                </span>
                <span 
                  className="text-sm md:text-base text-gray-700 font-medium leading-relaxed break-words"
                  dangerouslySetInnerHTML={{ __html: point.text }}
                />
              </li>
            ))}
          </ul>

          <div className="bg-brand-pink/10 border-l-4 border-brand-pink p-5 md:p-6 rounded-r-2xl break-words">
            <p className="text-lg md:text-xl font-bold text-brand-purple leading-tight">
              {pain.closingLine}
            </p>
          </div>
        </div>

        {/* Right Side: Image */}
        {pain.image && (
          <div className="flex-1 w-full max-w-md lg:max-w-lg mx-auto">
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300">
              <img 
                src={pain.image} 
                alt="Beneficios del curso" 
                className="w-full h-auto object-cover aspect-square sm:aspect-[4/3] lg:aspect-auto"
                loading="lazy"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
