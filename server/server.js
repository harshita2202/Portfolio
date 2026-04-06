const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const dotenv = require('dotenv');

const contactRoute = require('./routes/contact');
const cvRoute = require('./routes/cv');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  methods: ['GET', 'POST'],
}));

app.use('/api/contact', contactRoute);
app.use('/api/cv', cvRoute);

app.get('/', (req, res) =>
  res.json({ msg: 'Portfolio API is running' })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port 5000`)
);