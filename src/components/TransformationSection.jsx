import BuyButton from './shared/BuyButton.jsx';
import { product } from '../config/product.js';
import './TransformationSection.css';

export default function TransformationSection() {
  const { transformation } = product;
  return (
    <section className="transformation" id="transformation">
      <div className="container">
        <span className="section-label accent">{transformation.sectionLabel}</span>
        <h2 className="transformation__headline">{transformation.headline}</h2>

        <ul className="transformation__list">
          {transformation.afterPoints.map((point, i) => (
            <li key={i} className="transformation__item">
              <span className="transformation__check">✅</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <blockquote className="transformation__quote">
          {transformation.closingQuote}
        </blockquote>

        <div className="transformation__cta">
          <BuyButton id="btn-transformation" />
        </div>
      </div>
    </section>
  );
}
