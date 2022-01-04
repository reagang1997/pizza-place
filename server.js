const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const cors = require('cors');
const passport = require('./config/passport');
const session = require('express-session');


const PORT = process.env.PORT || 8080;

const app = express();
const userRoutes = require('./routes/api/user');
// Set up sessions
const sess = {
    secret: 'Super secret secret',
    resave: false,
    saveUninitialized: false,
  };
  
  app.use(session(sess));
app.use(cors());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  // handle OPTIONS method
  if ('OPTIONS' == req.method) {
      return res.sendStatus(200);
  } else {
      next();
  }
});

// Set up sessions

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
}
else {
  app.use(express.static("public"));
}

app.use(userRoutes);
app.get('*', (request, response) => {

  response.sendFile(path.join(__dirname, 'client/build', 'index.html'));

});


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pizzaplace", {
  useNewUrlParser: true,
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
