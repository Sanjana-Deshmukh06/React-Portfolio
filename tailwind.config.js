/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hero.jpg')",
      },
      // Adding keyframes and animation inside the extend object correctly
      keyframes: {
        gradientFloat: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        arrowAnimation: {
          "0%": {
            
            width: "0%", // Arrow starts with no width
            transform: "rotate(180deg)", // Start with default rotation
          },
          "100%": {
            width: "100%", // Arrow reaches full width
            transform: "rotate(10deg)", // Arrow rotates 180 degrees to point downwards
          },
        },
      },
      animation: {
        gradientFloat: "gradientFloat 5s infinite linear",
        fadeIn: "fadeIn 1s ease-out",
        arrowAnimation: "arrowAnimation 1.5s ease-in-out infinite", // Apply the animation with a duration and easing

      },
      transitionProperty: {
        transform: "transform", // Adding transition for transform property (heart icon scale)
      },
    },
  },
  plugins: [],
};
