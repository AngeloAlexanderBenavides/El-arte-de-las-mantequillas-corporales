import './styles/global.css';
import HeroSection from './components/HeroSection.jsx';
import PainSection from './components/PainSection.jsx';
import TransformationSection from './components/TransformationSection.jsx';
import ContentSection from './components/ContentSection.jsx';
import BonusSection from './components/BonusSection.jsx';
import PricingSection from './components/PricingSection.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import GuaranteeSection from './components/GuaranteeSection.jsx';
import AuthorSection from './components/AuthorSection.jsx';
import FooterSection from './components/FooterSection.jsx';
import ExitPopup from './components/shared/ExitPopup.jsx';
import { useExitIntent } from './hooks/useExitIntent.js';

/**
 * Landing Page de Infoproductos
 * Estructura validada de 10 secciones para vender a tráfico frío.
 *
 * Para personalizar: edita src/config/product.js
 * Para hacer deploy: conecta este repo a Vercel.
 */
export default function App() {
  const { showPopup, closePopup } = useExitIntent();

  return (
    <main>
      {/* 1. La Promesa Clara — Hook principal */}
      <HeroSection />

      {/* 2. Dolores y Consecuencias */}
      <PainSection />

      {/* 3. Logros y Transformación — El "Después" */}
      <TransformationSection />

      {/* 4. Cómo lo van a lograr — Contenido del producto */}
      <ContentSection />

      {/* 5. Bonos — Aumento de valor percibido */}
      <BonusSection />

      {/* 7. Precio y Descuento */}
      <PricingSection />

      {/* 8. Prueba Social — Testimonios estratégicos */}
      <TestimonialsSection />

      {/* 9. Garantía Incondicional */}
      <GuaranteeSection />

      {/* 10. Información del Productor — Autoridad */}
      <AuthorSection />

      {/* Footer */}
      <FooterSection />

      {/* Popup de Exit Intent */}
      <ExitPopup isOpen={showPopup} onClose={closePopup} />
    </main>
  );
}

