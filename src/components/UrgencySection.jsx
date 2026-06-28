import CountdownTimer from './shared/CountdownTimer.jsx';
import BuyButton from './shared/BuyButton.jsx';
import { product } from '../config/product.js';
import './UrgencySection.css';

export default function UrgencySection() {
  const { urgency } = product;
  const pct = Math.round(((urgency.spotsTotal - urgency.spotsLeft) / urgency.spotsTotal) * 100);

  return (
    <section className="urgency" id="urgencia">
      <div className="container">
        <h2 className="urgency__headline">{urgency.headline}</h2>

        <CountdownTimer hours={urgency.countdownHours} />

        <div className="urgency__spots">
          <div className="urgency__spots-text">
            <span className="urgency__spots-left">{urgency.spotsLeft}</span>
            <span className="urgency__spots-total"> de {urgency.spotsTotal} cupos disponibles</span>
          </div>
          <div className="urgency__bar">
            <div className="urgency__bar-fill" style={{ width: `${pct}%` }} />
          </div>
          <p className="urgency__bar-label">
            🔥 {pct}% de los cupos ya fueron tomados
          </p>
        </div>

        <p className="urgency__warning">{urgency.bonusWarning}</p>

        <div className="urgency__cta">
          <BuyButton id="btn-urgency" />
        </div>
      </div>
    </section>
  );
}
