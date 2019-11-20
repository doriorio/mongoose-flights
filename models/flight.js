var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS','DAL','LAX','SAN','SEA']
    },
    arrival: {
        type: Date
    }
}) 

var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American','Southwest','United']
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        default: 40
    },
    departs: {
        type: Date,
        default: function(){
            var d = new Date();
            var year = d.getFullYear();
            var month = d.getMonth();
            var day = d.getDate();
            var c = new Date(year + 1, month, day);
            return c;
        }
    },
    destinations: [destinationSchema],
    // tickets: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Ticket'
    // }],
    airport: {
        type: String,
        enum: ['AUS','DAL','LAX','SAN','SEA'],
        default: 'SAN'
    }

},
{timestamps: { createdAt: 'created_at' }},
);

module.exports = mongoose.model('Flight', flightSchema);