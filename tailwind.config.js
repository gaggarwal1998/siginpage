/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.js"];
export const theme = {
  fontWeight: {
    thin: "100",
    hairline: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
  },
  fontFamily: {
    sans: ["Apercu Pro", "Helvetica Neue", "-apple-system", "sans-serif"],
    custom: ["Apercu Pro","sans-serif"],
    customlight:["Apercu Pro Light"],
    custommedium:["Apercu Pro Medium"],
    custombold:["Apercu Pro Bold"]

  },
  extend: {},
};
export const plugins = [];
