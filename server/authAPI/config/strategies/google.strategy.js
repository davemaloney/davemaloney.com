/* eslint no-underscore-dangle: 0 */

const passport = require('passport');
const User = require('../../models/userModel');
const clientSecrets = require('../secrets');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

function passportGoogle() {
  passport.use(
    new GoogleStrategy(
      {
        clientID: clientSecrets.google.client_id,
        clientSecret: clientSecrets.google.client_secret,
        callbackURL: clientSecrets.google.redirect_uris[0],
      },
      (req, accessToken, refreshToken, profile, done) => {
        const query = {
          'google.id': profile.id,
        };
        User.findOne(query, (error, user) => {
          if (user) {
            done(null, user);
          } else {
            const newUser = new User();
            newUser.displayName = profile.displayName;
            newUser.image = profile._json.image.url;
            newUser.email = profile.emails[0].value;

            newUser.google = {};
            newUser.google.id = profile.id;
            newUser.google.token = accessToken;

            newUser.save();
            done(null, newUser);
          }
        });
      }
    )
  );
}

module.exports = passportGoogle;
