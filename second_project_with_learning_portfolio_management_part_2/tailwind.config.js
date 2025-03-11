/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./portfolio_blog/templates/**/*.html", // Templates folder ke saare HTML files
    "./portfolio_blog/**/*.py", // Django views ya components me Tailwind ka use
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

