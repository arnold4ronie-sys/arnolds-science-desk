export interface SocialLink {
  label: string;
  href: string;
}

export const siteConfig = {
  name: "Arnold's Science Desk",
  tagline: 'Independent science and health journalism from Kenya, for Africa and the world.',
  description:
    'Arnold\u2019s Science Desk makes scientific research, health information and technology understandable to ordinary readers, with a focus on Kenya and Africa and coverage of important global developments.',
  url: 'https://arnolds-science-desk.netlify.app',
  indexable: false,
  editor: {
    name: 'Arnold',
    portfolioUrl: '',
  },
  social: [] as SocialLink[],
  contactEmail: '',
};
