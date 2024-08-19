/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pureBlack: "hsl(0, 0%, 0%)",
        lightGrey: "hsl(0, 0%, 87%)",
        pureWhite: "hsl(0, 0%, 100%)",
        cardBg: "rgba(245, 245, 245)",
        modal: "rgba(0, 0, 0, 0.5)",
        gradientBlackStart: "rgba(0, 0, 0, 0.0001)",
        gradientBlackEnd: "rgba(0, 0, 0, 0.661222)",
        gradient:
          "linear-gradient(to top right, hsl(28, 100%, 79%) 0%, hsl(329, 36%, 59%) 43%, hsl(229, 100%, 67%) 83%)",
      },
      backgroundImage: {
        "overlay-gradient":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.0001), rgba(0, 0, 0, 0.95))",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".custom-list-gap": {
          gap: "clamp(0.75rem, 3vw, 4rem)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
