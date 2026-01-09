export interface Property {
  id: string;
  title: string;
  type: 'office' | 'retail' | 'warehouse' | 'industrial' | 'plot';
  status: 'sale' | 'lease' | 'both';
  location: string;
  area: string;
  carpetArea: number;
  builtUpArea: number;
  price: number;
  priceUnit: 'total' | 'sqft' | 'month';
  description: string;
  features: string[];
  images: string[];
  featured: boolean;
  rera?: string;
  highlights: string[];
}

export const properties: Property[] = [
  {
    id: 'prop-001',
    title: 'Premium Office Space in World Trade Center',
    type: 'office',
    status: 'lease',
    location: 'Sitabuldi',
    area: 'Sitabuldi CBD',
    carpetArea: 5500,
    builtUpArea: 7200,
    price: 95,
    priceUnit: 'sqft',
    description: 'Grade A office space in the prestigious World Trade Center Nagpur. This premium commercial property offers state-of-the-art facilities, 24/7 power backup, central air conditioning, and stunning city views. Ideal for multinational corporations and established businesses seeking a prestigious address.',
    features: [
      'Central Air Conditioning',
      '24/7 Power Backup',
      'High-Speed Elevators',
      'Ample Parking',
      'Conference Facilities',
      'Food Court Access',
      'CCTV Security',
      'Fire Safety Systems'
    ],
    images: [
      '/images/properties/wtc-office-1.jpg',
      '/images/properties/wtc-office-2.jpg',
      '/images/properties/wtc-office-3.jpg'
    ],
    featured: true,
    rera: 'P52100001234',
    highlights: [
      '5,500 sq.ft carpet area',
      'Ready to move',
      'Prime CBD location'
    ]
  },
  {
    id: 'prop-002',
    title: 'IT Park Office in MIHAN SEZ',
    type: 'office',
    status: 'lease',
    location: 'MIHAN',
    area: 'MIHAN SEZ',
    carpetArea: 12000,
    builtUpArea: 15000,
    price: 65,
    priceUnit: 'sqft',
    description: 'Spacious IT-grade office space in the heart of MIHAN SEZ. Perfect for technology companies with excellent connectivity, proximity to the airport, and access to a skilled workforce. Features include raised flooring, structured cabling, and compliance with all SEZ regulations.',
    features: [
      'SEZ Tax Benefits',
      'IT/ITES Certified',
      'Raised Flooring',
      'Structured Cabling',
      'UPS Power',
      'Near Airport',
      'Metro Connectivity',
      'Campus Amenities'
    ],
    images: [
      '/images/properties/mihan-office-1.jpg',
      '/images/properties/mihan-office-2.jpg'
    ],
    featured: true,
    rera: 'P52100001235',
    highlights: [
      '12,000 sq.ft carpet area',
      'SEZ benefits available',
      '5 mins from airport'
    ]
  },
  {
    id: 'prop-003',
    title: 'Prime Retail Showroom in Dharampeth',
    type: 'retail',
    status: 'sale',
    location: 'Dharampeth',
    area: 'Dharampeth',
    carpetArea: 2800,
    builtUpArea: 3500,
    price: 18500,
    priceUnit: 'sqft',
    description: 'High-visibility retail showroom on Dharampeth main road. Excellent footfall area near premium jewelry stores and branded outlets. Ground floor with large frontage, ideal for fashion retail, electronics, or lifestyle brands.',
    features: [
      'Main Road Facing',
      'Large Glass Frontage',
      'High Ceiling',
      'Basement Storage',
      'Customer Parking',
      'Premium Location',
      'Near TBZ, Kothari',
      'Metro Station Nearby'
    ],
    images: [
      '/images/properties/dharampeth-retail-1.jpg',
      '/images/properties/dharampeth-retail-2.jpg'
    ],
    featured: true,
    rera: 'P52100001236',
    highlights: [
      '2,800 sq.ft carpet area',
      '8.9% annual appreciation',
      'Premium retail zone'
    ]
  },
  {
    id: 'prop-004',
    title: 'Modern Warehouse in Butibori MIDC',
    type: 'warehouse',
    status: 'lease',
    location: 'Butibori',
    area: 'Butibori MIDC',
    carpetArea: 45000,
    builtUpArea: 50000,
    price: 22,
    priceUnit: 'sqft',
    description: 'Large-scale warehousing facility in Butibori MIDC with excellent highway connectivity. Features include high-bay storage, loading docks, fire sprinklers, and dedicated office space. Ideal for e-commerce, FMCG, or manufacturing companies.',
    features: [
      '32ft Clear Height',
      'Multiple Loading Docks',
      'Fire Sprinkler System',
      'Built-in Office',
      'Truck Parking',
      'NH44 Connectivity',
      'Power 500 KVA',
      '24/7 Security'
    ],
    images: [
      '/images/properties/butibori-warehouse-1.jpg',
      '/images/properties/butibori-warehouse-2.jpg'
    ],
    featured: true,
    rera: 'P52100001237',
    highlights: [
      '45,000 sq.ft warehouse',
      'NH44 highway access',
      'Ready infrastructure'
    ]
  },
  {
    id: 'prop-005',
    title: 'Corporate Office in Civil Lines',
    type: 'office',
    status: 'sale',
    location: 'Civil Lines',
    area: 'Civil Lines',
    carpetArea: 8000,
    builtUpArea: 10000,
    price: 12500,
    priceUnit: 'sqft',
    description: 'Prestigious corporate office building in Civil Lines, Nagpur\'s most premium commercial district. Near RBI regional office with excellent address value. Suitable for banks, financial institutions, and corporate headquarters.',
    features: [
      'Premium Address',
      'Near RBI Office',
      'Dedicated Parking',
      'Generator Backup',
      'Modern Interiors',
      'Board Room',
      'Cafeteria Space',
      'VIP Security'
    ],
    images: [
      '/images/properties/civil-lines-office-1.jpg',
      '/images/properties/civil-lines-office-2.jpg'
    ],
    featured: false,
    rera: 'P52100001238',
    highlights: [
      '8,000 sq.ft carpet area',
      '30.35% appreciation last year',
      'Most premium location'
    ]
  },
  {
    id: 'prop-006',
    title: 'Industrial Plot in Hingna MIDC',
    type: 'industrial',
    status: 'sale',
    location: 'Hingna',
    area: 'Hingna MIDC',
    carpetArea: 25000,
    builtUpArea: 25000,
    price: 3500,
    priceUnit: 'sqft',
    description: 'Ready industrial plot with all approvals in Hingna MIDC. Excellent location near Mahindra plant with good road connectivity. Suitable for manufacturing, assembly, or warehousing operations.',
    features: [
      'Clear Title',
      'All Approvals',
      'Road Connectivity',
      'Water Supply',
      'Electricity Available',
      'Near Mahindra Plant',
      'Industrial Zone',
      'Expansion Possible'
    ],
    images: [
      '/images/properties/hingna-plot-1.jpg'
    ],
    featured: false,
    rera: 'P52100001239',
    highlights: [
      '25,000 sq.ft plot',
      'All MIDC approvals',
      'Ready for construction'
    ]
  },
  {
    id: 'prop-007',
    title: 'Mixed-Use Commercial Complex',
    type: 'retail',
    status: 'both',
    location: 'Ramdaspeth',
    area: 'Ramdaspeth',
    carpetArea: 15000,
    builtUpArea: 20000,
    price: 14000,
    priceUnit: 'sqft',
    description: 'Prime commercial complex with retail and office space. Strategic location in Ramdaspeth with high visibility and excellent footfall. Multiple floors available for various business needs.',
    features: [
      'Mixed-Use Building',
      'Retail Ground Floor',
      'Office Upper Floors',
      'Common Parking',
      'Lift Access',
      'Power Backup',
      'Central Location',
      'High Visibility'
    ],
    images: [
      '/images/properties/ramdaspeth-complex-1.jpg',
      '/images/properties/ramdaspeth-complex-2.jpg'
    ],
    featured: false,
    rera: 'P52100001240',
    highlights: [
      '15,000 sq.ft available',
      'Retail + Office combo',
      'Central Nagpur location'
    ]
  },
  {
    id: 'prop-008',
    title: 'Logistics Hub near Wardha',
    type: 'warehouse',
    status: 'lease',
    location: 'Wardha Road',
    area: 'Wardha Road Corridor',
    carpetArea: 100000,
    builtUpArea: 110000,
    price: 18,
    priceUnit: 'sqft',
    description: 'Large-scale logistics and distribution facility on the Wardha Road corridor. Part of the upcoming 1,500-acre mega logistics hub. Excellent connectivity via Samruddhi Expressway to Mumbai.',
    features: [
      'Cross-Docking Facility',
      '35ft Clear Height',
      'Multiple Entry Points',
      'Weighbridge',
      'Cold Storage Option',
      'Office Block',
      'Samruddhi Expressway',
      'Rail Siding Nearby'
    ],
    images: [
      '/images/properties/wardha-logistics-1.jpg',
      '/images/properties/wardha-logistics-2.jpg'
    ],
    featured: true,
    rera: 'P52100001241',
    highlights: [
      '1 lakh sq.ft facility',
      'Mumbai in 8 hours',
      'Mega logistics hub'
    ]
  }
];

