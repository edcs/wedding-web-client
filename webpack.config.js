require('dotenv').config();

const glob = require('glob');
const path = require('path');
const webpack = require('webpack');
const git = require('git-rev-sync');

const { BugsnagDeployPlugin, BugsnagSourceMapPlugin } = require('webpack-bugsnag-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const PurgecssPlugin = require('purgecss-webpack-plugin');

const config = {
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader',
          ],
        }),
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8000,
            name: 'images/[name].[hash].[ext]',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
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
  ],
  devServer: {
    historyApiFallback: true,
    host: 'localhost',
    hot: true,
    port: 8080,
  },
};

if (process.env.NODE_ENV === 'production') {
  config.devtool = 'source-map';

  config.entry = path.resolve(__dirname, 'src/index.jsx');

  config.plugins.push(
    new CleanWebpackPlugin(path.resolve(__dirname, 'dist')),
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      disable: false,
      allChunks: true,
    }),
    new webpack.optimize.AggressiveMergingPlugin({
      minSizeReduce: 1,
      moveToParents: true,
    }),
    new ImageminPlugin({
      plugins: [
        imageminMozjpeg({ quality: 50, progressive: true }),
      ],
    }),
    new PurgecssPlugin({
      paths: [
        ...glob.sync(`${path.join(__dirname, 'src')}/**/*.jsx`, { nodir: true }),
        ...glob.sync(`${path.join(__dirname, 'src')}/**/*.ejs`, { nodir: true }),
      ],
      extractors: [{
        extractor: class {
          static extract(content) {
            return content.match(/[A-z0-9-:/]+/g) || [];
          }
        },
        extensions: ['ejs', 'jsx'],
      }],
    }),
    new BugsnagDeployPlugin({
      apiKey: process.env.BUGSNAG_API_KEY,
      releaseStage: process.env.NODE_ENV,
      appVersion: git.short(),
    }),
    new BugsnagSourceMapPlugin({
      apiKey: process.env.BUGSNAG_API_KEY,
      publicPath: process.env.PUBLIC_PATH,
      appVersion: git.short(),
    }),
  );
} else {
  config.devtool = 'cheap-module-eval-source-map';

  config.entry = [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'src/index.jsx'),
  ];

  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
    new ExtractTextPlugin({ disable: true }),
    new PurgecssPlugin({
      paths: [
        ...glob.sync(`${path.join(__dirname, 'src')}/**/*.jsx`, { nodir: true }),
        ...glob.sync(`${path.join(__dirname, 'src')}/**/*.ejs`, { nodir: true }),
      ],
      extractors: [{
        extractor: class {
          static extract(content) {
            return content.match(/[A-z0-9-:/]+/g) || [];
          }
        },
        extensions: ['ejs', 'jsx'],
      }],
    }),
  );
}

module.exports = config;
