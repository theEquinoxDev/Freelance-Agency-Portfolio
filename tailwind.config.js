/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4F46E5",
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
          800: "#3730A3",
          900: "#312E81",
          950: "#1F1C3F",
        },
        accent: {
          DEFAULT: "#F97316",
        },
        "dark-bg": "#0F172A",
      },
      boxShadow: {
        dope: "0 15px 40px rgba(79, 70, 229, 0.2)",
        card: "0 10px 25px rgba(0, 0, 0, 0.08)",
      },
    },
  },
}
