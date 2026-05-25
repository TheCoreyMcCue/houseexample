export default function JsonLd({ property, agent, site }) {
  const fullAddress = `${property.address.street}, ${property.address.city}, ${property.address.region} ${property.address.postalCode}`;

  const realEstateListing = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: property.headline,
    description: property.description,
    url: site.url,
    datePosted: new Date().toISOString().split('T')[0],
    image: site.url ? `${site.url}` : undefined,
    offers: {
      '@type': 'Offer',
      price: property.price,
      priceCurrency: property.currency,
      availability: 'https://schema.org/InStock',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: property.address.street,
      addressLocality: property.address.city,
      addressRegion: property.address.region,
      postalCode: property.address.postalCode,
      addressCountry: property.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: property.geo.latitude,
      longitude: property.geo.longitude,
    },
    mainEntity: {
      '@type': property.propertyType,
      name: property.headline,
      numberOfBedrooms: property.beds,
      numberOfBathroomsTotal: property.baths + property.halfBaths,
      numberOfFullBathrooms: property.baths,
      numberOfPartialBathrooms: property.halfBaths,
      floorSize: {
        '@type': 'QuantitativeValue',
        value: property.sqft,
        unitCode: 'FTK',
      },
      lotSize: {
        '@type': 'QuantitativeValue',
        value: property.lotSqft,
        unitCode: 'FTK',
      },
      yearBuilt: property.yearBuilt,
      address: {
        '@type': 'PostalAddress',
        streetAddress: property.address.street,
        addressLocality: property.address.city,
        addressRegion: property.address.region,
        postalCode: property.address.postalCode,
        addressCountry: property.address.country,
      },
    },
    seller: {
      '@type': 'RealEstateAgent',
      name: agent.name,
      jobTitle: agent.title,
      telephone: agent.phone,
      email: agent.email,
      image: agent.photo,
      worksFor: {
        '@type': 'Organization',
        name: agent.brokerage,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(realEstateListing).replace(/</g, '\\u003c'),
      }}
    />
  );
}
