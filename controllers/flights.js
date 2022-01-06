const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  index,
  new: newFlight,
  create,
  show,
  newTicket,
}
function index(req, res) {
  Flight.find({}, function (err, flightDocuments) {
    res.render("flights/index", {
      title: "Flights",
      flights: flightDocuments,
    });
  });
}

function newFlight(req, res) {
  const newFlight = new Flight();
  //   obtain the default date
  const dt = newFlight.departs;
  // format the date for the value attribute of the input
  // timezone offset of default date
  let timezoneOffset = dt.getTimezoneOffset() * 60000;
  // subtract offset from the default date
  const departureDate = new Date(dt - timezoneOffset).toISOString();
  // render local departure date
  res.render("flights/new", { departureDate });
  console.log(departureDate)

}

function create(req, res) {
  Flight.create(req.body, function (err, flightDocument) {
    res.redirect("/flights");
  });
}

function show(req, res) {
  // console.log(req.params, " < -req.params in the show route")
  const newFlight = new Flight();
  //   obtain the default date
  const dt = newFlight.departs;
  // format the date for the value attribute of the input
  // timezone offset of default date
  let timezoneOffset = dt.getTimezoneOffset() * 60000;
  // subtract offset from the default date
  const departureDate = new Date(dt - timezoneOffset).toISOString();
  // render local departure date
  Flight.findById(req.params.id, function (err, flight) {
    Ticket.find({ flight: flight._id }, function (err, tickets) {
      res.render('flights/show', {
        flight,
        tickets,
        departureDate,
        title: "flight details"
      });
    });
  });
}

function newTicket(req, res) {
  // res.send("new ticket function envoked");
  Flight.findById(req.params.id, function (err, flight) {
    console.error(err);
    res.render("tickets/new", { flight });
  });
}
