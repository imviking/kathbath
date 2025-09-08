const session = require("express-session");

const sessionMiddleware = session({
  secret: "your_secret_key", // move to .env
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // true only with HTTPS
});

module.exports = sessionMiddleware;
