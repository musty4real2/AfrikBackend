/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Add Inter font family
      },
      colors: {
        foundationText: "#555C6A",
        secondaryColor: "#E84F09",
        primaryColor: "#E6EEFD",
        orangeColor: "#FF570A",
        headerBg: "#FAFEF0",
        primaryText: "var(--Primary-50, #E6EEFD)",
        foundationText50: "var(--Foundation-Text-text-50, #E6E7E9)",
      },
    },
  },
  plugins: [],
};
