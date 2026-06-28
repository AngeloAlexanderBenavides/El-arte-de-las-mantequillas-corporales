import BuyButton from './shared/BuyButton.jsx';
import CountdownTimer from './shared/CountdownTimer.jsx';
import { product } from '../config/product.js';

export default function PricingSection() {
  const { pricing, urgency } = product;
  
  return (
    <section className="bg-gray-50 py-20 px-4 relative overflow-hidden" id="pricing">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-lightpink rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-lightpurple rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100">
          
          {/* Cabecera del pricing */}
          <div className="bg-brand-purple p-8 text-center text-white relative">
            <h2 className="text-3xl md:text-5xl font-black mb-2 drop-shadow-md">
              {urgency.bonusWarning}
            </h2>
            <p className="text-xl opacity-90 font-medium">
              {pricing.productName}
            </p>
          </div>
          
          <div className="p-8 md:p-12 text-center">
            {/* Urgencia / Cuenta regresiva */}
            <div className="mb-10 bg-red-50 text-brand-red p-6 rounded-3xl border border-red-100 inline-block w-full max-w-lg">
              <p className="font-bold uppercase tracking-wider mb-3 text-sm">{urgency.headline}</p>
              <CountdownTimer hours={urgency.countdownHours} />
              
              <div className="mt-6">
                <div className="flex justify-between text-sm font-bold mb-2 px-2">
                  <span>Cupos Vendidos: {Math.round(((urgency.spotsTotal - urgency.spotsLeft) / urgency.spotsTotal) * 100)}%</span>
                  <span>Disponibles: {urgency.spotsLeft}</span>
                </div>
                <div className="h-4 bg-red-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-brand-red transition-all duration-1000"
                    style={{ width: `${((urgency.spotsTotal - urgency.spotsLeft) / urgency.spotsTotal) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs mt-3 font-medium opacity-80 uppercase">
                  Solo quedan {urgency.spotsLeft} cupos disponibles
                </p>
              </div>
            </div>

            {/* Precios */}
            <div className="mb-10 flex flex-col items-center gap-2">
              <span className="text-gray-400 font-medium uppercase tracking-widest text-sm line-through">
                {pricing.originalPrice}
              </span>
              <div className="flex items-center gap-4">
                <span className="text-6xl md:text-8xl font-black text-brand-red drop-shadow-sm">
                  {pricing.currentPrice}
                </span>
              </div>
              <span className="text-brand-purple font-bold text-lg bg-brand-purple/10 px-6 py-2 rounded-full mt-2">
                {pricing.comparison}
              </span>
            </div>

            {/* CTA */}
            <div className="mb-6">
              <BuyButton size="xl" label={pricing.ctaButton} variant="secondary" />
            </div>

            <p className="text-gray-500 font-medium text-sm mb-6 max-w-sm mx-auto leading-relaxed">
              {pricing.ctaSubtext}
            </p>

            <div className="bg-gray-50 inline-block px-6 py-3 rounded-2xl border border-gray-200 shadow-inner">
              <span className="text-gray-700 font-bold tracking-wide">{pricing.paymentNote}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
