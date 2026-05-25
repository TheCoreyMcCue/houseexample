export default function NarrativeSlide({ eyebrow, headline, body, tone = 'paper' }) {
  return (
    <section
      data-slide
      data-kind="narrative"
      className={`slide slide--text slide--${tone}`}
      aria-label={headline || eyebrow}
    >
      <div className="slide__content slide__content--center">
        {eyebrow && <p className="eyebrow slide__eyebrow">{eyebrow}</p>}
        {headline && <h2 className="display slide__title">{headline}</h2>}
        {body && <p className="slide__body">{body}</p>}
      </div>
    </section>
  );
}
