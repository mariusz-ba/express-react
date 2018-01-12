// Module dependencies
import express from 'express';
import path from 'path';
import sass from 'node-sass-middleware';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev.js';

const app = express();


// Configuration
app.disable('x-powered-by');
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);


// Middleware
app.use(webpackMiddleware(webpack(webpackConfig)));
app.use(sass({
  src: path.join(__dirname, 'src/sass'),
  dest: path.join(__dirname, 'public/css'),
  debug: true,
  outputStyle: 'compressed',
  prefix: '/css'
}));
app.use(express.static(path.join(__dirname, 'public')));


// Test route
app.get('/test', (req, res) => {
  res.json({ message: 'test' });
})


// Main
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});


// Export app
module.exports = app.listen(
  app.get('port'),
  () => console.log(`Running on localhost:${app.get('port')}`)
);
