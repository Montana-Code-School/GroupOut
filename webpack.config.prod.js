var path = require('path');
var webpack = require('webpack');
module.exports = {
  devtool: 'source-map',
  entry: {
  main:[
   './client/goEventApp'
 ],
  form:[
   './client/formApp'
 ],
 profile: [
  './client/profileApp'
 ],
 goeventview:[
  './client/goEventViewApp'
 ]
 },
 output: {
   path: path.join(__dirname, 'static'),
   filename: '[name].js',
   publicPath: '/static/'
 },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: ['babel'] , 
      query: { 
        presets: ['es2015', 'react']
      },
      include: path.join(__dirname, 'client')
    }]
  }
};