export const propertyTypes = [
  { value: 'all', label: 'All Types' },
  { value: 'office', label: 'Office Space' },
  { value: 'retail', label: 'Retail/Showroom' },
  { value: 'warehouse', label: 'Warehouse' },
  { value: 'industrial', label: 'Industrial' },
  { value: 'plot', label: 'Commercial Plot' },
];

export const locations = [
  { value: 'all', label: 'All Locations' },
  { value: 'MIHAN', label: 'MIHAN SEZ' },
  { value: 'Dharampeth', label: 'Dharampeth' },
  { value: 'Civil Lines', label: 'Civil Lines' },
  { value: 'Sitabuldi', label: 'Sitabuldi CBD' },
  { value: 'Butibori', label: 'Butibori MIDC' },
  { value: 'Hingna', label: 'Hingna MIDC' },
  { value: 'Ramdaspeth', label: 'Ramdaspeth' },
  { value: 'Wardha Road', label: 'Wardha Road' },
];

export const priceRanges = [
  { value: 'all', label: 'Any Price' },
  { value: '0-50', label: 'Under ₹50/sq.ft' },
  { value: '50-100', label: '₹50 - ₹100/sq.ft' },
  { value: '100-200', label: '₹100 - ₹200/sq.ft' },
  { value: '200+', label: 'Above ₹200/sq.ft' },
];

export function getFeaturedProperties(): Property[] {
  return properties.filter(p => p.featured);
}

export function getPropertyById(id: string): Property | undefined {
  return properties.find(p => p.id === id);
}

export function filterProperties(
  type?: string,
  location?: string,
  status?: string
): Property[] {
  return properties.filter(p => {
    if (type && type !== 'all' && p.type !== type) return false;
    if (location && location !== 'all' && p.location !== location) return false;
    if (status && status !== 'all' && p.status !== status && p.status !== 'both') return false;
    return true;
  });
}
