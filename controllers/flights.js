var Flight = require('../models/flight');



module.exports = {
    index,
    show,
    new: newFlight,
    create
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
    // res.render('flights/new');
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
    res.render('flights/show', {title: `${req.params.id} flight`, flight});
  });
}