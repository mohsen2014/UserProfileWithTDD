module.exports = {
  context: __dirname + '/',
  entry: './app.js',
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  watch: true
}
