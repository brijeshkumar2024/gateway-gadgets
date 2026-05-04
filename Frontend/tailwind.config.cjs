/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4b1b78',
        accent: '#7c3aed',
        muted: '#6b7280',
        surface: '#ffffff',
        glass: 'rgba(255,255,255,0.06)'
      },
      fontFamily: {
        display: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'soft-lg': '0 10px 30px rgba(16,24,40,0.08)'
      }
    }
  },
  plugins: []
}
