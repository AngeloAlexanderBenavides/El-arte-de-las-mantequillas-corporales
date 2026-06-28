import { product } from '../config/product.js';
import './TestimonialsSection.css';

export default function TestimonialsSection() {
  const { testimonials } = product;
  return (
    <section className="testimonials" id="testimonios">
      <div className="container">
        <span className="section-label">{testimonials.sectionLabel}</span>
        <h2 className="testimonials__headline">{testimonials.headline}</h2>

        <div className="testimonials__grid">
          {testimonials.list.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-card__objecion">{t.objecion}</div>
              <p className="testimonial-card__quote">{t.quote}</p>
              <div className="testimonial-card__footer">
                <span className="testimonial-card__avatar">{t.avatar}</span>
                <div className="testimonial-card__info">
                  <strong className="testimonial-card__name">{t.name}</strong>
                  <span className="testimonial-card__location">📍 {t.location}</span>
                </div>
              </div>
              <div className="testimonial-card__result">✅ {t.result}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
