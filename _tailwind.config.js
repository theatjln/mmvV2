module.exports = {
  content: ["./src/components/**/*.js", "./pages/**/*.js"],
  theme: {
    screens: {
      xs: "270px",
      // => @media (min-width: 640px) { ... }

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
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      display: ["Dancing Script", "cursive"],
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
      },
      height: {
        "17rem": "17rem",
        "106%": "106%",
        "110%": "110%",
        "126%": "126%",
        "130%": "130%",
        "150%": "150%",
        "160%": "160%",
        "200%": "200%",
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
