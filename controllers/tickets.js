
   
const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res){
    res.render('tickets/new', {
        flightId: req.params.id
    })
}

function create(req,res){
    const newTicket = {
        flight: req.params.id,
        seat: req.body.seat,
        price: req.body.price
    };

    Ticket.create(newTicket, function(err, ticket){
        res.redirect(`/flights/${ticket.flight}`)
    })
}
