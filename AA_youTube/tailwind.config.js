// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backColor: "#F0F2F5",
        theme: "#7150B7",
        themeHover: "#765cad",
        secTheme: "#3ca626",
        secHoverTheme: "#3eb227",
      },
    },
  },
  plugins: [],
};
