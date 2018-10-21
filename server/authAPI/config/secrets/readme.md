# Secrets

## Google
<https://console.developers.google.com/apis/dashboard>

## Twitter
<https://apps.twitter.com/>

## Facebook
<https://developers.facebook.com/apps/>

## Github
<https://github.com/settings/developers>

## LinkedIn
<https://www.linkedin.com/developer/apps>

`secrets/index.js`
```
const secrets = {
  "google": {
    "client_id":"111111111111-aaaaa1aaa1aaa1aa1aaa1aa1aaa1aaa1.apps.googleusercontent.com",
    "project_id":"aaaaaaaaa-111111",
    "auth_uri":"https://accounts.google.com/o/oauth2/auth",
    "token_uri":"https://accounts.google.com/o/oauth2/token",
    "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
    "client_secret":"aaaaaaaaaaaaaaaaaa1a-a-a",
    "redirect_uris":["http://##############/auth/google/callback"]
  },
  "twitter": {
    "consumer_key":"a1a1a1a1a1a1a1a1a1a1a1a1a",
    "consumer_secret":"a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1",
    "owner":"aaaaaaaaaaaaa",
    "owner_id":"11111111",
    "callback_url":"http://##############/auth/twitter/callback",
    "App-only_authentication":"https://api.twitter.com/oauth2/token",
    "Request_token_URL":"https://api.twitter.com/oauth/request_token",
    "Authorize_URL":"https://api.twitter.com/oauth/authorize",
    "Access_token_URL":"https://api.twitter.com/oauth/access_token"
  },
  "facebook": {
    "app_id":"111111111111111",
    "app_secret":"a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1",
    "callback_url":"http://##############/auth/facebook/callback",
  },
  "github": {
    "client_id":"a1a1a1a1a1a1a1a1a1a1",
    "client_secret":"a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1",
    "callback_url":"http://##############/auth/github/callback"
  },
  "linkedin": {
    "client_id":"a1a1a1a1a1a1a1a1a1a1",
    "client_secret":"a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1",
    "callback_url":"http://##############/auth/linkedin/callback"
  },
  "sessionSecret": "A1A1A1A1A1A1A1A1A1A1A1A1",
  "db": "mongodb://path/to/database"
}

module.exports = secrets;

```

