const path = require('path');
const webpack = require('webpack');
const packageJSON = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const { NODE_ENV = 'development' } = process.env;
const OPTIMIZATION = !!process.env.OPTIMIZATION;
const PUBLIC_PATH = process.env.PUBLIC_PATH || packageJSON.homepage;
const IS_VK = !!process.env.IS_VK;
const IS_DEVELOPMENT = NODE_ENV === 'development';

module.exports = {
  entry: [packageJSON.main],
  output: {
    filename: 'static/js/bundle.[hash].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: IS_DEVELOPMENT ? '/' : PUBLIC_PATH,
    chunkFilename: 'static/js/[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx']
  },
  mode: NODE_ENV,
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        phaser: {
          test: /phaser/,
          name: 'phaser',
          chunks: 'initial',
          minSize: 1,
          reuseExistingChunk: true
        },
        vendor: {
          test: /node_modules\/(?!phaser)/,
          name: 'vendor',
          chunks: 'initial',
          minSize: 1,
          reuseExistingChunk: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [
                'transform-class-properties',
                'syntax-dynamic-import',
                'transform-runtime'
              ],
              presets: [require.resolve('babel-preset-env')]
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|ogg|mp3|xml)$/,
        use: [
          {
            loader: require.resolve('file-loader'),
            options: {
              name: 'static/media/[path][name].[hash].[ext]'
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        removeComments: true,
        removeEmptyAttributes: true
      },
      template: 'public/index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
      'process.env.OPTIMIZATION': JSON.stringify(OPTIMIZATION),
      'process.env.IS_VK': JSON.stringify(IS_VK)
    }),
    new CleanWebpackPlugin(['build']),
    new CopyWebpackPlugin([{ from: 'public' }])
  ],
  devServer: {
    compress: true,
    port: 3000,
    historyApiFallback: {
      disableDotRule: true,
    }
  }
};
