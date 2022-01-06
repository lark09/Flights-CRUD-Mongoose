const Flight = require('../models/flight');

module.exports = {
	create
};

function create(req, res) {
	// this function is to allow us to create a destination w/in the flight
	// embedding destinations allows us to add the array
	Flight.findById(req.params.id, function(err, flight) {
		flight.destinations.push(req.body);
		// remember to save after mutating the document!!
		flight.save(function(err) {
			res.redirect(`/flights/${flight._id}`);
		});
		console.log(`Destinations: ${flight.destinations}`);
	});
}


