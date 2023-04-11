/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.(.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "figma-green-100": "#50B2C0",
      "figma-green-200": "#255D6A",
      "figma-green-300": "#0A313C",
      "figma-green-gradient": "#7FD1CC",
      "figma-purple-100": "#8381D9",
      "figma-purple-200": "#2A2879",
      "figma-purple-gradient": "#9694F5",
      "figma-gray-100": "#F8F9FC",
      "figma-gray-200": "#E6E8F2",
      "figma-gray-300": "#D1D6E4",
      "figma-gray-400": "#8D95AF",
      "figma-gray-500": "#303F73",
      "figma-gray-600": "#252D4A",
      "figma-gray-700": "#181C2A",
      "figma-gray-800": "#0E1116",
    },
  },
  plugins: [],
};
