export default function CtaSlide({ agent, property }) {
  const firstName = agent.name.split(' ')[0];
  const subject = encodeURIComponent(`Inquiry — ${property.headline}`);
  const body = encodeURIComponent(
    `Hello ${firstName},\n\nI would like to learn more about ${property.headline} at ${property.address.street}.\n\nThank you.`
  );

  return (
    <section
      data-slide
      data-kind="cta"
      className="slide slide--text slide--ink"
      aria-label="Request a private tour"
    >
      <div className="slide__content slide__content--center cta-card">
        <p className="eyebrow slide__eyebrow">Private Showings</p>
        <h2 className="display slide__title">Request a private tour.</h2>
        <p className="cta__sub">
          By appointment only, personally arranged by {agent.name}.
        </p>

        <div className="cta__actions">
          <a
            className="btn btn--solid"
            href={`mailto:${agent.email}?subject=${subject}&body=${body}`}
          >
            Email {firstName}
          </a>
          <a
            className="btn btn--ghost"
            href={`tel:${agent.phone.replace(/[^+\d]/g, '')}`}
          >
            {agent.phoneDisplay}
          </a>
        </div>
      </div>

      <p className="cta__footnote">
        © {new Date().getFullYear()} {agent.brokerage}. Information deemed
        reliable but not guaranteed.
      </p>
    </section>
  );
}
