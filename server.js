//dependencies
const mongoose = require('mongoose');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

//middleware
//parses incoming requests with JSON
app.use(express.json());
//parses incoming requests with urlencoded
app.use(express.urlencoded({ extended: true }));
//serves static files
app.use(express.static('public'));
//point to routes for middleware functions
app.use(require('./routes'));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/pizza-hunt',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Log mongo queries being executed
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
