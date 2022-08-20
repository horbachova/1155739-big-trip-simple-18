const path = require("path");
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  devtool: 'sourse.map',
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'public'}],
    }),
  ],
};
