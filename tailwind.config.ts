module.exports = {
  plugins: [require("@tailwindcss/line-clamp")],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["--font-poppins", "sans-serif"],
      },
      colors: {
        "primary-heading": "#FFF",
        "secondary-heading": "rgba(255, 255, 255, 0.75)",
        background: "#010203",
      },
    },
  },
};
