import Image from 'next/image';

export default function MediaSlide({ item, priority = false }) {
  return (
    <section
      data-slide
      data-kind="media"
      className="slide slide--media"
      aria-label={item.alt}
    >
      {item.type === 'image' ? (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="100vw"
          quality={88}
          priority={priority}
        />
      ) : (
        <video
          src={item.src}
          poster={item.poster}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={item.alt}
        />
      )}
      {item.caption && (
        <figcaption className="slide__caption">{item.caption}</figcaption>
      )}
    </section>
  );
}
