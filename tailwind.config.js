const tailwindcss = require("tailwindcss");

module.exports = {
  mode: "jit",
  purge: {
    enabled: true,
    content: ["./*.html"],
  },

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
