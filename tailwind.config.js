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
          DEFAULT: "#1a1a1a",
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
        accent: {
          DEFAULT: "#404040",
        },
        "dark-bg": "#0a0a0a",
      },
      boxShadow: {
        dope: "0 10px 30px rgba(0, 0, 0, 0.15)",
        card: "0 4px 20px rgba(0, 0, 0, 0.08)",
      },
    },
  },
}
