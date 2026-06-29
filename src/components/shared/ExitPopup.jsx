import { product } from '../../config/product.js';
import BuyButton from './BuyButton.jsx';

export default function ExitPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in-up">
      <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative border-2 border-brand-red">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-800 hover:text-black bg-white rounded-full w-8 h-8 flex items-center justify-center transition-colors shadow-md hover:scale-105 z-50"
          aria-label="Cerrar"
        >
          ✕
        </button>

        {/* Content */}
        <div className="bg-brand-red p-6 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://purpureonline.com/wp-content/uploads/2025/03/Prada-inspired-Body-Butter-1.jpg')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
          <h2 className="text-3xl md:text-4xl font-black relative z-10 drop-shadow-md leading-tight">
            ¡ESPERA! ¿TE VAS SIN TU DESCUENTO?
          </h2>
        </div>

        <div className="p-6 md:p-8 text-center flex flex-col items-center">
          <p className="text-gray-700 text-lg mb-6 font-medium leading-relaxed">
            Te acabas de ganar la oportunidad de inscribirte con el <strong className="text-brand-red text-xl">50% DE DESCUENTO</strong> y llevarte todos los <strong className="text-brand-purple text-xl">BONOS GRATIS</strong>.
          </p>
          
          <div className="bg-red-50 text-brand-red font-black text-4xl md:text-5xl px-8 py-4 rounded-2xl border-2 border-brand-red/30 mb-6 drop-shadow-sm">
            {product.pricing.currentPrice}
          </div>

          <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-4">
            ¡Solo por los próximos 10 minutos!
          </p>

          <BuyButton id="btn-popup" size="lg" label="¡QUIERO MI DESCUENTO AHORA!" variant="secondary" />
          
          <button onClick={onClose} className="mt-4 text-sm text-gray-400 underline hover:text-gray-600">
            No gracias, prefiero pagar el precio completo después
          </button>
        </div>
      </div>
    </div>
  );
}
