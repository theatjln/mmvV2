// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
module.exports = {
  purge: ["./src/components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      width: {
        "30%": "30%",
        "206%": "206%",
      },
      height: {
        "150%": "150%",
      },
      borderRadius: {
        "50%": "50%",
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};
