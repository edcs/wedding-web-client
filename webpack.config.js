const glob = require('glob');
const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const PurifyCssPlugin = require('purifycss-webpack');

const config = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'src/index.jsx'),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          { loader: 'postcss-loader' },
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8000,
            name: 'images/[name].[ext]',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      cache: true,
      minify: {
        html5: true,
        removeComments: true,
        collapseWhitespace: true,
      },
      template: path.resolve(__dirname, 'src/templates/index.ejs'),
    }),
    new PurifyCssPlugin({
      paths: glob.sync(path.join(__dirname, 'src/*.jsx')),
    }),
  ],
  devServer: {
    historyApiFallback: true,
    host: 'localhost',
    hot: true,
    port: 8080,
  },
};

module.exports = config;
