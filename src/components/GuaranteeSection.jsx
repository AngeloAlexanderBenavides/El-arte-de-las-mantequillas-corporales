import { product } from '../config/product.js';
import './GuaranteeSection.css';

export default function GuaranteeSection() {
  const { guarantee } = product;
  return (
    <section className="guarantee" id="garantia">
      <div className="container">
        <div className="guarantee__card">
          <div className="guarantee__badge">
            <span className="guarantee__badge-icon">🛡️</span>
            <span className="guarantee__badge-days">{guarantee.days}</span>
            <span className="guarantee__badge-text">DÍAS DE<br />GARANTÍA</span>
          </div>

          <div className="guarantee__content">
            <h2 className="guarantee__headline">{guarantee.headline}</h2>
            <p className="guarantee__copy">{guarantee.copy}</p>
            <p className="guarantee__subtext">{guarantee.subtext}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
