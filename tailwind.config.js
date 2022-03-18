// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
module.exports = {
  content: ["./src/components/**/*.js", "./pages/**/*.js"],
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      display: ["Dancing Script", "cursive"],
    },
    extend: {
      width: {
        "30%": "30%",
        "206%": "206%",
        "321%": "321%",
        "30rem": "30rem",
        "45rem": "45rem",
        "41rem": "41rem",
        "28rem": "28rem",
        "140%": "140%",
      },
      height: {
        "150%": "150%",
        "21rem": "21rem",
        "372px": "372px",
        "410px": "410px",
        "337px": "337px",
        "250px": "250px",
      },
      borderRadius: {
        "50%": "50%",
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};
