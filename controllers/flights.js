var Flight = require('../models/flight');
var Ticket = require('../models/ticket');

module.exports = {
    index,
    show,
    new: newFlight,
    create,
    update
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
      res.render('flights/index', {flights});
    });
  }

function newFlight(req,res){
    Flight.find({}, function(err, flights) {
        res.render('flights/new', {flights});
      });

}

function create(req,res){
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
      }
    var flight = new Flight(req.body);
    flight.save(function(err){
        if (err) console.log(err);
        if (err) return res.render('flights/new');
        res.redirect('/flights');
        console.log(flight);
    });  

}


function show(req,res) {
  Flight.findById(req.params.id, function(err, flight){
    Ticket.find({flight: flight._id}, function(err, tickets) {
      res.render('flights/show', {
        title: `${req.params.id} flight`, 
        flight,
        tickets
      });
    });
  });
}

function update(req, res){
  // Flight.findByIdAndUpdate(req.params.id, req.body, {new: true }, function(err, flight){
  //   console.log(req.params.id)
  //   console.log(req.body)
  //   res.redirect(`/flights/${req.params.id}`);
  // });
  Flight.findById(req.params.id, function(err, flight){
    flight.destinations.push(req.body)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`);
    });
  })
}