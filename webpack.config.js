const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const noop = () => {}
// simple DSL to allow writing simple switch: `dev('dev setting').prod('prod setting')`
const dev = (dev) => {
  return {
    prod: (prod) => {
      if (process.env.NODE_ENV === 'production') {
        return prod
      } else {
        return dev
      }
    }
  }
}

const webpackPort = 8080

const settings = {
  entry: {
    test: [
      dev('react-hot-loader/patch').prod('./src/main/react/util/ProductionInit.js'),
      'babel-polyfill',
      './src/main/react/index.js'
    ]
  },
  output: {
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    publicPath: dev(`http://localhost:${webpackPort}/asset/`).prod('/asset/'),
    path: path.resolve('src/main/webapp/asset')
  },
  resolve: {
    extensions: ['.js', '.json', '.css'],
    modules: [
      'node_modules',
      'src/main/react', // allows importing modules using absolute path, @see https://goo.gl/luH0Xa
    ]
  },
  devtool: 'source-map', // this emits sources while development making it easier to debug
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', { modules: false }],
            'stage-1',
            'react'
          ],
          plugins: [
            'transform-node-env-inline',
            'jsx-control-statements',
            'transform-dirname-filename',
            'idx', // http://facebook.github.io/react-native/blog/2017/03/13/idx-the-existential-function.html
          ],
          env: {
            development: {
              plugins: ['react-hot-loader/babel']
            }
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: dev('[name]--[local]--[hash:base64:5]').prod('[hash:base64]')
            }
          },
          'postcss-loader' // has separate PostCSS config nearby
        ]
      },
    ]
  },
  devServer: {
    contentBase: path.resolve('src/main/webapp'),
    publicPath: `http://localhost:${webpackPort}/asset/`, // full URL is necessary for Hot Module Replacement.
    quiet: false,
    hot: true,
    historyApiFallback: true,
    inline: true
  },
  plugins: [
    dev(new webpack.HotModuleReplacementPlugin()).prod(noop),
    dev(new webpack.NamedModulesPlugin()).prod(noop),
    new ExtractTextPlugin('styles.css')
  ]
};

//process.stdout.write(JSON.stringify(settings, null, '  '));

module.exports = settings;
