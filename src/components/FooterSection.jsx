import { product } from '../config/product.js';

export default function FooterSection() {
  const { footer } = product;

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 w-full" id="footer">
      <div className="container mx-auto max-w-4xl text-center flex flex-col items-center gap-6 w-full">
        <p className="font-bold text-white text-lg md:text-xl break-words w-full">
          {footer.companyName} &copy; {footer.year}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium w-full">
          <a href={footer.privacyPolicyUrl} className="hover:text-white transition-colors">Política de Privacidad</a>
          <span className="hidden sm:inline opacity-50">|</span>
          <a href={footer.termsUrl} className="hover:text-white transition-colors">Términos y Condiciones</a>
          <span className="hidden sm:inline opacity-50">|</span>
          <a href={`mailto:${footer.contactEmail}`} className="hover:text-white transition-colors">{footer.contactEmail}</a>
        </div>

        <p className="text-xs max-w-3xl leading-relaxed opacity-70 mt-6 break-words w-full">
          {footer.disclaimer}
        </p>
      </div>
    </footer>
  );
}
