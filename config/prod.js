// prod.js - production keys here
// should not be committed

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret:process.env.GOOGLE_CLIENT_SECRET,
  mongoURI:process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY
};
//mongodb+srv://prodbase:prodbase@emaily-prod-pvktq.mongodb.net/test?retryWrites=true
