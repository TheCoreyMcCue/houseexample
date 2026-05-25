/**
 * Single source of truth for the property showcase.
 * Edit this file to repopulate the entire site.
 */
const propertyConfig = {
  site: {
    url: 'https://example-luxury-listing.vercel.app',
    name: 'The Aurelia Residence',
    locale: 'en_US',
  },

  property: {
    headline: 'The Aurelia Residence',
    tagline: 'A modernist sanctuary above the Pacific.',

    // Multi-paragraph editorial narrative.
    paragraphs: [
      'Perched on a private bluff in the Bird Streets, The Aurelia Residence is a singular collaboration between Studio Vyne and the late landscape architect Henrik Aalto — a quiet, museum-grade composition of board-formed concrete, smoked oak, and floor-to-ceiling glass that opens directly onto the canyon and the Pacific beyond.',
      'The plan unfolds across three discreet pavilions, joined by a central gallery hall that doubles as the home’s primary art axis. Living, dining, and kitchen flow onto a 70-foot infinity-edge pool deck oriented to capture sunset and city light in equal measure. The five suites are sited for privacy, each with its own outdoor terrace and full-height pivot doors that dissolve the line between interior and garden.',
      'A subterranean wellness wing — sauna, steam, cold plunge, gym, and a 14-seat screening room — sits beneath the motor court, lit by a faceted skylight oculus designed in collaboration with light artist Mira Okafor. Smart-glass throughout the primary suite transitions from clear to opaque on command; mechanical systems, shading, and security are unified under a single Crestron Home interface.',
    ],

    shortDescription:
      'A 5-bedroom architectural estate with panoramic ocean and city views, infinity pool, and private wellness wing.',

    address: {
      street: '1428 Skyline Heights Drive',
      city: 'Los Angeles',
      region: 'CA',
      postalCode: '90069',
      country: 'US',
    },
    geo: {
      latitude: 34.0997,
      longitude: -118.3789,
    },
    price: 28_500_000,
    currency: 'USD',
    beds: 5,
    baths: 7,
    halfBaths: 2,
    sqft: 11_240,
    lotSqft: 38_600,
    yearBuilt: 2024,
    propertyType: 'SingleFamilyResidence',

    // Extended specs surfaced in the details table.
    specs: {
      Architect: 'Studio Vyne',
      Builder: 'Marlowe Construction Group',
      Style: 'Contemporary',
      Stories: 3,
      Views: 'Ocean · City · Canyon',
      Garage: '3-car gallery',
      Pool: 'Infinity edge · heated',
      'HOA Dues': 'None',
      'Property ID': 'MV-1428-AUR',
    },

    // Amenities grouped by category for editorial display.
    amenities: {
      Interior: [
        'Bulthaup chef’s kitchen',
        'Statuario marble island, 14-ft',
        'Sub-Zero / Wolf appliance suite',
        'Climate-controlled wine room (840 btl)',
        'Smart-glass primary suite walls',
        'Board-formed concrete + smoked oak',
        'Custom millwork by Studio Vyne',
        'Lutron lighting throughout',
      ],
      Outdoor: [
        '70-ft infinity-edge pool',
        'Spa and cold plunge terrace',
        'Outdoor kitchen + pizza hearth',
        'Sunset deck with fire feature',
        'Landscape by Henrik Aalto',
        'Olive grove + cutting garden',
        'Three private terraces',
        'Gated motor court',
      ],
      Wellness: [
        'Sauna and steam',
        'Cold plunge + hot soaking pool',
        'Full gym with Pilates reformer',
        'Meditation alcove',
        'Treatment / massage room',
        '14-seat screening room',
        'Faceted skylight oculus',
      ],
      Technology: [
        'Crestron Home unified system',
        'Smart-glass primary suite',
        'EV charging (Level 2, ×3)',
        'Whole-home solar + Powerwall',
        '10 Gbps fiber, mesh Wi-Fi 7',
        'Discrete in-ceiling audio',
        'Cinema-grade projection',
        '24/7 monitored security',
      ],
    },

    // Neighborhood / setting context for the "The Setting" section.
    neighborhood: {
      name: 'The Bird Streets',
      lead:
        'A discreet, ridge-line enclave above the Sunset Strip — minutes from Beverly Hills, but a world apart.',
      description:
        'Long a refuge for the city’s most private collectors and creative directors, the Bird Streets sit at the highest habitable elevation between Doheny and Laurel Canyon. The streets are narrow and quiet; the views — ocean to the south, downtown to the east, the Getty to the west — are among the most coveted in Southern California.',
      highlights: [
        { label: 'Sunset Strip', value: '4 min' },
        { label: 'Beverly Hills', value: '7 min' },
        { label: 'LAX (helipad)', value: '12 min' },
        { label: 'Elevation', value: '1,420 ft' },
      ],
    },

    // Legacy short list kept for the inline features pill row.
    features: [
      'Infinity-edge pool',
      'Subterranean wellness wing',
      'Private screening room',
      'Three-car gallery garage',
      'Smart-glass primary suite',
      'Chef’s kitchen by Bulthaup',
    ],
  },

  agent: {
    name: 'Eliza Marchetti',
    title: 'Senior Estates Director',
    brokerage: 'Marchetti & Vale | Private Client Group',
    photo:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    phone: '+1 (310) 555-0142',
    phoneDisplay: '(310) 555-0142',
    email: 'eliza@marchettivale.com',
    license: 'DRE #02087431',
    bio:
      'Eliza represents architectural and trophy estates across the Westside, with a discreet, internationally connected clientele and a reputation for matching singular properties with singular buyers. She works exclusively by referral, and personally accompanies every showing.',
    stats: [
      { label: 'Lifetime Sales', value: '$2.1B+' },
      { label: 'Transactions', value: '340+' },
      { label: 'Avg. Days on Market', value: '23' },
      { label: 'Years Active', value: '18' },
    ],
    specialties: [
      'Architectural Estates',
      'Trophy Properties',
      'International Clientele',
      'Off-Market Representation',
    ],
    languages: ['English', 'Italian', 'French'],
  },

  // Vertical-snap media reel. Each item is either an image or a short clip.
  media: [
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85',
      alt: 'Exterior at golden hour, cantilevered roofline against the Pacific',
      caption: 'Cantilevered above the canyon — golden hour.',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      alt: 'Pool deck with infinity edge over the city',
      caption: 'The 70-foot infinity edge.',
    },
    {
      type: 'video',
      src: 'https://videos.pexels.com/video-files/3015527/3015527-hd_1920_1080_24fps.mp4',
      poster:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
      alt: 'Walking tour of the primary living wing',
      caption: 'A walk through the primary wing.',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85',
      alt: 'Open-plan great room with travertine floors',
      caption: 'Great room — travertine + white oak.',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
      alt: 'Chef’s kitchen by Bulthaup',
      caption: 'Bulthaup kitchen, statuario island.',
    },
    {
      type: 'video',
      src: 'https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4',
      poster:
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
      alt: 'Primary suite at dusk with skyline beyond',
      caption: 'Primary suite — skyline view.',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
      alt: 'Wellness wing with cold plunge and steam',
      caption: 'Subterranean wellness wing.',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
      alt: 'Aerial twilight view of the property and city lights',
      caption: 'Twilight, from above.',
    },
  ],

  // Used as the social-share image (1200x630 recommended).
  ogImage:
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&h=630&q=85',
};

module.exports = propertyConfig;
