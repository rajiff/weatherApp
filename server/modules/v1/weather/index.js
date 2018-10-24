const router = require('express').Router();
const weatherAgent = require('./weatherAgent')

router.get('/', function(req, res) {
  // res.send({ message: 'Got it thanks' });
  
  let city = (req.query.city || 'Bangalore');
  let date = Date.now();

  weatherAgent
    .getWeather(city, date)
    .then((result) => {
      res.send(result);
    }, (err) => {
      res.status(500).send({ message: (err.message || 'Something went wrong, please try later..!') });
    })
});

module.exports = router;
