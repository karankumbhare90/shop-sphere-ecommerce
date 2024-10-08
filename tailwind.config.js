/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-light': 'rgba(149, 157, 165, 0.3) 0px 8px 24px',  // Light shadow
        'custom-heavy': 'rgba(0, 0, 0, 0.5) 0px 1px 4px',  // Heavy shadow
        'custom-inset': 'rgba(0, 0, 0, 0.1) 0px 4px 12px',  // Inset shadow
      },
      colors: {
        "primary": "#F3FAE1",
        "secondary": "",
        "background-1": "#F3FAE1",

      }
    },
  },
  plugins: [],
}