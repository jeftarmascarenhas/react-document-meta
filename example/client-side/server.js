var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
	contentBase: __dirname,
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(9001, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:9001');
});