import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  description: "Limitless is a streamlined roleplaying system designed to be used in your next game. It offers a player facing dice pool mechanic thats easy for beginners and deep enough for veterans.",
  appearance: 'force-dark',
  base: '/limitlessrpg/',
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: false,
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Rules', link: '/getting-started/how-to-play' },
      { text: 'Character Sheet', link: '/limitlessrpg/LIMITLESS_CharacterSheet.pdf' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/getting-started/introduction' },
          { text: 'How to Play', link: '/getting-started/how-to-play' },
          { text: 'Character Sheet', link: '/limitlessrpg/LIMITLESS_CharacterSheet.pdf' },
        ]
      },
      {
        text: 'Rules',
        items: [
          { text: 'Core Mechanic', link: '/rules/core-mechanic' },
          { text: 'Character Stats', link: '/rules/stats' },
          { text: 'Character Creation', link: '/stamina-recovery-death' },
          { text: 'Advancement', link: '/rules/advancement' },
          { text: 'Magic', link: '/rules/magic' },
          { text: 'Equipment', link: '/rules/equipment' },
          { text: 'Combat', link: '/rules/combat' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JacobRex/limitlessrpg' }
    ]
  }
})
