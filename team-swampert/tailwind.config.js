module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#95E1D3",
        "custom-bg": "#EAFFD0",
        lime: "#EAFFD0",
        white: "#FFFFFF",
        mint: "#95E1D3",
      },
      backgroundImage: {
        // rice: "url('./src/Components/assets/blog-images/rice.svg')",
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
    },
  },
  plugins: [],
};
