export interface Area {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  heroImage?: string;
  stats: {
    label: string;
    value: string;
  }[];
  highlights: string[];
  propertyTypes: string[];
  majorOccupiers: string[];
  connectivity: string[];
  infrastructure: string[];
  priceRange: {
    sale: string;
    lease: string;
  };
  futureProspects: string;
}

export const areas: Area[] = [
  {
    slug: 'mihan-sez',
    name: 'MIHAN SEZ',
    tagline: 'IT/ITES & Aerospace Hub',
    description: 'Multi-modal International Hub Airport at Nagpur SEZ - India\'s largest SEZ project.',
    longDescription: 'MIHAN (Multi-modal International Hub Airport at Nagpur) SEZ is India\'s largest Special Economic Zone, strategically located adjacent to the Dr. Babasaheb Ambedkar International Airport. Spread across 4,354 hectares, MIHAN encompasses IT/ITES, aerospace, manufacturing, and logistics sectors. The SEZ offers attractive tax incentives, world-class infrastructure, and access to a skilled workforce of 60,000+ IT professionals in Nagpur.',
    stats: [
      { label: 'IT Workforce', value: '60,000+' },
      { label: 'Companies', value: '50+' },
      { label: 'Total Area', value: '4,354 Ha' },
      { label: 'Annual Growth', value: '12%' }
    ],
    highlights: [
      'SEZ tax benefits for IT/ITES companies',
      'Adjacent to international airport',
      'Metro connectivity (Planned)',
      'Campus-style IT parks',
      '24/7 power with backup',
      'Fiber optic connectivity'
    ],
    propertyTypes: [
      'IT Office Space',
      'BPO/KPO Centers',
      'Aerospace Manufacturing',
      'Logistics & Warehousing',
      'Data Centers'
    ],
    majorOccupiers: [
      'TCS - Tata Consultancy Services',
      'Tech Mahindra',
      'Infosys',
      'HCL Technologies',
      'Boeing (MRO Facility)',
      'Air India Engineering'
    ],
    connectivity: [
      'Dr. Babasaheb Ambedkar International Airport - Adjacent',
      'Nagpur Junction Railway Station - 15 km',
      'NH44 (North-South Corridor) - 10 km',
      'Proposed Metro Station',
      'Inner Ring Road connectivity'
    ],
    infrastructure: [
      'Dedicated power substation',
      '100 Mbps+ internet backbone',
      'Central effluent treatment',
      'Fire services station',
      'Common facilities center',
      'Medical center on-site'
    ],
    priceRange: {
      sale: '₹5,500 - ₹7,500/sq.ft',
      lease: '₹55 - ₹75/sq.ft/month'
    },
    futureProspects: 'With the upcoming Metro Phase 2 extension and continued IT sector growth, MIHAN SEZ is projected to see 15-20% annual appreciation over the next 5 years. The Nagpur-Mumbai industrial corridor will further enhance connectivity and attract manufacturing investments.'
  },
  {
    slug: 'dharampeth',
    name: 'Dharampeth',
    tagline: 'Premium Retail Destination',
    description: 'Nagpur\'s premier retail corridor featuring premium jewelry and lifestyle brands.',
    longDescription: 'Dharampeth is Nagpur\'s most prestigious retail destination, known for its concentration of premium jewelry stores, lifestyle brands, and high-end retail showrooms. The area has witnessed 8.9% annual appreciation, driven by strong consumer spending power and limited new supply. Prime retail frontage on Dharampeth Main Road commands the highest rents in the city.',
    stats: [
      { label: 'Annual Appreciation', value: '8.9%' },
      { label: 'Retail Stores', value: '200+' },
      { label: 'Avg. Rent', value: '₹90-120/sq.ft' },
      { label: 'Customer Profile', value: 'Premium' }
    ],
    highlights: [
      'Highest retail rental values in Nagpur',
      'Affluent catchment area',
      'Near Metro station',
      'Premium brand destination',
      'Strong jewelry retail cluster',
      'High street shopping experience'
    ],
    propertyTypes: [
      'Retail Showrooms',
      'Jewelry Stores',
      'Branded Outlets',
      'Banks & ATMs',
      'Commercial Complexes'
    ],
    majorOccupiers: [
      'TBZ - The Original (Tribhovandas Bhimji Zaveri)',
      'Kothari Jewellers',
      'Reliance Digital',
      'HDFC Bank',
      'Axis Bank',
      'Premium fashion outlets'
    ],
    connectivity: [
      'Dharampeth Metro Station - Walking distance',
      'Central Bus Stand - 2 km',
      'Nagpur Junction - 3 km',
      'Civil Lines - 1 km',
      'Medical Square - 1.5 km'
    ],
    infrastructure: [
      'Underground cabling',
      'Street lighting',
      'Public parking nearby',
      'Police station proximity',
      'Fire safety compliance',
      'Metro station infrastructure'
    ],
    priceRange: {
      sale: '₹15,000 - ₹25,000/sq.ft',
      lease: '₹90 - ₹120/sq.ft/month'
    },
    futureProspects: 'With Metro operations enhancing accessibility and limited new retail supply, Dharampeth will continue to command premium valuations. Expected 8-10% annual appreciation with potential for national brand expansion.'
  },
  {
    slug: 'civil-lines',
    name: 'Civil Lines',
    tagline: 'Premium Corporate Address',
    description: 'Nagpur\'s most prestigious commercial district with RBI regional office.',
    longDescription: 'Civil Lines represents the pinnacle of commercial real estate in Nagpur, housing the Reserve Bank of India regional office, corporate headquarters, and prestigious professional services firms. The area witnessed a remarkable 30.35% appreciation in the past year, with average prices reaching ₹10,394/sq.ft. This heritage district offers unmatched address value for businesses seeking premium positioning.',
    stats: [
      { label: 'Avg. Price', value: '₹10,394/sq.ft' },
      { label: 'Last Year Growth', value: '30.35%' },
      { label: 'Corporate HQs', value: '100+' },
      { label: 'Grade', value: 'Premium A+' }
    ],
    highlights: [
      'Highest property values in Nagpur',
      'RBI Regional Office location',
      'Heritage district premium',
      'Corporate headquarters cluster',
      'Banks & financial institutions',
      'Supreme address value'
    ],
    propertyTypes: [
      'Corporate Offices',
      'Bank Headquarters',
      'Professional Services',
      'Legal & CA Firms',
      'Investment Firms'
    ],
    majorOccupiers: [
      'Reserve Bank of India (Regional Office)',
      'State Bank of India',
      'Bank of Maharashtra',
      'Leading CA & Law Firms',
      'Insurance Companies',
      'Corporate Regional Offices'
    ],
    connectivity: [
      'Railway Station - 2 km',
      'Airport - 8 km',
      'Metro Station - Walking distance',
      'Inner Ring Road - 1 km',
      'Sitabuldi CBD - 1 km'
    ],
    infrastructure: [
      'Underground utilities',
      'Heritage zone regulations',
      'Premium street infrastructure',
      'Green cover maintained',
      'Security presence',
      'Municipal services priority'
    ],
    priceRange: {
      sale: '₹10,000 - ₹15,000/sq.ft',
      lease: '₹80 - ₹100/sq.ft/month'
    },
    futureProspects: 'Civil Lines will maintain its premium positioning as Nagpur\'s most prestigious address. Limited supply and continued corporate demand suggest sustained appreciation of 12-15% annually.'
  },
  {
    slug: 'sitabuldi',
    name: 'Sitabuldi CBD',
    tagline: 'Central Business District',
    description: 'Nagpur\'s CBD anchored by World Trade Center with 2 lakh daily footfall.',
    longDescription: 'Sitabuldi serves as Nagpur\'s Central Business District, anchored by the prestigious World Trade Center—a 1.5 million sq.ft mixed-use development. With 2 lakh daily footfall, the area offers unparalleled visibility for retail and commercial enterprises. The Metro hub connectivity has further enhanced the district\'s accessibility and commercial appeal.',
    stats: [
      { label: 'Daily Footfall', value: '2 Lakh' },
      { label: 'WTC Area', value: '1.5M sq.ft' },
      { label: 'Businesses', value: '500+' },
      { label: 'Annual Growth', value: '10%' }
    ],
    highlights: [
      'World Trade Center location',
      'Metro hub connectivity',
      'Highest footfall area',
      'Mixed retail & office',
      'Central location advantage',
      'Government offices nearby'
    ],
    propertyTypes: [
      'Office Space',
      'Retail Showrooms',
      'Mixed-Use Commercial',
      'Food & Beverage',
      'Entertainment Venues'
    ],
    majorOccupiers: [
      'World Trade Center Nagpur',
      'Government Offices',
      'Banks (All Major)',
      'National Retail Chains',
      'Restaurants & Cafes',
      'Cinema Halls'
    ],
    connectivity: [
      'Sitabuldi Metro Station - Central Hub',
      'Railway Station - 1 km',
      'Bus Stand - Adjacent',
      'All city areas accessible',
      'Ring Road connectivity'
    ],
    infrastructure: [
      'Metro station infrastructure',
      'Multi-level parking',
      'Smart city initiatives',
      'Street improvements',
      'Public amenities',
      'Security systems'
    ],
    priceRange: {
      sale: '₹8,000 - ₹12,000/sq.ft',
      lease: '₹70 - ₹95/sq.ft/month'
    },
    futureProspects: 'As Nagpur\'s CBD, Sitabuldi will benefit from continued metro-led development and commercial expansion. The World Trade Center will drive office demand while retail benefits from unmatched footfall.'
  },
  {
    slug: 'butibori-midc',
    name: 'Butibori MIDC',
    tagline: 'India\'s Largest Industrial Estate',
    description: 'Asia\'s largest MIDC industrial estate with 266+ companies across 23 sq.km.',
    longDescription: 'Butibori MIDC is Asia\'s largest industrial estate, spanning 23 sq.km with over 266 operational companies. Located on the National Highway 44 (North-South corridor), the area offers excellent logistics connectivity for manufacturing and warehousing operations. The upcoming 1,500-acre mega logistics hub near Wardha will further enhance Butibori\'s significance as a regional distribution center.',
    stats: [
      { label: 'Total Area', value: '23 sq.km' },
      { label: 'Companies', value: '266+' },
      { label: 'Investment', value: '₹5,000 Cr+' },
      { label: 'Employment', value: '50,000+' }
    ],
    highlights: [
      'India\'s largest MIDC',
      'NH44 highway frontage',
      'Rail siding available',
      'MIHAN SEZ proximity',
      'All utilities ready',
      'Expansion potential'
    ],
    propertyTypes: [
      'Warehouses',
      'Manufacturing Units',
      'Logistics Parks',
      'Industrial Plots',
      'Cold Storage Facilities'
    ],
    majorOccupiers: [
      'Major FMCG Companies',
      'Auto Component Manufacturers',
      'E-commerce Fulfillment Centers',
      'Pharmaceutical Units',
      'Food Processing Plants',
      'Engineering Industries'
    ],
    connectivity: [
      'NH44 (Mumbai-Nagpur) - Direct Access',
      'Butibori Railway Station - 2 km',
      'Airport - 25 km',
      'Nagpur City - 20 km',
      'Samruddhi Expressway - 30 km'
    ],
    infrastructure: [
      'MIDC utilities',
      'Industrial power (HT)',
      'Water supply',
      'Effluent treatment',
      'Internal roads',
      'Common facilities'
    ],
    priceRange: {
      sale: '₹2,000 - ₹3,500/sq.ft',
      lease: '₹18 - ₹25/sq.ft/month'
    },
    futureProspects: 'The upcoming mega logistics hub and improved Samruddhi Expressway connectivity will drive significant demand for warehousing. Expected 8-12% annual appreciation with strong rental growth from e-commerce expansion.'
  },
  {
    slug: 'hingna-midc',
    name: 'Hingna MIDC',
    tagline: 'Established Manufacturing Hub',
    description: 'Well-established industrial zone with Mahindra\'s tractor plant and 183+ companies.',
    longDescription: 'Hingna MIDC is one of Nagpur\'s oldest and most established industrial areas, anchored by Mahindra\'s tractor manufacturing plant. With 183+ operational units, the area has developed a robust ecosystem of auto ancillaries, engineering firms, and manufacturing enterprises. The established infrastructure and skilled workforce make it ideal for immediate operations.',
    stats: [
      { label: 'Companies', value: '183+' },
      { label: 'Established', value: '1970s' },
      { label: 'Employment', value: '30,000+' },
      { label: 'Growth Rate', value: '7%' }
    ],
    highlights: [
      'Mahindra anchor tenant',
      'Established infrastructure',
      'Skilled workforce available',
      'City connectivity',
      'Auto ancillary cluster',
      'Immediate possession'
    ],
    propertyTypes: [
      'Manufacturing Units',
      'Industrial Sheds',
      'Auto Ancillary Units',
      'Engineering Workshops',
      'Storage Facilities'
    ],
    majorOccupiers: [
      'Mahindra & Mahindra (Tractor Plant)',
      'Auto Component Suppliers',
      'Engineering Companies',
      'Tool & Die Manufacturers',
      'Packaging Industries',
      'Plastic Processors'
    ],
    connectivity: [
      'Nagpur City Center - 12 km',
      'NH7 - 5 km',
      'Railway Station - 15 km',
      'Airport - 20 km',
      'Ring Road - 3 km'
    ],
    infrastructure: [
      'Established MIDC services',
      'Power infrastructure',
      'Water supply',
      'Drainage system',
      'Internal roads',
      'Security services'
    ],
    priceRange: {
      sale: '₹2,500 - ₹4,000/sq.ft',
      lease: '₹20 - ₹30/sq.ft/month'
    },
    futureProspects: 'Hingna will continue to serve as a manufacturing hub with steady demand from the auto sector. Expected 7-9% annual appreciation with potential upside from EV component manufacturing.'
  }
];

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find(area => area.slug === slug);
}

export function getAllAreaSlugs(): string[] {
  return areas.map(area => area.slug);
}
