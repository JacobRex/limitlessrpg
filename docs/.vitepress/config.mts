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
      { text: 'How to Play', link: '/getting-started/core-mechanic' },
      { text: 'Rules', link: '/rules/stats' },
      { text: 'Character Sheet', link: '/limitlessrpg/CharacterSheet.pdf' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'How to Play', link: '/getting-started/core-mechanic' },
          { text: 'Character Sheet', link: '/limitlessrpg/CharacterSheet.pdf' },
        ]
      },
      {
        text: 'Rules',
        items: [
          { text: 'Character Stats', link: '/rules/stats' },
          { text: 'Character Creation', link: '/rules/character-creation' },
          { text: 'Damage & Recovery', link: '/rules/damage-and-recovery' },
          { text: 'Advancement', link: '/rules/advancement' },
          { text: 'Magic', link: '/rules/magic' },
          { text: 'Equipment', link: '/rules/equipment' },
          { text: 'Combat', link: '/rules/combat' },
        ]
      },
      {
        text: 'Examples of Play',
        items: [
          { text: 'Example of Combat', link: '/examples/combat' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JacobRex/limitlessrpg' }
    ]
  }
})
