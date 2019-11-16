var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American','Southwest','United']
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function(){
            return new Date().setFullYear(2020);
        }
    }
});

module.exports = mongoose.model('Flight', flightSchema);