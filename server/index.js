/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');

const argv = require('minimist')(process.argv.slice(2));
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
const app = express();
const mongodb = require('mongodb');
const api = require('./api/index');
const keys = require('../keys.js');

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

let db;

const dbUrl = process.env.NODE_ENV === 'production' ?
  `mongodb://${keys.username}:${keys.password}@ds137891.mlab.com:37891/fcc-bookclub`
  :
  'mongodb://localhost:27017/bookClub';

mongodb
  .MongoClient
  .connect(dbUrl, (err, connection) => {
    if (err) {
      console.log('connection err');  //eslint-disable-line
    } else {
      console.log('connected'); //eslint-disable-line
      db = connection;
    }
  });

const exposeDb = (req, res, next) => {
  req.db = db; //eslint-disable-line
  next();
};

app.use('/api', exposeDb, api);


// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

const port = argv.port || process.env.PORT || 3000;

// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, prettyHost, url);
    });
  } else {
    logger.appStarted(port, prettyHost);
  }
});
