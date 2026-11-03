// TEMPORARY SAMPLE CONTENT. These are layout placeholders, not real reporting.
// They are replaced by published stories from Supabase in Stage 9.
import type { StorySummary } from '../../types/story';

export const sampleStories: StorySummary[] = [
  {
    slug: 'sample-explaining-a-clinical-trial',
    title: 'Sample story: Explaining a clinical trial in plain language',
    excerpt:
      'Placeholder text showing how a lead health story will appear on the homepage. This is layout content, not real reporting.',
    categoryPath: ['health-communication', 'cancer', 'breast-cancer'],
    date: '2026-11-02',
    readingMinutes: 8,
    featured: true,
    isSample: true,
  },
  {
    slug: 'sample-reading-a-research-paper',
    title: 'Sample story: Reading a research paper without a science degree',
    excerpt:
      'Placeholder text for a science explainer. It stands in for a real story so spacing and typography can be judged.',
    categoryPath: ['science-research'],
    date: '2026-10-30',
    readingMinutes: 6,
    featured: true,
    isSample: true,
  },
  {
    slug: 'sample-technology-feature',
    title: 'Sample story: A technology feature layout',
    excerpt: 'Placeholder text for a technology and innovation story. Real reporting will replace it.',
    categoryPath: ['technology-innovation'],
    date: '2026-10-28',
    readingMinutes: 5,
    featured: true,
    isSample: true,
  },
  {
    slug: 'sample-hiv-information-guide',
    title: 'Sample story: A plain-language guide layout',
    excerpt: 'Placeholder text showing how a health information guide will appear in the latest list.',
    categoryPath: ['health-communication', 'hiv-aids'],
    date: '2026-10-26',
    readingMinutes: 7,
    isSample: true,
  },
  {
    slug: 'sample-diabetes-explainer',
    title: 'Sample story: A diabetes explainer layout',
    excerpt: 'Placeholder text. This card shows a nested health category, one level below Health Communication.',
    categoryPath: ['health-communication', 'diabetes'],
    date: '2026-10-24',
    readingMinutes: 6,
    isSample: true,
  },
  {
    slug: 'sample-climate-feature',
    title: 'Sample story: An environment and climate feature layout',
    excerpt: 'Placeholder text for an environment story. Not real reporting.',
    categoryPath: ['environment-climate'],
    date: '2026-10-22',
    readingMinutes: 9,
    isSample: true,
  },
  {
    slug: 'sample-community-profile',
    title: 'Sample story: A community profile layout',
    excerpt: 'Placeholder text for a people and society story. Real profiles will replace it.',
    categoryPath: ['people-society'],
    date: '2026-10-20',
    readingMinutes: 10,
    isSample: true,
  },
  {
    slug: 'sample-researcher-interview',
    title: 'Sample interview: A conversation with a researcher',
    excerpt: 'Placeholder text for a multimedia interview entry. No real interview exists here.',
    categoryPath: ['multimedia', 'interviews'],
    date: '2026-10-18',
    readingMinutes: 12,
    format: 'interview',
    isSample: true,
  },
  {
    slug: 'sample-mental-health-feature',
    title: 'Sample story: A mental health feature layout',
    excerpt: 'Placeholder text for a mental health story. It is not real reporting or advice.',
    categoryPath: ['health-communication', 'mental-health'],
    date: '2026-10-16',
    readingMinutes: 7,
    isSample: true,
  },
];

const newestFirst = (a: StorySummary, b: StorySummary) => b.date.localeCompare(a.date);

export function getFeaturedStories(limit = 3): StorySummary[] {
  return sampleStories.filter((s) => s.featured).sort(newestFirst).slice(0, limit);
}

/** Latest stories, excluding those already featured so nothing appears twice. */
export function getLatestStories(limit = 6): StorySummary[] {
  return sampleStories.filter((s) => !s.featured).sort(newestFirst).slice(0, limit);
}
