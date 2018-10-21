const passport = require('passport');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const passportConfig = require('./config/passport');
const secrets = require('./config/secrets');
const User = require('./models/userModel');

const successPage = '/';
const errorPage = '/error';

module.exports = (app) => {
  mongoose.Promise = global.Promise;

  mongoose.connect(
    secrets.db,
    {
      // useMongoClient: true,
    }
  );

  passportConfig(app);

  function handleError(err, req, res, next) {
    if (!res.headersSent) {
      res.status(500);
      res.render('error', { error: err });
    }
    return next(err);
  }

  app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    );
    // Request headers you wish to allow
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-Requested-With,content-type, Authorization'
    );

    // Pass to next layer of middleware
    next();
  });

  app.use(bodyParser.json());

  app.get(
    '/auth/google/callback',
    passport.authenticate('google', {
      successRedirect: successPage,
      failure: errorPage,
    })
  );

  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
      ],
    })
  );

  app.get(
    '/auth/twitter/callback',
    passport.authenticate('twitter', {
      successRedirect: successPage,
      failure: errorPage,
    })
  );

  app.get('/auth/twitter', passport.authenticate('twitter'));

  app.get(
    '/auth/linkedin/callback',
    passport.authenticate('linkedin', {
      successRedirect: successPage,
      failure: errorPage,
    })
  );

  app.get('/auth/linkedin', passport.authenticate('linkedin'));

  app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: successPage,
      failure: errorPage,
    })
  );

  app.get(
    '/auth/facebook',
    passport.authenticate('facebook', {
      scope: ['email'],
    })
  );

  app.get(
    '/auth/github/callback',
    passport.authenticate('github', {
      successRedirect: successPage,
      failure: errorPage,
    })
  );

  app.get('/auth/github', passport.authenticate('github'));

  app.post('/auth/user', (req, res) => {
    if (req.user) {
      User.findOne({ email: req.user.email }, (err, user) => {
        if (err) return handleError(err);
        return res.send(user);
      });
    } else {
      const emptyObject = {};
      res.json(emptyObject);
    }
    return null;
  });

  app.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
};
