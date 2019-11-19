var Flight = require('../models/flight');
var Ticket = require('../models/ticket');


module.exports = {
    show,
    create
};

function show(req, res){
    let id = req.params.id;
    res.render('tickets/new', {id});

}

function create(req, res){
    console.log(req.body);
    req.body.flight = req.params.id;
    console.log(req.body);
    Ticket.create(req.body, function(err, ticket){
        res.redirect(`/flights/${req.body.flight}`);
    });
}