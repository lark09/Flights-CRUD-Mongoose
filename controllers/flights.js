const Flight = require('../models/flight'); 

module.exports = {
	index,
	new: newFlight,
    create,
	show
}
function index(req, res) {
    Flight.find({}, function (err, flightDocuments) {
      res.render("flights/index", {
        title: "Flights",
        flights: flightDocuments,
      });
    });
  }

  function newFlight(req, res){
      const newFlight = new Flight();
    //   obtain the default date
    const dt = newFlight.departs;
    // format the date for the value attribute of the input
    const departureDate = dt.toISOString().slice(0,16);
      res.render("flights/new", {departureDate, title: "Add New Flight"});

  }

  function create(req, res){
    Flight.create(req.body, function (err, flightDocument) {
        res.redirect("/flights");
      });
  }

  function show(req, res){
    // console.log(req.params, " < -req.params in the show route")
    Flight.findById(req.params.id, function(err, flightDocument){
        res.render("flights/show", {flight, title: "flight details"});
    })

  }