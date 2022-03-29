const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/components/**/*.js", "./pages/**/*.js"],
  theme: {
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".35em",
    },
    colors: {
      current: "currentColor",
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      indigo: colors.cyan,
    },
    screens: {
      fold: "268px",
      // => @media (min-width: 268px) { ... }

      xs: "320px",
      // => @media (min-width: 320px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
      serif: ["Merriweather", "serif"],
      // display: ["Dancing Script", "cursive"],
      // display: ["Amiri", "serif"],
      // display:['Lobster', "cursive"]
      display: ["Lobster Two", "cursive"],
      // display: ["Lora", "serif"],
      // display: ["Playfair Display", "serif"],
    },
    extend: {
      screens: {
        "3xl": "1600px",
      },
      width: {
        "30%": "30%",
        "101%": "101%",
        "106%": "106%",
        "110%": "110%",
        "160%": "160%",
        "206%": "206%",
        "321%": "321%",
        "30rem": "30rem",
        "45rem": "45rem",
        "41rem": "41rem",
        "28rem": "28rem",
        "140%": "140%",
        "422%": "422%",
        "524%": "524%",
      },
      height: {
        "17rem": "17rem",
        "37r": "37rem",
        "81%": "81%",
        "106%": "106%",
        "110%": "110%",
        "126%": "126%",
        "130%": "130%",
        "150%": "150%",
        "160%": "160%",
        "200%": "200%",
        "300%": "300%",
        "21rem": "21rem",
        "372px": "372px",
        "410px": "410px",
        "337px": "337px",
        "250px": "250px",
        "150vh": "150vh",
      },
      borderRadius: {
        "50%": "50%",
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};
