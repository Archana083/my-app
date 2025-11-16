/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "placeholder-subtle": "var(--Colors-Text-text-placeholder_subtle)",
        "brand-tertiary_alt": "var(--Colors-Text-text-brand-tertiary_alt)",
      },
    },
    fontSize: {
      "5xl": "3.5rem",
    },
    fontFamily: {
      mono: ["Inter", "monospace"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      md2: "960px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    backgroundImage: {
      "radial-custom":
        "radial-gradient(56.99% 56.99% at 50% 56.99%, #FF8000 0%, rgba(153, 77, 0, 0) 100%)",
    },
  },
  plugins: [],
};
