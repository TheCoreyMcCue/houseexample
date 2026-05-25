import Image from 'next/image';

export default function AgentSlide({ agent }) {
  const headlineStats = (agent.stats ?? []).slice(0, 3);

  return (
    <section
      data-slide
      data-kind="agent"
      className="slide slide--text slide--paper"
      aria-label="Represented by"
    >
      <div className="slide__content agent-card">
        <p className="eyebrow slide__eyebrow">Represented By</p>

        <div className="agent__row">
          <Image
            className="agent__photo"
            src={agent.photo}
            alt={`Portrait of ${agent.name}`}
            width={220}
            height={275}
          />

          <div className="agent__intro">
            <h2 className="display agent__name">{agent.name}</h2>
            <p className="agent__title">{agent.title}</p>
            <p className="agent__brokerage">{agent.brokerage}</p>
          </div>
        </div>

        {headlineStats.length > 0 && (
          <dl className="agent__stats" aria-label="Career performance">
            {headlineStats.map((s) => (
              <div className="agent__stat" key={s.label}>
                <dd>{s.value}</dd>
                <dt>{s.label}</dt>
              </div>
            ))}
          </dl>
        )}

        {agent.specialties && (
          <ul className="agent__chips" aria-label="Specialties">
            {agent.specialties.slice(0, 3).map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        )}

        <div className="agent__contact">
          <a href={`tel:${agent.phone.replace(/[^+\d]/g, '')}`}>
            {agent.phoneDisplay}
          </a>
          <a href={`mailto:${agent.email}`}>{agent.email}</a>
        </div>

        <p className="agent__license">{agent.license}</p>
      </div>
    </section>
  );
}
