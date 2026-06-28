import { useState } from 'react';
import { SfAccordionItem } from '@storefront-ui/react';
import { product } from '../config/product.js';

export default function ContentSection() {
  const { content } = product;
  // Estado para manejar el acordeón abierto (opcional, SFUI maneja open/onToggle, lo haremos simple)
  const [openItems, setOpenItems] = useState([0]); // Primer ítem abierto por defecto

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="bg-gray-50 py-20 px-4" id="content">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 mb-4 rounded-full bg-brand-pink/10 text-brand-purple font-bold tracking-widest uppercase text-sm border border-brand-pink/20">
            {content.sectionLabel}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
            {content.headline}
          </h2>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {content.stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100 min-w-[150px]">
                <span className="text-4xl font-black text-brand-pink mb-2">{stat.number}</span>
                <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-4 md:p-8 shadow-lg border border-gray-100">
          {content.modules.map((mod, i) => (
            <SfAccordionItem
              key={i}
              open={openItems.includes(i)}
              onToggle={() => toggleItem(i)}
              summary={
                <div className="flex items-center gap-4 text-left">
                  <span className="text-brand-purple font-black text-xl w-8">{mod.number}</span>
                  <span className="font-semibold text-gray-800 flex-1 hover:text-brand-pink transition-colors">{mod.name}</span>
                </div>
              }
              className={`border-b border-gray-100 last:border-b-0 py-4 ${openItems.includes(i) ? 'bg-gray-50/50 rounded-xl px-4' : 'px-4'}`}
            >
              <div className="text-gray-600 mt-2 pl-12 pb-4">
                <p>{mod.description}</p>
              </div>
            </SfAccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
}
