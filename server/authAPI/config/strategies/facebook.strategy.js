/* eslint no-underscore-dangle: 0 */

const passport = require('passport');
const User = require('../../models/userModel');
const clientSecrets = require('../secrets');
const FacebookStrategy = require('passport-facebook').Strategy;

function passportFacebook() {
  passport.use(
    new FacebookStrategy(
      {
        clientID: clientSecrets.facebook.app_id,
        clientSecret: clientSecrets.facebook.app_secret,
        callbackURL: clientSecrets.facebook.callback_url,
        passReqToCallback: true,
        profileFields: ['id', 'email', 'displayName'],
        profileURL: 'https://graph.facebook.com/v2.10/me',
        authorizationURL: 'https://www.facebook.com/v2.10/dialog/oauth',
        tokenURL: 'https://graph.facebook.com/v2.10/oauth/access_token',
      },
      (req, accessToken, refreshToken, profile, done) => {
        const query = {
          'facebook.id': profile.id,
        };
        User.findOne(query, (error, user) => {
          if (user) {
            done(null, user);
          } else {
            const newUser = new User();
            newUser.displayName = profile.displayName;
            // newUser.image = profile.photos[0].value;
            newUser.email = profile._json.email;

            newUser.facebook = {};
            newUser.facebook.id = profile.id;
            newUser.facebook.token = accessToken;

            newUser.save();
            done(null, newUser);
          }
        });
      }
    )
  );
}

module.exports = passportFacebook;
