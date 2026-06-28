import BuyButton from './shared/BuyButton.jsx';
import { product } from '../config/product.js';
import './AuthorSection.css';

export default function AuthorSection() {
  const { author, pricing } = product;
  return (
    <section className="author" id="autor">
      <div className="container">
        <span className="section-label">Sobre el creador</span>

        <div className="author__card">
          {/* Avatar */}
          <div className="author__avatar-wrap">
            {author.avatar ? (
              <img
                src={author.avatar}
                alt={author.name}
                className="author__photo"
              />
            ) : (
              <div className="author__avatar-placeholder">
                <span>👤</span>
                <span className="author__avatar-hint">Tu foto aquí</span>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="author__content">
            <h2 className="author__name">{author.name}</h2>
            <p className="author__title">{author.title}</p>

            <p className="author__story">{author.empathyStory}</p>

            <ul className="author__credentials">
              {author.credentials.map((c, i) => (
                <li key={i} className="author__credential">{c}</li>
              ))}
            </ul>

            <p className="author__closing">{author.closing}</p>
          </div>
        </div>

        {/* CTA final antes del footer */}
        <div className="author__final-cta">
          <h3 className="author__final-title">¿Listo para transformar tu situación?</h3>
          <BuyButton id="btn-author" size="large" label={pricing.ctaButton} />
          <p className="author__final-note">
            Garantía de {product.guarantee.days} días · Acceso inmediato
          </p>
        </div>
      </div>
    </section>
  );
}
