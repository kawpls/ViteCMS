import plugin, { Mode } from "vite-plugin-markdown";

module.exports = {
  plugins: [plugin({ mode: "html" })],
};
