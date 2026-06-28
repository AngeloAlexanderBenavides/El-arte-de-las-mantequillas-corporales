import { product } from '../config/product.js';

export default function PainSection() {
  const { pain } = product;
  return (
    <section className="bg-white py-20 px-4 relative overflow-hidden" id="pain">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 mb-4 rounded-full bg-brand-purple/10 text-brand-purple font-bold tracking-widest uppercase text-sm border border-brand-purple/20">
            {pain.sectionLabel}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            {pain.headline}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {pain.subheadline}
          </p>
        </div>

        <ul className="flex flex-col gap-4 mb-12">
          {pain.painPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-brand-purple/30 hover:shadow-md transition-all group">
              <span className="text-2xl mt-0.5 group-hover:scale-110 transition-transform">{point.icon}</span>
              <span className="text-gray-700 font-medium leading-relaxed">{point.text}</span>
            </li>
          ))}
        </ul>

        <div className="bg-brand-pink/10 border-l-4 border-brand-pink p-6 rounded-r-2xl">
          <p className="text-xl font-bold text-brand-purple">
            {pain.closingLine}
          </p>
        </div>
      </div>
    </section>
  );
}
