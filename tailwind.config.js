module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        slidein: "slidein 30s linear infinite",
      },
      keyframes: {
        slidein: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
