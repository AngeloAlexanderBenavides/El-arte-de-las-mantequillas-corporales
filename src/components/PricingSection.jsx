import BuyButton from './shared/BuyButton.jsx';
import CountdownTimer from './shared/CountdownTimer.jsx';
import { product } from '../config/product.js';

export default function PricingSection() {
  const { pricing, urgency } = product;
  
  return (
    <section className="bg-gray-50 py-16 md:py-24 px-4 relative overflow-hidden w-full" id="pricing">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-lightpink rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2 hidden md:block"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-lightpurple rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2 hidden md:block"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="bg-white rounded-3xl md:rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 w-full max-w-full">
          
          {/* Cabecera del pricing */}
          <div className="bg-brand-purple p-6 md:p-8 text-center text-white relative break-words">
            <h2 className="text-xl md:text-3xl lg:text-5xl font-black mb-2 md:mb-4 drop-shadow-md leading-tight">
              {urgency.bonusWarning}
            </h2>
            <p className="text-base md:text-xl opacity-90 font-medium">
              {pricing.productName}
            </p>
          </div>
          
          <div className="p-6 md:p-12 text-center w-full">
            {/* Urgencia / Cuenta regresiva */}
            <div className="mb-8 md:mb-10 bg-red-50 text-brand-red p-4 md:p-6 rounded-2xl md:rounded-3xl border border-red-100 inline-block w-full max-w-lg mx-auto">
              <p className="font-bold uppercase tracking-wider mb-2 md:mb-3 text-xs md:text-sm">{urgency.headline}</p>
              <CountdownTimer hours={urgency.countdownHours} />
              
              <div className="mt-4 md:mt-6 w-full">
                <div className="flex justify-between text-xs md:text-sm font-bold mb-2 px-1 md:px-2">
                  <span>Vendidos: {Math.round(((urgency.spotsTotal - urgency.spotsLeft) / urgency.spotsTotal) * 100)}%</span>
                  <span>Disponibles: {urgency.spotsLeft}</span>
                </div>
                <div className="h-3 md:h-4 bg-red-200 rounded-full overflow-hidden w-full">
                  <div 
                    className="h-full bg-brand-red transition-all duration-1000"
                    style={{ width: `${((urgency.spotsTotal - urgency.spotsLeft) / urgency.spotsTotal) * 100}%` }}
                  ></div>
                </div>
                <p className="text-[10px] md:text-xs mt-2 md:mt-3 font-medium opacity-80 uppercase">
                  Solo quedan {urgency.spotsLeft} cupos
                </p>
              </div>
            </div>

            {/* Precios */}
            <div className="mb-8 md:mb-10 flex flex-col items-center gap-2">
              <span className="text-gray-400 font-medium uppercase tracking-widest text-xs md:text-sm line-through">
                {pricing.originalPrice}
              </span>
              <div className="flex items-center gap-4">
                <span className="text-5xl md:text-7xl lg:text-8xl font-black text-brand-red drop-shadow-sm">
                  {pricing.currentPrice}
                </span>
              </div>
              <span className="text-brand-purple font-bold text-sm md:text-lg bg-brand-purple/10 px-4 md:px-6 py-1.5 md:py-2 rounded-full mt-2 text-center break-words">
                {pricing.comparison}
              </span>
            </div>

            {/* CTA */}
            <div className="mb-4 md:mb-6 w-full px-2">
              <BuyButton size="xl" label={pricing.ctaButton} variant="secondary" />
            </div>

            <p className="text-gray-500 font-medium text-xs md:text-sm mb-6 max-w-xs md:max-w-sm mx-auto leading-relaxed break-words">
              {pricing.ctaSubtext}
            </p>

            <div className="flex flex-col items-center gap-3 bg-gray-50 p-4 md:p-6 rounded-2xl border border-gray-200 shadow-inner max-w-sm mx-auto w-full">
              <span className="text-gray-700 font-bold tracking-wide text-xs md:text-sm uppercase">{pricing.paymentNote}</span>
              {pricing.paymentMethodsImage && (
                <img 
                  src={pricing.paymentMethodsImage} 
                  alt="Métodos de pago aceptados" 
                  className="w-full max-w-[200px] md:max-w-[250px] h-auto opacity-80 mix-blend-multiply"
                  loading="lazy"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
