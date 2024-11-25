/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite/**/*.{js,ts}", // Ensure Flowbite files are included
  ],
  safelist: [
    {
      pattern: /^datatable-.*$/, // ensure it matches dynamic classes
    },
  ],
  theme: {
    extend: {
      backgroundImage: {
        login: "url('/assets/bgImages/bgLogin.png')",
      },
      maxWidth: {
        layout: "1226px",
      },
      maxWidth: {
        layout: "1226px",
      },
      colors: {
        whitePara: "#E3E3E3",
        darkPara: "#3F3F3F",
      },
    },
  },
  plugins: [
    require("flowbite/plugin")({
      charts: true,
    }),
    // ... other plugins
  ],
};
