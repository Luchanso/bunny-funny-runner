const path = require('path');
const webpack = require('webpack');
const packageJSON = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// const phaserModulePath = path.join(__dirname, '/node_modules/phaser/');
const { NODE_ENV = 'development' } = process.env;
const OPTIMIZATION = !!process.env.OPTIMIZATION || false;

module.exports = {
  entry: [packageJSON.main],
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'build'),
    chunkFilename: '[name].[hash].js',
  },
  mode: NODE_ENV,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              'transform-class-properties',
              'syntax-dynamic-import',
              'transform-runtime'
            ],
            presets: ['babel-preset-env']
          }
        }
      },
      {
        test: /\.(png|jpg|gif|ogg|mp3|xml)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[hash].[ext]'
            }
          }
        ]
      },
      // {
      //   test: require.resolve(path.join(phaserModulePath, 'build/custom/pixi.js')),
      //   use: [{
      //     loader: 'expose-loader',
      //     options: 'PIXI'
      //   }]
      // },
      // { test: /phaser-split\.js$/, loader: 'expose-loader?Phaser' },
      // { test: /p2\.js/, loader: 'expose-loader?p2' },
    ],
  },
  // resolve: {
  //     alias: {
  //       'phaser': path.join(phaserModulePath, 'build/custom/phaser-split.js'),
  //       'pixi': path.join(phaserModulePath, 'build/custom/pixi.js'),
  //       'p2': path.join(phaserModulePath, 'build/custom/p2.js')
  //     }
  // },
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
        removeEmptyAttributes: true,
      },
      template: './public/index.html'
    }),
    // Add module names to factory functions so they appear in browser profiler.
    new webpack.NamedModulesPlugin(),
    // Makes some environment variables available to the JS code, for example:
    // if (process.env.NODE_ENV === 'development') { ... }. See `./env.js`.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
      'process.env.OPTIMIZATION': JSON.stringify(OPTIMIZATION)
    }),
    new CleanWebpackPlugin(['build']),
  ],
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 3000
  }
};
