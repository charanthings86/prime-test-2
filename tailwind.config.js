/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0A0C10',
          surface: '#11141C',
          card: '#161B26',
          cardHover: '#1D2331',
          border: '#242C3D',
          muted: '#8B92A5',
          text: '#F1F5F9',
        },
        light: {
          bg: '#F9F7F4',        /* strictly soft pastel warm beige, NEVER #FFFFFF */
          surface: '#F2EFEA',   /* subtle tinted card surface */
          card: '#EAE5DD',      /* soft contrasting card background */
          cardHover: '#E2DCD2',
          border: '#D5CFC3',
          muted: '#6B7280',
          text: '#1C2028',
        },
        silver: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#8B92A5', // primary requested accent tone
          600: '#6B7280', // primary requested accent tone
          700: '#4B5563',
          800: '#374151',
          900: '#1F2937',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        monoHeader: ['"Space Grotesk"', 'monospace'],
        display: ['"Syne"', 'sans-serif'],
        serifAgency: ['"Cormorant Garamond"', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
}

