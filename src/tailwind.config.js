// tailwind.config.js
module.exports = {
  content: ["./src/**/*.html"], // or more paths if needed
  theme: {
    extend: {
      screens: {
        xs: "735px", // ✅ Custom breakpoint at 440px
      },
    },
  },
  plugins: [],
};
