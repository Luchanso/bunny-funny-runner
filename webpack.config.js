const path = require('path');
const webpack = require('webpack');
const packageJSON = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// const phaserModulePath = path.join(__dirname, '/node_modules/phaser/');
const { NODE_ENV = 'development' } = process.env;
const OPTIMIZATION = !!process.env.OPTIMIZATION;
const IS_VK = !!process.env.IS_VK;

module.exports = {
  entry: [packageJSON.main],
  output: {
    filename: 'static/js/bundle.[hash].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
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
          require.resolve('thread-loader'),
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
              name: '[path][name].[hash].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // Makes some environment variables available in index.html.
    // The public URL is available as %PUBLIC_URL% in index.html, e.g.:
    // <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    // In development, this will be an empty string.
    // new InterpolateHtmlPlugin(env.raw),
    // Generates an `index.html` file with the <script> injected.
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
    // Add module names to factory functions so they appear in browser profiler.
    new webpack.NamedModulesPlugin(),
    // Makes some environment variables available to the JS code, for example:
    // if (process.env.NODE_ENV === 'development') { ... }. See `./env.js`.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
      'process.env.OPTIMIZATION': JSON.stringify(OPTIMIZATION),
      'process.env.IS_VK': JSON.stringify(IS_VK)
    }),
    new CleanWebpackPlugin(['build'])
  ],
  devServer: {
    compress: true,
    port: 3000,
    historyApiFallback: {
      disableDotRule: true,
    }
  }
};
