export default defineAppConfig({
  ui: {
    primary: 'green',
    gray: 'slate',
  },
  seo: {
    siteName: 'Plateforme de formation - Fourny Valentin',
  },
  header: {
    logo: {
      alt: '',
      light: '',
      dark: '',
    },
    search: true,
    links: [
      {
        label: 'NodeJS',
        to: '/node',
      },
      {
        label: 'VueJS',
        to: '/vue',
      },
      {
        label: 'Tests et qualité de code',
        to: '/test',
      },
      {
        label: 'Git',
        to: '/git',
      },
    ],
    externalLinks: [
      {
        icon: 'i-mdi-github',
        to: 'https://github.com/vfourny',
        target: '_blank',
        'aria-label': 'VFourny Github',
      },
    ],
  },
  toc: {
    title: 'Sur cette page',
  },
});
