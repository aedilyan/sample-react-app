import express from 'express'
import webpack from 'webpack'
import open from 'open'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../webpack.dev.config.js'

const app = express(),
  compiler = webpack(config);

config.entry.main.unshift('webpack-hot-middleware/client?reload=true&timeout=1000');

//Add HMR plugin
config.plugins.push(new webpack.HotModuleReplacementPlugin());

//Enable "webpack-dev-middleware"
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

//Enable "webpack-hot-middleware"
app.use(webpackHotMiddleware(compiler));

app.use(express.static('./public'));

app.get('*', function (req, res) {
  res.sendFile('index.html', { root: 'public' });
});

const PORT = process.env.PORT || 8080

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`App listening to ${PORT} ...`);
    console.log('Press Ctrl+C to quit.');
    open(`http://localhost:${PORT}`);
  }
})
