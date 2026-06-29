import { product } from '../config/product.js';

export default function TestimonialsSection() {
  const { testimonials } = product;

  return (
    <section className="bg-white py-16 md:py-24 px-4 w-full overflow-hidden" id="testimonials">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-brand-purple/10 text-brand-purple font-bold tracking-widest uppercase text-xs md:text-sm border border-brand-purple/20 break-words">
            {testimonials.sectionLabel}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight break-words">
            {testimonials.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
          {testimonials.images.map((imgUrl, i) => (
            <div key={i} className="rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow w-full transform hover:-translate-y-1 duration-300">
              <img 
                src={imgUrl} 
                alt={`Testimonio ${i + 1}`} 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
