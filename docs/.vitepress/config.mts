import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Limitless",
  description: "Limitless is a streamlined roleplaying system designed to be used in your next game. It offers a player facing dice pool mechanic thats easy for beginners and deep enough for veterans.",
  appearance: 'force-dark',
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Rules', link: '/getting-started/how-to-play' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'How to Play', link: '/getting-started/how-to-play.md' },
          { text: 'Character Sheet', link: '/' },
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
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
