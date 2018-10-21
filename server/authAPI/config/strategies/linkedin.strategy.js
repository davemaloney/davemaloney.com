/* eslint no-underscore-dangle: 0 */

const passport = require('passport');
const User = require('../../models/userModel');
const clientSecrets = require('../secrets');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

function passportLinkedIn() {
  passport.use(
    new LinkedInStrategy(
      {
        clientID: clientSecrets.linkedin.client_id,
        clientSecret: clientSecrets.linkedin.client_secret,
        callbackURL: clientSecrets.linkedin.callback_url,
        scope: ['r_emailaddress', 'r_basicprofile'],
        state: true,
      },
      (req, accessToken, refreshToken, profile, done) => {
        const query = {
          'linkedin.id': profile.id,
        };
        User.findOne(query, (error, user) => {
          if (user) {
            done(null, user);
          } else {
            const newUser = new User();
            newUser.displayName = profile.displayName;
            newUser.image = profile._json.pictureUrl;
            newUser.email = profile._json.emailAddress;

            newUser.linkedin = {};
            newUser.linkedin.id = profile.id;
            newUser.linkedin.token = accessToken;

            newUser.save();
            done(null, newUser);
          }
        });
      }
    )
  );
}

module.exports = passportLinkedIn;
