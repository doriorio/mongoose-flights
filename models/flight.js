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
    }
},
{timestamps: { createdAt: 'created_at' }},
);

module.exports = mongoose.model('Flight', flightSchema);