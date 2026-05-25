import propertyConfig from '@/property.config.js';
import JsonLd from '@/app/components/JsonLd';
import ReelChrome from '@/app/components/ReelChrome';
import HeroSlide from '@/app/components/slides/HeroSlide';
import MediaSlide from '@/app/components/slides/MediaSlide';
import NarrativeSlide from '@/app/components/slides/NarrativeSlide';
import FactsSlide from '@/app/components/slides/FactsSlide';
import AmenitiesSlide from '@/app/components/slides/AmenitiesSlide';
import SettingSlide from '@/app/components/slides/SettingSlide';
import AgentSlide from '@/app/components/slides/AgentSlide';
import CtaSlide from '@/app/components/slides/CtaSlide';

// Maps each navigable section to its first slide index in the reel below.
// Keep in sync with the slide order in <main>.
const sections = [
  { id: 'top', label: 'Top', at: 0 },
  { id: 'story', label: 'Story', at: 1 },
  { id: 'offering', label: 'Offering', at: 7 },
  { id: 'amenities', label: 'Amenities', at: 9 },
  { id: 'setting', label: 'Setting', at: 16 },
  { id: 'agent', label: 'Agent', at: 17 },
  { id: 'contact', label: 'Contact', at: 18 },
];

export default function Page() {
  const { property, agent, media, site } = propertyConfig;
  const [intro, architecture, wellness] = property.paragraphs;

  return (
    <>
      <JsonLd property={property} agent={agent} site={site} />
      <ReelChrome sections={sections} />
      <main className="reel">
        <HeroSlide property={property} media={media[0]} />

        <NarrativeSlide
          eyebrow="The Property"
          headline="A residence of considered detail."
          body={intro}
        />

        <MediaSlide item={media[1]} />

        <NarrativeSlide eyebrow="The Architecture" body={architecture} />

        <MediaSlide item={media[2]} />

        <NarrativeSlide eyebrow="The Wellness Wing" body={wellness} />

        <MediaSlide item={media[3]} />

        <FactsSlide property={property} />

        <MediaSlide item={media[4]} />

        <AmenitiesSlide
          category="Interior"
          items={property.amenities.Interior}
        />

        <MediaSlide item={media[5]} />

        <AmenitiesSlide
          category="Outdoor"
          items={property.amenities.Outdoor}
        />

        <MediaSlide item={media[6]} />

        <AmenitiesSlide
          category="Wellness"
          items={property.amenities.Wellness}
        />

        <AmenitiesSlide
          category="Technology"
          items={property.amenities.Technology}
        />

        <MediaSlide item={media[7]} />

        <SettingSlide
          neighborhood={property.neighborhood}
          address={property.address}
        />

        <AgentSlide agent={agent} />

        <CtaSlide agent={agent} property={property} />
      </main>
    </>
  );
}
