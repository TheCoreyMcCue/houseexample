export default function SettingSlide({ neighborhood, address }) {
  return (
    <section
      data-slide
      data-kind="setting"
      className="slide slide--text slide--paper"
      aria-label="The setting"
    >
      <div className="slide__content slide__content--center setting-card">
        <p className="eyebrow slide__eyebrow">The Setting</p>
        <h2 className="display slide__title">{neighborhood.name}</h2>
        {neighborhood.lead && (
          <p className="setting__lead">{neighborhood.lead}</p>
        )}

        <dl className="setting__stats" aria-label="Distances and elevation">
          {neighborhood.highlights.map((h) => (
            <div className="setting__stat" key={h.label}>
              <dd>{h.value}</dd>
              <dt>{h.label}</dt>
            </div>
          ))}
        </dl>

        <p className="setting__address">
          {address.street} · {address.city}, {address.region}
        </p>
      </div>
    </section>
  );
}
