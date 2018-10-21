/* eslint no-underscore-dangle: 0 */

const passport = require('passport');
const User = require('../../models/userModel');
const clientSecrets = require('../secrets');
const GithubStrategy = require('passport-github').Strategy;

function passportGithub() {
  passport.use(
    new GithubStrategy(
      {
        clientID: clientSecrets.github.client_id,
        clientSecret: clientSecrets.github.client_secret,
        callbackURL: clientSecrets.github.callback_url,
      },
      (req, accessToken, refreshToken, profile, done) => {
        const query = {
          'github.id': profile.id,
        };
        User.findOne(query, (error, user) => {
          if (user) {
            done(null, user);
          } else {
            const newUser = new User();
            newUser.displayName = profile.displayName;
            newUser.image = profile._json.avatar_url;
            // newUser.email =

            newUser.github = {};
            newUser.github.id = profile.id;
            newUser.github.token = accessToken;

            newUser.save();
            done(null, newUser);
          }
        });
      }
    )
  );
}

module.exports = passportGithub;
