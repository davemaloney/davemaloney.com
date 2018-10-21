const passport = require('passport');
const session = require('express-session');

const secrets = require('./secrets');
const googleStrategy = require('./strategies/google.strategy');
const twitterStrategy = require('./strategies/twitter.strategy');
const facebookStrategy = require('./strategies/facebook.strategy');
const githubStrategy = require('./strategies/github.strategy');
const linkedinStrategy = require('./strategies/linkedin.strategy');

module.exports = (app) => {
  app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: secrets.sessionSecret,
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => done(null, user));

  passport.deserializeUser((user, done) => done(null, user));

  googleStrategy();
  twitterStrategy();
  facebookStrategy();
  githubStrategy();
  linkedinStrategy();
};
