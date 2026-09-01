/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050810',
          900: '#0A1420',
          800: '#0F1D2E',
          700: '#16293D',
        },
        gold: {
          200: '#F3E3B8',
          300: '#E8C468',
          400: '#D9AF52',
          500: '#C89B3C',
          600: '#A87F2E',
        },
        silver: {
          200: '#EAF0F5',
          300: '#CBD6E0',
          400: '#9FB0C1',
          500: '#7C8CA0',
        },
      },
      fontFamily: {
        display: ['"Cairo"', 'sans-serif'],
        body: ['"IBM Plex Sans Arabic"', 'sans-serif'],
      },
      backgroundImage: {
        'gold-foil': 'linear-gradient(135deg, #F3E3B8 0%, #E8C468 28%, #C89B3C 55%, #E8C468 78%, #F3E3B8 100%)',
        'silver-foil': 'linear-gradient(135deg, #EAF0F5 0%, #CBD6E0 35%, #9FB0C1 60%, #CBD6E0 82%, #EAF0F5 100%)',
      },
    },
  },
  plugins: [],
}
