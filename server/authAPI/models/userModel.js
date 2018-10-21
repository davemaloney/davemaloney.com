const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  displayName: {
    type: String,
  },
  image: {
    type: String,
  },
  email: {
    type: String,
  },
  facebook: {
    type: Object,
  },
  twitter: {
    type: Object,
  },
  github: {
    type: Object,
  },
  linkedin: {
    type: Object,
  },
  google: {
    type: Object,
  },
});

module.exports = mongoose.model('User', UserSchema);
