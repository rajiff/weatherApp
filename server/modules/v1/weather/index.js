/* eslint ignore prefer-destructuring: 0 */
const router = require('express').Router();
const weatherAgent = require('./weatherAgent');

router.post('/', (req, res) => {
  const city = (req.body.queryResult.parameters['geo-city'] || 'Bangalore');
  let date = Date.now();

  // Get the date for the weather forecast (if present)
  if (req.body.queryResult.parameters.date) {
    date = req.body.queryResult.parameters.date;
  }

  weatherAgent
    .getWeather(city, date)
    .then((result) => {
      const response = { fulfillmentText: result.result.message };
      // console.log('Returning response ', response);
      res.json(response);
    }, (err) => {
      console.log('Error in weather request ', err);
      res.json({ fulfillmentText: 'I don\'t know the weather but I hope it\'s good!' });
    });
});

router.get('/', (req, res) => {
  // res.send({ message: 'Got it thanks' });

  const city = (req.query.city || 'Bangalore');
  const date = Date.now();

  weatherAgent
    .getWeather(city, date)
    .then((result) => {
      res.send(result);
    }, (err) => {
      res.status(500).send({ message: (err.message || 'Something went wrong, please try later..!') });
    });
});

module.exports = router;
