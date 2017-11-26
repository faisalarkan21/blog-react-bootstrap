const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: ['./index.js'], // entry point
  output: {
    filename: 'bundle.js', // place where bundled app will be served
  },
  devServer: {
    historyApiFallback: true,
    inline: true, // autorefresh
    port: 8080, // development port server
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new UglifyJSPlugin(),
    new webpack
      .optimize
      .AggressiveMergingPlugin(),
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
        loader: 'babel-loader',
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2016', 'stage-3', 'react'], // use es2016 and react
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
