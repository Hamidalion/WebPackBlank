var HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
  entry: './src/script.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html',
    minify: {
        collapseWhitespace: true,
    },
  })
  ],
  module: {
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
  ],
  },
};
