const express      = require('express');
const cors         = require('cors');
const dotenv       = require('dotenv');
const connectDB    = require('./config/db');
const contactRoute = require('./routes/contact');
const cvRoute      = require('./routes/cv');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  methods: ['GET', 'POST'],
}));
app.use(express.json());

app.use('/api/contact', contactRoute);
app.use('/api/cv',      cvRoute);

app.get('/', (req, res) => res.json({ msg: 'Portfolio API is running' }));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));