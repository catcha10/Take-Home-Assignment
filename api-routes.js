// Initialize express router
let router = require('express').Router();

// Import contact controller
var appController = require('./appController');

// Set default API response
router.get('/' , function (req, res) {
    res.json({
       status: 'API Its Working',
		message: 'Welcome to currency rate project!'}
    );
});

// to load all data into database and show all data
router.route('/load')
	.get(appController.index);
	
// get latest routes
router.route('/latest')
    .get(appController.latest);
	
// retrieve data with analyze
router.route('/analyze')
    .get(appController.analyze);

// get records by date filter YYYY-MM-DD`
router.route('/:time')
    .get(appController.bytime)

// Export API routes
module.exports = router;