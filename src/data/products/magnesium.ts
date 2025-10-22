// src/data/products/magnesium.ts

export type MagnesiumProduct = {
  id: string;
  name: string;
  brand: string;
  form: 'glycinate' | 'threonate' | 'citrate' | 'malate' | 'oxide' | 'chloride' | 'blend';
  elementalMgMg: number;       // mg of elemental magnesium per serving
  servings: number;
  priceUSD: number;
  image: string;               // public path, e.g. '/products/magnesium/neuro-mag.jpg'
  score?: number;              // SleepAudit score (optional)
  links: {
    direct?: string | null;    // affiliate link to brand site (fill later)
    amazon?: string | null;    // Amazon Associates link (fill later)
  };
  testing: {
    thirdParty?: 'NSF' | 'USP' | 'In-House' | null;
  };
  notes?: string[];
};

export const MAGNESIUM_PRODUCTS: MagnesiumProduct[] = [
  {
    id: 'neuro-mag',
    name: 'Neuro-Mag Magnesium L-Threonate',
    brand: 'Life Extension',
    form: 'threonate',
    elementalMgMg: 144,
    servings: 30,
    priceUSD: 31.50,
    image: '/products/magnesium/neuro-mag.jpg', // image file will be added in a later step
    score: 4.8,
    links: {
      direct: null,  // fill after affiliate approval
      amazon: null   // fill after Amazon Associates setup
    },
    testing: { thirdParty: 'In-House' },
    notes: ['Brain-penetrant chelate (L-threonate)', 'Non-GMO']
  },
  {
    id: 'nature-made-glycinate',
    name: 'High Absorption Magnesium Glycinate 200 mg Capsules',
    brand: 'Nature Made',
    form: 'glycinate',
    elementalMgMg: 200,
    servings: 60,
    priceUSD: 21.99,
    image: '/products/magnesium/nature-made-glycinate.jpg',
    score: 4.1,
    links: {
      direct: null,
      amazon: null
    },
    testing: { thirdParty: 'USP' },
    notes: [
      'Gentle chelated form for sensitive digestion',
      'USP Verified for purity and potency'
    ]
  },
  {
    id: 'solaray-glycinate',
    name: 'High Absorption Magnesium Glycinate 350 mg VegCaps',
    brand: 'Solaray',
    form: 'glycinate',
    elementalMgMg: 350,
    servings: 120,
    priceUSD: 18.39, // placeholder MSRP
    image: '/products/magnesium/solaray-glycinate.jpg',
    score: 4.8,
    links: {
      direct: null,
      amazon: null
    },
    testing: { thirdParty: 'In-House' },
    notes: [
      'Enhanced absorption with BioPerine® (black pepper extract)',
      'Vegetarian capsules'
    ]
  },
  {
    id: 'natural-vitality-calm-gummies',
    name: 'Natural Vitality CALM Magnesium Citrate Gummies – Raspberry Lemon Flavor',
    brand: 'Natural Vitality',
    form: 'citrate',
    elementalMgMg: 83,
    servings: 60,
    priceUSD: 27.89,
    image: '/products/magnesium/natural-vitality-calm-gummies.jpg',
    score: 4.3,
    links: {
      direct: null,
      amazon: null
    },
    testing: { thirdParty: 'In-House' },
    notes: [
      'Magnesium citrate form for gentle digestion',
      'Popular gummy format for easy use',
      'Vegan and non-GMO'
    ]
  },
  {
    id: 'qunol-magnesium-extra-strength',
    name: 'Qunol Extra Strength Magnesium 120ct Capsules',
    brand: 'Qunol',
    form: 'blend',
    elementalMgMg: 420,
    servings: 120,
    priceUSD: 16.99,
    image: '/products/magnesium/qunol-magnesium-extra-strength.jpg',
    score: 4.6,
    links: {
      direct: null,
      amazon: null
    },
    testing: { thirdParty: 'In-House' },
    notes: [
      'High-strength formula providing 420 mg magnesium per serving',
      'Blend of oxide and chelated forms',
      'USP-quality ingredients'
    ]
  },
  {
    id: 'olly-relaxing-magnesium-gummies',
    name: 'OLLY Relaxing Magnesium Gummies – Berry Verbena Flavor',
    brand: 'OLLY',
    form: 'glycinate',
    elementalMgMg: 100,
    servings: 50,
    priceUSD: 15.99,
    image: '/products/magnesium/olly-relaxing-magnesium-gummies.jpg',
    score: 4.4,
    links: {
      direct: null,
      amazon: null
    },
    testing: { thirdParty: 'In-House' },
    notes: [
      'Chewable gummy format with magnesium glycinate and L-theanine',
      'Low-dose, beginner-friendly option',
      'Tastes great and widely available'
    ]
  }
];
