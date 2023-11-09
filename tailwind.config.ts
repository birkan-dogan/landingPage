/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        spin: "spin 20s linear infinite",
      },
    },
    screens: {
      "3xs": "150px",

      "2xs": "280px",

      "2xx": "310px",

      sxx: "350px",

      xxs: "400px",

      xr: "460px",

      xs: "500px",
      // => @media( min-width: 640px) {...}\

      xrs: "550px",

      sx: "600px",

      sm: "640px",
      // => @media( min-width: 640px) {...}

      sr: "700px",

      md: "768px",
      // => @media (min-width: 768px) {...}

      mid: "800px",

      mr: "890px",

      le: "950px",

      lgg: "1000px",

      lg: "1028px",
      // => @media (min-width: 1028px) {...}

      lgr: "1090px",

      lr: "1150px",

      xlr: "1200px",

      xl: "1280px",
      // => @media (min-width: 1280px) {...}

      xxl: "1320px",

      xxxl: "1365px",

      xxxxl: "1462px",

      "2xl": "1600px",
      // => @media (min-width: 1280px) {...}

      "3xl": "1800px",
      // => @media (min-width: 1280px) {...}
      "4xl": "2000px",
      // => @media (min-width: 1280px) {...}
    },
  },
  plugins: [],
};
