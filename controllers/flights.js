const Flight = require('../models/flight'); 

module.exports = {
	index,
	new: newFlight,
	show
}


function index(req, res){

	// Flight.find({}) // <- find every document
	// return an array
	Movie.find({}, function(err, movieDocuments){


		// respond to the client after the db query
		// res.render
		// aka inside the callback function
		console.log(movieDocuments, ' <- movieDocuments')
		res.render('movies/index', {
			title: 'Movies',
			movies: movieDocuments
			// Key
			// movies <- is the name of the variable we are injecting
			// into movies/index

		})
	})	

}