import Image from 'next/image';

export default function HeroSlide({ property, media }) {
  return (
    <section
      data-slide
      data-kind="hero"
      className="slide slide--hero"
      aria-label="Property hero"
    >
      <div className="slide__media">
        <Image
          src={media.src}
          alt={media.alt}
          fill
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="slide__scrim" aria-hidden="true" />
      </div>

      <div className="slide__content slide__content--bottom">
        <p className="eyebrow slide__eyebrow">
          {property.address.city}, {property.address.region}
        </p>
        <h1 className="display slide__title">{property.headline}</h1>
        <p className="slide__tagline">{property.tagline}</p>
      </div>

      <p className="slide__hint" aria-hidden="true">Scroll</p>
    </section>
  );
}
