const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
  devtool: 'source-map', // for display source map in browser
  entry: ['babel-polyfill', './index.js'], // entry point
  output: {
    filename: 'bundle.js', // place where bundled app will be served
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    inline: true, // autorefresh
    port: 8080, // development port server
    overlay: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'public/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js?$/, // search for js files
        exclude: /node_modules(?!\/webpack-dev-server)/,

        use: {
          loader: 'babel-loader',

          options: {
            babelrc: false,
            presets: [
              ['@babel/preset-env'],
              ['@babel/preset-stage-2'],
              ['@babel/preset-react', { development: true }],

            ],
            plugins: ['transform-decorators-legacy'],
          },
        },
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }, {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      }, {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader', // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
        }],

      },
    ],
  },
};

module.exports = config;
