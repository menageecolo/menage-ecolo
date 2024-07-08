// rgb(218,28,92)
// #133b6e
// hsl(340, 77%, 48%)
// rgb(16, 185, 129)

module.exports = {
  content: ['./src/**/*.svelte'],
  theme: {
    extend: {
      colors: {
        "brand-blue-second": "#133b6e",
        "brand-blue-primary": "#3695cb",
        // ....................
        "brand-primary": "#fcbb09",
        // ....................
        "brand-coffee": "#cb6c36",
        // .....................
        "brand-white": "#f5f5f5",
        "brand-white-light": "#f0f0f0",
        // .....................
        "brand-black": "#212121",
        
      },
    },
  },
  // variants: {
  //   extend: {},
  // },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
}