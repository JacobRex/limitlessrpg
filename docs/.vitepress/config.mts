import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Limitless",
  description: "Limitless is a streamlined roleplaying system designed to be used in your next game. It offers a player facing dice pool mechanic thats easy for beginners and deep enough for veterans.",
  appearance: 'force-dark',
  base: '/limitlessrpg/',
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    siteTitle: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Rules', link: '/getting-started/core-mechanic' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'How to Play', link: '/getting-started/core-mechanic.md' },
          { text: 'Character Sheet', link: '/limitlessrpg/CharacterSheet.pdf' },
        ]
      },
      {
        text: 'Rules',
        items: [
          { text: 'Character Stats', link: '/rules/stats.md' },
          { text: 'Character Creation', link: '/rules/character-creation.md' },
          { text: 'Damage & Recovery', link: '/rules/damage-and-recovery.md' },
          { text: 'Advancement', link: '/rules/advancement.md' },
          { text: 'Magic', link: '/rules/magic.md' },
          { text: 'Equipment', link: '/rules/equipment.md' },
          { text: 'Combat', link: '/rules/combat.md' },
        ]
      },
      {
        text: 'Examples of Play',
        items: [
          { text: 'Example of Combat', link: '/examples/combat.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JacobRex/limitlessrpg' }
    ]
  }
})
