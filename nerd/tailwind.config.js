/** @type {import('tailwindcss').Config} */
module.exports = {
  // 🧠 Desativa a engine nativa (oxide) para evitar erros em Vite + Node 22+
  future: {
    oxide: false,
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Aqui você pode adicionar cores, fontes, espaçamentos personalizados, etc.
      colors: {
        primary: "#1D4ED8", // azul Tailwind
        secondary: "#9333EA", // roxo Tailwind
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    // Você pode adicionar plugins do Tailwind aqui, ex: forms, typography, etc.
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};
