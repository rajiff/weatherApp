const router = require('express').Router();
const weatherRoutes = require('./weather');

router.use('/weather', weatherRoutes);

module.exports = router;