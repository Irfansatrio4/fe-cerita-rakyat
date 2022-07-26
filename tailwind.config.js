module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter"],
        body: ["Open Sans"],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
