const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
  create,
};

function create(req, res) {
  Flight.findById(req.params.id, function (err, flightDoc) {
    // create ticket with req.body (form contents)
    // flight param on body of form, to the flight id
    req.body.flight = flightDoc._id;
    Ticket.create(req.body, function (err, ticket) {
      //   ticket.flight = req.params.id;
      //   res.send(flight);
      res.redirect(`/flights/${flightDoc._id}`);
    });
  });
}