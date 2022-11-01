const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

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
app.get('*', checkUser);
app.get('/smoothies', requireAuth, (req, res) => res.render('smoothies'));
app.use(authRoutes);

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
