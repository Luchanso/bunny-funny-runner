const path = require('path');
const webpack = require('webpack');
const packageJSON = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function ensureSlash(pathUrl, needsSlash) {
  const hasSlash = pathUrl.endsWith('/');
  if (hasSlash && !needsSlash) {
    return pathUrl.substr(pathUrl, pathUrl.length - 1);
  } else if (!hasSlash && needsSlash) {
    return `${pathUrl}/`;
  }

  return pathUrl;
}

const { NODE_ENV = 'development' } = process.env;
const OPTIMIZATION = !!process.env.OPTIMIZATION;
const IS_VK = !!process.env.IS_VK;
const IS_DEVELOPMENT = NODE_ENV === 'development';
const rowPath =
  process.env.PUBLIC_PATH || (IS_DEVELOPMENT ? '/' : packageJSON.homepage);
const PUBLIC_PATH = ensureSlash(rowPath, true);
const devtool = IS_DEVELOPMENT ? 'cheap-module-source-map' : false;

const htmlWebpackPluginOptions = {
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
};

module.exports = {
  entry: [packageJSON.main],
  output: {
    filename: 'static/js/bundle.[hash].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: PUBLIC_PATH,
    chunkFilename: 'static/js/[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx']
  },
  mode: NODE_ENV,
  devtool,
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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(htmlWebpackPluginOptions),
    new HtmlWebpackPlugin({
      ...htmlWebpackPluginOptions,
      filename: '404.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
      'process.env.OPTIMIZATION': JSON.stringify(OPTIMIZATION),
      'process.env.PUBLIC_PATH': JSON.stringify(PUBLIC_PATH),
      'process.env.IS_VK': JSON.stringify(IS_VK)
    }),
    new CleanWebpackPlugin(['build']),
    new CopyWebpackPlugin([{ from: 'public' }])
  ],
  devServer: {
    compress: true,
    port: 3000,
    historyApiFallback: {
      disableDotRule: true
    }
  }
};
