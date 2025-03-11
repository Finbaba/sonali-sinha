/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],  // ✅ Yeh theek hai
  theme: {
    extend: {},
  },
  darkMode: "class", // ✅ "false" hata ke "class" ya "media" kar do
  plugins: [],
};

