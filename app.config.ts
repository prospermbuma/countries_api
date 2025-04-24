// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'Countries API',
    description: 'A simple yet powerful API that lets you fetch detailed information about any country like its name, code, capital city, currency, and more. Perfect for apps needing up-to-date global data in a clean and accessible format.',
    image: '',
    socials: {
      twitter: 'https://x.com/prospermbuma',
      github: 'https://github.com/prospermbuma',
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
