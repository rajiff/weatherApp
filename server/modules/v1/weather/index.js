const router = require('express').Router();

router.get('/', function(req, res) {
	res.send({message: 'Got it thanks'});
});

module.exports = router;