import { product } from '../config/product.js';
import './FooterSection.css';

export default function FooterSection() {
  const { footer } = product;
  return (
    <footer className="footer" id="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {footer.year} {footer.companyName}. Todos los derechos reservados.
        </p>
        <div className="footer__links">
          <a href={footer.privacyPolicyUrl} className="footer__link">
            Política de Privacidad
          </a>
          <span className="footer__sep">·</span>
          <a href={footer.termsUrl} className="footer__link">
            Términos y Condiciones
          </a>
          <span className="footer__sep">·</span>
          <a href={`mailto:${footer.contactEmail}`} className="footer__link">
            {footer.contactEmail}
          </a>
        </div>
        <p className="footer__disclaimer">
          Este sitio no es parte de Facebook™ ni de Facebook Inc. Además, este sitio no está
          respaldado por Facebook de ninguna manera. Facebook™ es una marca registrada de
          Facebook Inc.
        </p>
      </div>
    </footer>
  );
}
