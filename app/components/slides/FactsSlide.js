function formatPrice(amount, currency) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatNumber(n) {
  return new Intl.NumberFormat('en-US').format(n);
}

export default function FactsSlide({ property }) {
  const { address } = property;
  const bathsLabel =
    property.halfBaths > 0
      ? `${property.baths} + ${property.halfBaths}`
      : `${property.baths}`;

  return (
    <section
      data-slide
      data-kind="facts"
      className="slide slide--text slide--paper"
      aria-label="Key facts"
    >
      <div className="slide__content slide__content--center facts-card">
        <p className="eyebrow slide__eyebrow">The Offering</p>

        <p className="facts__price display">
          {formatPrice(property.price, property.currency)}
        </p>

        <address className="facts__address">
          {address.street}
          <br />
          {address.city}, {address.region} {address.postalCode}
        </address>

        <ul className="facts__row-grid" aria-label="Bedrooms, bathrooms, interior, lot">
          <li>
            <span className="facts__num">{property.beds}</span>
            <span className="facts__lbl">Bed</span>
          </li>
          <li>
            <span className="facts__num">{bathsLabel}</span>
            <span className="facts__lbl">Bath</span>
          </li>
          <li>
            <span className="facts__num">{formatNumber(property.sqft)}</span>
            <span className="facts__lbl">Sq Ft</span>
          </li>
          <li>
            <span className="facts__num">{formatNumber(property.lotSqft)}</span>
            <span className="facts__lbl">Lot</span>
          </li>
        </ul>

        <p className="facts__meta">
          Built {property.yearBuilt} &nbsp;·&nbsp; {property.specs?.Architect} &nbsp;·&nbsp;{' '}
          {property.specs?.Style}
        </p>
      </div>
    </section>
  );
}
