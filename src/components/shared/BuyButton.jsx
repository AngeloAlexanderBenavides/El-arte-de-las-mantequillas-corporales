import { SfButton } from '@storefront-ui/react';
import { product } from '../../config/product.js';

export default function BuyButton({ label, size = 'lg', id = 'btn-buy', variant = 'primary' }) {
  const text = label || product.pricing.ctaButton;
  
  // Clases base para el botón de compra
  // Si es variant "primary" usa el verde, si es "secondary" usa el rojo.
  const bgClass = variant === 'secondary' ? 'bg-brand-red hover:bg-red-700' : 'bg-brand-green hover:bg-green-600';

  return (
    <SfButton
      as="a"
      id={id}
      href={product.checkoutUrl}
      target="_blank"
      rel="noopener noreferrer"
      size={size}
      className={`font-bold text-white shadow-md transition-all active:scale-95 ${bgClass} w-full max-w-lg mx-auto text-center py-4 text-xl rounded-full animate-cta-pulse`}
    >
      {text}
    </SfButton>
  );
}
