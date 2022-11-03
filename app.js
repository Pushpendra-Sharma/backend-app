const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require('./routes');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cors());

const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cookieParser());

// database connection
dotenv.config();

mongoose
  .connect('mongodb://localhost:27017/QuizDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to DB...'))
  .catch(err => console.log('Cannot connect to DB ', err));

// routes
app.use('/api', routes);
app.get('/healthcheck', (req, res) => {
  return res.status(200).send('API is working');
});

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
