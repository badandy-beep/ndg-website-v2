/* © 2025 Noetic Dharma Group, LLC | www.noeticdharma.com | CONFIDENTIAL & PROPRIETARY | Unauthorized use prohibited */
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ndg-black': '#0E0E11',
        'ndg-bone': '#F2F2EE',
        'ndg-muted': 'rgba(242,242,238,0.65)',
        'ndg-subtle': 'rgba(242,242,238,0.75)',
        'ndg-hairline': 'rgba(242,242,238,0.12)',
      },
      fontFamily: {
        canela: ['var(--font-canela)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(44px, 8vw, 88px)', { lineHeight: '1.05' }],
        'h1': ['clamp(36px, 6vw, 64px)', { lineHeight: '1.1' }],
        'h2': ['clamp(26px, 4vw, 44px)', { lineHeight: '1.15' }],
        'body': ['clamp(16px, 1.5vw, 20px)', { lineHeight: '1.6' }],
        'small': ['clamp(13px, 1.2vw, 15px)', { lineHeight: '1.5' }],
      },
      spacing: {
        'section-desktop': '120px',
        'section-tablet': '84px',
        'section-mobile': '64px',
      },
      maxWidth: {
        'content': '1200px',
        'prose': '760px',
      },
    },
  },
  plugins: [],
}
export default config
