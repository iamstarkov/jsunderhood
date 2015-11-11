import { join } from 'path';
import webpack from 'webpack';

// constants
const CWD = process.cwd();
const DEBUG = process.env.NODE_ENV !== 'production';
const DEST = 'dist';

// variables
const entry = [];
const loaders = [];
const plugins = [];

// entry points
entry.push('./js');

loaders.push({
  test: /\.js$/,
  exclude: /node_modules/,
  loaders: ['babel-loader'],
});

loaders.push({
  test: /\.json$/,
  loaders: ['json-loader'],
});

// plugins
plugins.push(new webpack.optimize.OccurenceOrderPlugin());
plugins.push(new webpack.optimize.DedupePlugin());
plugins.push(new webpack.ContextReplacementPlugin(/moment\/locale$/, /ru/));
if (!DEBUG) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false },
  }));
  plugins.push(new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify('production') },
  }));
  plugins.push(new webpack.NoErrorsPlugin());
}

// configuration
module.exports = {
  entry,
  cache: DEBUG,
  debug: DEBUG,
  devtool: DEBUG ? 'source-map' : 'hidden-source-map',
  output: {
    path: join(CWD, DEST),
    publicPath: '/',
    filename: 'app.js',
    pathinfo: DEBUG,
  },
  module: { loaders },
  plugins,
};
