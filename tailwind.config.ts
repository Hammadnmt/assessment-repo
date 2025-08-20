module.exports = {
  plugins: [require("@tailwindcss/line-clamp")],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        geist: ["var(--font-geist-sans)", "sans-serif"],
        geistMono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        "primary-heading": "#FFF",
        "secondary-heading": "rgba(255, 255, 255, 0.75)",
        background: "#010203",
      },
    },
  },
};
