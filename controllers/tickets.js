const Ticket = require('../models/ticket');
const Flight = require('../models/flight');
const flight = require('../models/flight');

module.exports = {
  new: newTicket,
  create,
};


function create(req, res) {
   
  Flight.findById(req.params.id, function (err, flightDocument) {
    req.body.flight = flightDocument._id
  Ticket.create(req.body, function (err, ticket) {
    
  console.log("ticket function is working")
    res.redirect(`/flights/${flightDocument._id}`);
  })
})
}

function newTicket(req, res) {
  console.log("This is the newTicket Function, which is called when you select add tickets ")
    res.render('tickets/new', {
     
  })
}