import { product } from '../config/product.js';

export default function AuthorSection() {
  // If there's author info in the product object, we can use it, otherwise generic placeholder
  const author = product.author || {
    name: "Nuestro Equipo",
    bio: "Somos apasionados de la cosmética natural, dedicados a enseñar a miles de emprendedoras en todo el mundo a crear sus propios negocios rentables desde casa con ingredientes naturales.",
  };

  return (
    <section className="bg-brand-purple py-16 md:py-24 px-4 text-white relative overflow-hidden w-full" id="author">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-white/20 p-2 shadow-2xl flex-shrink-0">
            <div className="w-full h-full rounded-full bg-brand-lightpink flex items-center justify-center overflow-hidden text-brand-purple">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 md:w-24 md:h-24">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div className="text-center md:text-left flex-1 w-full">
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-white/20 backdrop-blur-md font-bold tracking-widest uppercase text-xs md:text-sm border border-white/30 break-words">
              ¿Quién te enseñará?
            </span>
            <h2 className="text-3xl md:text-4xl font-black mb-4 drop-shadow-md break-words">
              {author.name}
            </h2>
            <p className="text-base md:text-lg font-medium leading-relaxed text-white/90 break-words">
              {author.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
