module.exports = {
  content: [
    './src/index.html', 
    "./node_modules/flowbite/**/*.js"
    // Adjust this based on where your files are located
  ],
  theme: {
    extend: {
      screens:{
      
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}