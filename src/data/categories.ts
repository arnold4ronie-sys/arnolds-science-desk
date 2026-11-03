export interface CategoryNode {
  slug: string;
  name: string;
  blurb?: string;
  children?: CategoryNode[];
}

export const categories: CategoryNode[] = [
  {
    slug: 'technology-innovation',
    name: 'Technology & Innovation',
    blurb: 'New tools, ideas and inventions, and what they mean for people and economies.',
  },
  {
    slug: 'health-communication',
    name: 'Health Communication',
    blurb: 'Clear, careful explanations of health research and public health information.',
    children: [
      { slug: 'hiv-aids', name: 'HIV & AIDS' },
      {
        slug: 'cancer',
        name: 'Cancer',
        children: [
          { slug: 'breast-cancer', name: 'Breast cancer' },
          { slug: 'cervical-cancer', name: 'Cervical cancer' },
          { slug: 'prostate-cancer', name: 'Prostate cancer' },
          { slug: 'lung-cancer', name: 'Lung cancer' },
          { slug: 'other-cancers', name: 'Other cancers' },
        ],
      },
      { slug: 'diabetes', name: 'Diabetes' },
      { slug: 'mental-health', name: 'Mental health' },
      { slug: 'infectious-diseases', name: 'Infectious diseases' },
      { slug: 'public-health', name: 'Public health' },
    ],
  },
  {
    slug: 'science-research',
    name: 'Science & Research',
    blurb: 'Studies, discoveries and the people behind them, explained in plain language.',
  },
  {
    slug: 'environment-climate',
    name: 'Environment & Climate',
    blurb: 'Climate, ecosystems and the environment, from local impact to global change.',
  },
  {
    slug: 'people-society',
    name: 'People & Society',
    blurb: 'How science and technology shape communities, work and everyday life.',
  },
  {
    slug: 'multimedia',
    name: 'Multimedia',
    blurb: 'Documentaries, photo essays, interviews and visual explainers.',
    children: [
      { slug: 'documentaries', name: 'Documentaries' },
      { slug: 'photo-essays', name: 'Photo essays' },
      { slug: 'interviews', name: 'Interviews' },
      { slug: 'visual-explainers', name: 'Visual explainers' },
    ],
  },
];

/** Build a URL from a list of slugs, at any depth. Multimedia has its own section. */
export function categoryHref(path: string[]): string {
  if (path.length === 0) return '/topics';

  const [root, ...rest] = path;
  if (root === 'multimedia') return ['/multimedia', ...rest].join('/');
  return '/topics/' + path.join('/');
}
