/* eslint no-underscore-dangle: 0 */

const passport = require('passport');
const User = require('../../models/userModel');
const clientSecrets = require('../secrets');
const TwitterStrategy = require('passport-twitter').Strategy;

function passportTwitter() {
  passport.use(
    new TwitterStrategy(
      {
        consumerKey: clientSecrets.twitter.consumer_key,
        consumerSecret: clientSecrets.twitter.consumer_secret,
        callbackURL: clientSecrets.twitter.callback_url,
        passReqToCallback: true,
      },
      (req, token, tokenSecret, profile, done) => {
        const query = {
          'twitter.id': profile.id,
        };
        User.findOne(query, (error, user) => {
          if (user) {
            done(null, user);
          } else {
            const newUser = new User();
            newUser.displayName = profile.displayName;
            newUser.image = profile._json.profile_image_url;
            // newUser.email =

            newUser.twitter = {};
            newUser.twitter.id = profile.id;
            newUser.twitter.token = token;
            newUser.twitter.tokenSecret = tokenSecret;

            newUser.save();
            done(null, newUser);
          }
        });
      }
    )
  );
}

module.exports = passportTwitter;
