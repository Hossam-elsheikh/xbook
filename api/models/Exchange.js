const mongoose = require('mongoose')

const exchangeSchema = mongoose.Schema({
    bookID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Books',
    },
    user1ID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Books',
        required: true
    },
    user2ID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Books',
        required: true
    },
    exchangeDate: {
        type: Date,
        required: true
    },
    exchangeStatus: {
        type: String,
        enum: ['Pending', 'Accepted', 'Rejected','Completed'],
        default: 'Pending',
        required: true
    },
    exchangeType: {
        type: String,
        enum: ['Permanent', 'Temporary', 'Sell'],
        required: true
    },
    exchangeLocation: {
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point',
            required: true
        },
        coordinates: {
            type: [Number,Number],
            required: true
        }
    }
},{
    timestamps: true
})



module.exports = mongoose.model('Exchanges', exchangeSchema)