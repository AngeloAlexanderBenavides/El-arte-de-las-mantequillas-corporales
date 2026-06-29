import { product } from '../config/product.js';

export default function GuaranteeSection() {
  const { guarantee } = product;
  
  return (
    <section className="bg-gray-50 py-16 md:py-24 px-4 w-full" id="guarantee">
      <div className="container mx-auto max-w-4xl text-center w-full">
        <div className="bg-white rounded-3xl md:rounded-[2.5rem] shadow-xl p-6 md:p-12 border border-gray-100 flex flex-col items-center w-full">
          {/* Sello de Garantía */}
          <div className="w-20 h-20 md:w-24 md:h-24 bg-brand-pink/10 rounded-full flex items-center justify-center mb-6 border-4 border-brand-pink/20 text-brand-pink">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 md:w-12 md:h-12">
              <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
            </svg>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 drop-shadow-sm break-words w-full">
            {guarantee.headline}
          </h2>
          
          <p 
            className="text-base md:text-xl text-gray-600 mb-8 max-w-2xl font-medium leading-relaxed break-words w-full"
            dangerouslySetInnerHTML={{ __html: guarantee.copy }}
          />
          
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-xs md:text-sm border border-green-200 shadow-sm break-words w-full sm:w-auto justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
            </svg>
            {guarantee.subtext}
          </div>
        </div>
      </div>
    </section>
  );
}
