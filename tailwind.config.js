/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Couleurs principales
        primary: "#00c6ff		",
        secondary: "#0072ff",

        // Couleurs de texte
        textPrimary: "#0A0C17",
        textSecondary: "#666666",

        // Autres couleurs
      },
    },
  },
  plugins: [],
};
