const router = require('express').Router();

router.get('/', function(req, res) {
	res.send('Got it thanks')
});

module.exports = router;