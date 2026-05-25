export default function AmenitiesSlide({ category, items }) {
  return (
    <section
      data-slide
      data-kind="amenities"
      className="slide slide--text slide--cream"
      aria-label={`${category} amenities`}
    >
      <div className="slide__content slide__content--center amenities-card">
        <p className="eyebrow slide__eyebrow">Amenities</p>
        <h2 className="display slide__title amenities__title">{category}</h2>
        <ul className="amenities__list">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
