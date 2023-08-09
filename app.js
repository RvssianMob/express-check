const express = require('express');
const app = express();

// Custom middleware to verify the time of the request
const checkWorkingHours = (req, res, next) => {
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();

  if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
    next(); // Proceed to the next middleware or route handler
  } else {
    res.send('Sorry, the web application is only available during working hours (Monday to Friday, from 9 to 17).');
  }
};

// Set up routes
app.use(checkWorkingHours);

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Home page!</h1>');
});

app.get('/services', (req, res) => {
  res.send('<h1>Our Services</h1>');
});

app.get('/contact', (req, res) => {
  res.send('<h1>Contact Us</h1>');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
