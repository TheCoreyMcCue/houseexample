'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export default function ReelChrome({ sections = [] }) {
  const slidesRef = useRef([]);
  const [active, setActive] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const slides = Array.from(document.querySelectorAll('[data-slide]'));
    slidesRef.current = slides;
    if (slides.length === 0) return;
    setTotal(slides.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = slides.indexOf(entry.target);
          if (entry.isIntersecting && entry.intersectionRatio > 0.55) {
            setActive(idx);
          }

          const video = entry.target.querySelector('video');
          if (video) {
            if (entry.isIntersecting && entry.intersectionRatio > 0.55) {
              video.play().catch(() => {});
            } else {
              video.pause();
            }
          }
        });
      },
      { threshold: [0, 0.25, 0.55, 0.9] }
    );

    slides.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const jumpTo = useCallback((slideIndex) => {
    const slide = slidesRef.current[slideIndex];
    if (slide) slide.scrollIntoView({ block: 'start' });
  }, []);

  const activeSectionId = useMemo(() => {
    let id = sections[0]?.id;
    for (const s of sections) {
      if (s.at <= active) id = s.id;
    }
    return id;
  }, [active, sections]);

  const progress = total > 0 ? (active + 1) / total : 0;

  const contactSection = sections.find((s) => s.id === 'contact');
  const topSection = sections[0];
  const isOnContact = activeSectionId === 'contact';
  const quickTarget = isOnContact ? topSection : contactSection;
  const quickLabel = isOnContact ? 'Back to Top' : 'Inquire';
  const quickArrow = isOnContact ? '↑' : '↓';

  return (
    <>
      <div className="reel-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>

      <header className="reel-chrome" aria-hidden="true">
        <p className="reel-chrome__brand">Marchetti &amp; Vale</p>
        <p className="reel-chrome__counter">
          {String(active + 1).padStart(2, '0')}{' '}
          <span className="reel-chrome__sep">/</span>{' '}
          {String(total || 1).padStart(2, '0')}
        </p>
      </header>

      {quickTarget && (
        <button
          type="button"
          className="quick-cta"
          onClick={() => jumpTo(quickTarget.at)}
          aria-label={
            isOnContact ? 'Scroll back to top' : 'Jump to inquiry section'
          }
        >
          <span className="quick-cta__label">{quickLabel}</span>
          <span className="quick-cta__arrow" aria-hidden="true">
            {quickArrow}
          </span>
        </button>
      )}

      {sections.length > 0 && (
        <nav className="side-nav" aria-label="Jump to section">
          <ul>
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  className={`side-nav__btn ${
                    activeSectionId === s.id ? 'is-active' : ''
                  }`}
                  onClick={() => jumpTo(s.at)}
                  aria-label={`Jump to ${s.label}`}
                  aria-current={activeSectionId === s.id ? 'true' : undefined}
                >
                  <span className="side-nav__label">{s.label}</span>
                  <span className="side-nav__mark" aria-hidden="true" />
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
