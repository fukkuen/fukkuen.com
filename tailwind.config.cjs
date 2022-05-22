module.exports = {
  content: ['.svelte'],
  theme: {
    extend: {},
  },
  plugins: [],
  mode: 'jit', // ⚠ Make sure to have this
  purge: ["./src/**/*.svelte"]
}
