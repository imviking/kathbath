const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const {PORT, MONGO_URL} = require('./config/config.js')

const db_url = MONGO_URL;
const port = PORT;
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const routes = require('./routes/index.js')
app.use('/', routes);
app.listen(port, () => {
  console.log('Server is running at http://localhost:' + port);

  // Connecting to MongoDB
  mongoose.connect(db_url)
    .then(() => {
      console.log('Connection to database established');
    })
    .catch((error) => {
      console.error('Error connecting to database:', error);
    });
});
