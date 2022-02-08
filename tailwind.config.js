module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        darkGreen: "#009688",
      },
      animation: { "side-left": "animateleft 0.4s" },
      keyframes: {
        animateleft: {
          from: {
            left: "-300px",
            opacity: 0,
          },
          to: {
            left: 0,
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
