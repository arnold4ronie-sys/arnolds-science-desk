/** The minimum a story card needs. Sample stories now, Supabase rows in Stage 9. */
export type StoryFormat = 'article' | 'video' | 'photo-essay' | 'interview';

export interface StorySummary {
  slug: string;
  title: string;
  excerpt: string;
  /** Category slugs from the top level down, e.g. ['health-communication', 'cancer', 'breast-cancer'] */
  categoryPath: string[];
  /** ISO date, e.g. '2026-11-02' */
  date: string;
  readingMinutes: number;
  format?: StoryFormat;
  featured?: boolean;
  image?: { src: string; alt: string };
  /** True for placeholder content. Shows a "Sample" badge. */
  isSample?: boolean;
}
